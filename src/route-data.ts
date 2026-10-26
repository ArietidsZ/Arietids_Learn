/**
 * Navigation that follows the reader.
 *
 * The sidebar lists each chapter once, by its detailed note (astro.config.mjs). On a quick page the
 * chapters of that course link to their quick versions instead, so moving through the sidebar, or
 * by previous/next, stays in the version being read; the switch under the title changes version.
 * Previous/next are rebuilt from that sidebar, a link into another course is named with the course,
 * and landing pages (the home page and the 404 page) have none.
 */
import { defineRouteMiddleware, type StarlightRouteData } from '@astrojs/starlight/route-data';
import { courses, href, placeOf, versions } from './lib/catalog';

type Entry = StarlightRouteData['sidebar'][number];
type Link = Extract<Entry, { type: 'link' }>;
type Group = Extract<Entry, { type: 'group' }>;

/** A detailed note's path → its quick version's path, per course. */
const quickOf = new Map(
  courses.flatMap((course) =>
    course.notes.flatMap((note) => {
      const { quick } = versions(course, note);
      return !note.quick && quick ? [[href(note), href(quick)] as const] : [];
    }),
  ),
);

export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;
  const path = context.url.pathname.endsWith('/') ? context.url.pathname : `${context.url.pathname}/`;
  const place = placeOf(route.id);
  const quick = place?.note?.quick === true;
  const courseIndex = place ? `/courses/${place.course.id}/` : undefined;

  /** Rebuild the tree with the reading version applied and the current page marked. */
  const follow = (entries: Entry[], inCourse: boolean): Entry[] =>
    entries.map((entry) => {
      if (entry.type === 'group') {
        const own = entry.entries.some((e) => e.type === 'link' && e.href === courseIndex);
        return { ...entry, entries: follow(entry.entries, own) } satisfies Group;
      }
      const target = quick && inCourse ? (quickOf.get(entry.href) ?? entry.href) : entry.href;
      return { ...entry, href: target, isCurrent: target === path } satisfies Link;
    });
  route.sidebar = follow(route.sidebar, false);

  if (route.entry.data.template === 'splash') {
    route.pagination = { prev: undefined, next: undefined };
    return;
  }

  // Previous/next: the neighbours in the sidebar's reading order, named for a reader who meets
  // them out of context (a course's index is "大学物理", not "课程目录").
  const order: { link: Link; group?: Group }[] = [];
  const walk = (entries: Entry[], group?: Group) => {
    for (const e of entries) e.type === 'group' ? walk(e.entries, e) : order.push({ link: e, group });
  };
  walk(route.sidebar);
  const at = order.findIndex((o) => o.link.isCurrent);
  if (at < 0) return;
  const here = order[at]!;
  const isCourseIndex = (link: Link) => {
    const p = placeOf(link.href.slice(1, -1));
    return p !== undefined && p.note === undefined;
  };
  const name = (o: (typeof order)[number] | undefined): Link | undefined => {
    if (!o) return undefined;
    let label = o.link.label;
    if (o.group && isCourseIndex(o.link)) label = o.group.label;
    else if (o.group && o.group !== here.group) label = `${o.group.label} · ${o.link.label}`;
    return { ...o.link, label, isCurrent: false };
  };
  route.pagination = {
    prev: route.entry.data.prev === false ? undefined : name(order[at - 1]),
    next: route.entry.data.next === false ? undefined : name(order[at + 1]),
  };
});
