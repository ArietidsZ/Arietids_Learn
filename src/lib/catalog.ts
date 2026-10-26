/**
 * The course catalog (content-manifest.json, written by scripts/import_archive.py), indexed by page
 * so that a page can be placed in it: the course link above a title, the detailed/quick switch,
 * the sidebar that follows the reading version and the previous/next links.
 */
import manifest from '../../content-manifest.json';

export type Course = (typeof manifest.courses)[number];
export type Note = Course['notes'][number];

export interface Place {
  course: Course;
  /** The note a page shows; absent on the course's own index page. */
  note?: Note;
  /** The same chapter in the other version (detailed or quick), when there is one. */
  other?: Note;
}

export const courses: Course[] = manifest.courses;

const places = new Map<string, Place>();
for (const course of courses) {
  places.set(`courses/${course.id}`, { course });
  for (const note of course.notes) {
    const other = course.notes.find((n) => n.code === note.code && n.quick !== note.quick);
    places.set(note.slug, { course, note, other });
  }
}

/** Where a page sits in the catalog, by its Starlight route id ("courses/physics/chapter-03"). */
export const placeOf = (id: string): Place | undefined => places.get(id.replace(/\/$/, ''));

/** A page's path on the site. */
export const href = (note: Note) => `/${note.slug}/`;

/** A chapter's name without the version: on its page, the version is shown by the switch. */
export const chapterName = (note: Note) => note.shortTitle.replace(/\s*·\s*速览$/, '');

/** The detailed note of a chapter, and its quick version if it has one. */
export function versions(course: Course, note: Note): { detailed: Note; quick?: Note } {
  const pair = course.notes.filter((n) => n.code === note.code);
  return { detailed: pair.find((n) => !n.quick) ?? note, quick: pair.find((n) => n.quick) };
}
