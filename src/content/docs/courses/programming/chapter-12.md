---
title: "第十二章 组合与继承"
description: "程序设计课程笔记：第十二章 组合与继承。"
---

<div class="note-meta"><a href="/courses/programming/">程序设计目录</a><a href="/downloads/programming/chapter-12.md" download>下载 Markdown</a></div>

## 关键考点总览
1. 组合的概念与对象成员初始化（优先用初始化列表；无默认构造/需传参时必须）
2. 继承的定义格式（派生方法：public/private/protected）
3. 派生类对基类成员的访问权限规则
4. 派生类对象的构造与析构顺序
5. 重定义基类的函数（使用作用域运算符调用基类同名函数）
6. 派生类对象赋给基类对象（自动转换）
7. 基类指针/引用指向派生类对象
8. 虚函数的定义与多态性实现
9. 虚析构函数的必要性
10. 纯虚函数与抽象类

---

## 详细知识点

### 12.1 组合

#### 定义/语法
- **组合**：用已有类的对象作为新定义类的数据成员，该成员称为**对象成员**。
  [来源：第12章 p5，组合]

- **组合表示 has-a 关系**：一种部分和整体的聚集关系。例如，每架飞机都有至少两个发动机。
  [来源：第12章 p5，组合]

#### 规则/规范
- **对象成员应在初始化列表中构造**：成员对象在进入构造函数体之前就已完成构造；若要选择其非默认构造函数（或该类型没有默认构造函数），必须在初始化列表中调用相应构造函数；在构造函数体内只能对其赋值，不能“再次构造”。
  [来源：第12章 p5，Notes]

#### 代码模式
```cpp
class Rational{
public:
  int r1, r2;
  Rational(int a, int b){r1=a; r2=b;}
};
class Complex{
  Rational real;  //对象成员-实部
  Rational imag;  //对象成员-虚部
public:
  Complex(int r1=0, int r2=1, int i1=0, int i2=1)
    :real(r1, r2), imag(i1, i2) {}  // 因 Rational 无默认构造，此处必须用初始化列表
};
```
[来源：第12章 p5，组合示例代码]

---

### 12.2 继承

#### 定义/语法
- **继承**：通过对已有类的扩展，形成一个新的类。已有的类称为**基类**（或父类），继承实现的新类称为**派生类**（或子类）。
  [来源：第12章 p8，继承的概念]

- **派生类对象包含：基类子对象（数据成员部分） + 派生类新增的数据成员**；成员函数不随对象逐份存储，但派生类可新增/重写成员函数以扩展行为。
  [来源：第12章 p8，继承的概念]

- **定义格式**：
```cpp
class 派生类名 : 派生方法 基类名
{
  //派生类新增的数据成员和成员函数
};
```
[来源：第12章 p8，继承的概念]

- **派生方法选项**：
  - `public`：公有派生（常用）
  - `private`：私有派生（class 默认；struct 默认 public）
  - `protected`：保护派生
  [来源：第12章 p8，继承的概念]

#### 代码模式
```cpp
class Point_2d { // 基类
private: 
  int x, y;
public:
  void setpoint2(int a, int b) {x = a; y = b;}
  int getx() {return x;}
  int gety() {return y;}
};

class Point_3d : public Point_2d { // 派生类
private:
  int z;
public:
  void setpoint3(int a, int b, int c) {setpoint2(a,b); z=c;}
  int getz() {return z;}
};
```
[来源：第12章 p9，继承示例]

#### 规则/规范
- **派生类的成员函数不能访问基类的私有数据成员**：必须通过基类的公有成员函数间接访问。
  [来源：第12章 p9，Notes；p11]

- **protected 访问特性**：protected 成员是一类特殊的私有成员，对外它是私有的，但能被派生类的成员函数访问。
  [来源：第12章 p15]

---

### 12.3 派生类对基类成员的访问权限

#### 判定条件/等价表述

**完整访问权限表**：

| 基类成员访问说明符 | public 派生 | protected 派生 | private 派生 |
|---|---|---|---|
| **public** | 在派生类中为 public | 在派生类中为 protected | 在派生类中为 private |
| **protected** | 在派生类中为 protected | 在派生类中为 protected | 在派生类中为 private |
| **private** | 在派生类中不可访问（仍属于基类子对象） | 在派生类中不可访问（仍属于基类子对象） | 在派生类中不可访问（仍属于基类子对象） |

[来源：第12章 p15，派生类对基类成员的访问]

#### 易错点与辨析
- **私有成员，私有派生**：对象访问❌，函数访问❌
- **私有成员，公有派生**：对象访问❌，函数访问❌
- **公有成员，私有派生**：对象访问❌，函数访问✔️
- **公有成员，公有派生**：对象访问✔️，函数访问✔️
  [来源：第12章 p12，派生类的访问权限]

#### 例题结论
**【执行结果分析】** 若将 `Point_3d` 改为 `private` 派生：
```cpp
class Point_3d: private Point_2d {...}
```
则需在派生类中新增包装函数才能访问基类的公有函数：
```cpp
// 在 Point_3d 中添加：
int getx3d() {return getx();}
int gety3d() {return gety();}
```
[来源：第12章 p17，练习 Notes答案]

---

### 12.4 派生类对象的构造与析构

#### 执行逻辑
- **构造顺序**：先构造各基类子对象（按继承列表的声明顺序）→ 再构造成员对象（按成员声明顺序，与初始化列表书写顺序无关）→ 最后执行派生类构造函数体。
  [来源：第12章 p19，派生类对象的构造与析构]

- **析构顺序**：与构造顺序相反：先执行派生类析构函数体 → 再销毁成员对象（按成员声明逆序）→ 最后析构各基类子对象（按继承列表逆序）。
  [来源：第12章 p19，派生类对象的构造与析构]

#### 规则/规范
- **基类的初始化只能在派生类的初始化列表中完成**，不能放到派生类的构造函数体里。
  [来源：第12章 p18，Notes]

- **如果用基类的默认构造函数，则可以从派生类构造函数初始化列表中省略**。
  [来源：第12章 p19]

#### 代码模式
```cpp
class Point_2d {
private: int x, y;
public:
  Point_2d(int a, int b) {x = a; y = b;}  // 基类构造函数
};

class Point_3d : public Point_2d {
private: int z;
public:
  Point_3d(int a, int b, int c) : Point_2d(a, b) {z = c;}  // 初始化列表调用基类构造
};
```
[来源：第12章 p18，派生类对象的构造与析构]

#### 例题结论
**【执行结果分析】** 多级派生的构造析构顺序：
```cpp
class Base { ... };
class Derive1 : public Base { ... };
class Derive2 : public Derive1 { ... };

int main() {
  Derive2 op(1, 2, 3);
  return 0;
}
```
输出：
```
constructing base
constructing derive1
constructing derive2
destructing derive2
destructing derive1
destructing base
```
[来源：第12章 p24，示例]

**【执行结果分析】** 组合+继承的构造顺序：
```cpp
#include <iostream>
using namespace std;

class data {
public:
  explicit data(int x) { cout << "class data " << x << endl; }
};

class a {
  data d1;
public:
  explicit a(int x) : d1(x) { cout << "class a" << endl; }
};

class b : public a {
  data d2;
public:
  explicit b(int x) : a(x - 1), d2(x) { cout << "class b" << endl; }
};

class c : public b {
public:
  explicit c(int x) : b(x - 1) { cout << "class c" << endl; }
};

int main() {
  c object(5);
  return 0;
}
```
输出：
```
class data 3
class a
class data 4
class b
class c
```
[来源：第12章 p25，示例 Notes答案]

---

### 12.5 重定义基类的函数

#### 定义/语法
- **重定义/隐藏（name hiding）**：派生类声明了与基类同名的成员函数时，会**隐藏**基类的同名函数（含重载集合）；若该函数同时满足“虚函数 + 同签名”，则属于**重写（override）**，可通过基类指针/引用实现运行时多态。
  [来源：第12章 p20，重定义基类的函数]

#### 规则/规范
- **在派生类中调用被隐藏/被重写的基类同名函数**：使用**作用域运算符** `基类名::函数名()`。
  [来源：第12章 p21，派生类定义示例]

#### 代码模式
```cpp
class Circle {
public:
  double radius;
  double area() { return 3.14*radius*radius; }
};

class Ball : public Circle {
public:
  Ball(double r = 0) { radius = r; }
  double area() { return 4 * Circle::area(); }  // 使用 Circle:: 调用基类函数
  double volume() { return 4*3.14*radius*radius*radius/3; }
};
```
[来源：第12章 p21，派生类定义示例]

#### 易错点与辨析
- ⚠️ **是否必须显式定义派生类构造函数取决于基类构造函数**：若基类没有可访问的默认构造函数（或需要用特定基类构造函数初始化），派生类必须在初始化列表中显式调用基类构造；若基类有可访问的默认构造函数且无需额外初始化，派生类可使用编译器合成的默认构造函数。本例中 `Ball` 定义构造函数是为了给 `radius` 赋初值。
  [来源：第12章 p21，Notes]

---

### 12.6 派生类对象赋给基类对象

#### 规则/规范
- **派生类对象可以自动转换成基类对象**，不必定义类型转换函数。派生类中的基类部分赋给基类对象，派生类新增加的成员被舍弃。
  [来源：第12章 p26]

- **基类对象不能隐式转换为派生类对象**：对象层面不存在自动“向下转换”。若确需从 `Base` 构造 `Derived`，只能显式提供 `Derived(const Base&)` 等转换构造函数/工厂函数；若是指针/引用且其动态类型确为派生类，可用 `dynamic_cast` 做安全向下转型。
  [来源：第12章 p26]

#### 代码模式
```cpp
class Base { public: int num1; };
class D1 : public Base { public: int num2; };

D1 d;
d.num1 = 1; d.num2 = 2;
Base b;
b = d;           // ✔️ 派生类赋给基类，num1被复制，num2被忽略
cout << b.num1;  // 输出 1
```
[来源：第12章 p26，将派生类对象赋给基类对象]

---

### 12.7 基类指针/引用指向派生类对象

#### 规则/规范
- **基类指针/引用可以指向派生类对象**：通过该指针/引用只能直接访问**基类声明的接口**（不能直接访问派生类新增成员）；若调用的是基类虚函数，则会动态绑定到派生类的重写实现。
  [来源：第12章 p27]

- **派生类指针不能指向基类对象**（除非进行强制类型转换，但这样做很危险）。
  [来源：第12章 p27，Notes]

- **基类引用是给派生类对象中的基类部分取了别名**。
  [来源：第12章 p27]

#### 代码模式
```cpp
// 指针方式
D1 d;
d.num1 = 1; d.num2 = 2;
Base *bp = &d;
cout << bp->num1 << endl;  // 输出 1，只能访问基类部分
bp->num1 = 3;
cout << d.num1;            // 输出 3

// 引用方式
D1 d;
d.num1 = 1; d.num2 = 2;
Base &b = d;
cout << b.num1 << endl;    // 输出 1
```
[来源：第12章 p27，基类指针指向派生类对象]

---

### 12.8 虚函数与多态性

#### 定义/语法
- **多态性**：不同对象收到相同的消息时产生的动作不同。
  [来源：第12章 p29，多态性]

- **虚函数**：在基类中用关键词 `virtual` 说明，并在派生类中重新定义的函数。是一种**使用基类指针访问派生类内容的途径**。
  [来源：第12章 p30，虚函数]

- **定义格式**：
```cpp
virtual 返回类型 函数名(参数表) { ... }
```
[来源：第12章 p30]

#### 规则/规范
- **只要基类函数是 virtual，派生类对该函数的同签名重写会自动保持 virtual 属性**（即使派生类不写 `virtual`）；若仅同名但签名不同，则是隐藏/重载，不等价于重写，建议使用 `override` 关键字避免写错。
  [来源：第12章 p30，Notes]

- **用基类指针调用虚函数时**：先在相应的派生类中寻找此虚函数的重定义：如找到，则执行派生类中的函数；否则，执行基类的虚函数。
  [来源：第12章 p31，运行时多态的实现]

- **虚函数分派规则**：通过基类指针/引用调用虚函数时，运行时会选择对象动态类型中“最末端”的重写版本；若派生类未重写，则沿继承链使用最近的基类实现。若该函数为纯虚函数且最终未提供实现，则相关类仍为抽象类，不能实例化（会编译报错；强行调用纯虚函数会导致未定义行为）。
  [来源：第12章 p33，Notes]

#### 代码模式
```cpp
class Shape {
public: 
  virtual void printShapeName() { cout << "Shape" << endl; }
};
class Point : public Shape {
public: 
  void printShapeName() { cout << "Point" << endl; }
};
class Circle : public Point {
public: 
  void printShapeName() { cout << "Circle" << endl; }
};
```
[来源：第12章 p30，虚函数示例]

#### 执行逻辑

**无 virtual vs 有 virtual 的对比**：

| 代码 | 无 virtual 输出 | 有 virtual 输出 |
|---|---|---|
| `Shape *sp = &aPoint; sp->printShapeName();` | Shape | Point |
| `sp = &aCircle; sp->printShapeName();` | Shape | Circle |
| `sp = &aCylinder; sp->printShapeName();` | Shape | Cylinder |

[来源：第12章 p31，运行时多态的实现]

#### 例题结论
**【执行结果分析】** 派生类未重定义虚函数时的查找：
```cpp
class Cylinder : public Circle { };  // 未重定义 printShapeName

Cylinder aCylinder;
Shape &shape1 = aCylinder;
shape1.printShapeName();  // 输出 Circle（向上查找到 Circle 类）
```
[来源：第12章 p33，例题 Notes答案]

**【执行结果分析】** 综合习题：
```cpp
class BaseFly {
public:
  virtual void Fly() { cout << "----Class BaseFly::Fly()----\n"; }
};
class BirdFly : public BaseFly {
public:
  void Fly() { cout << "----Class BirdFly::Fly()----\n"; }
};
class DragonFly : public BaseFly {
public:
  void Fly() { cout << "----Class DragonFly::Fly()----\n"; }
};

int main() {
  BaseFly *pBase, oBase;
  BirdFly *pBird = new BirdFly();
  pBase = pBird;
  pBase->Fly();              // BirdFly（虚函数+指针）
  DragonFly *pDragon = new DragonFly();
  pBase = pDragon;
  oBase = *pDragon;          // 对象赋值，只复制基类部分
  pBase->Fly();              // DragonFly（虚函数+指针）
  pBird->Fly();              // BirdFly（派生类指针直接调用）
  pDragon->Fly();            // DragonFly（派生类指针直接调用）
  oBase.Fly();               // BaseFly（对象调用，非指针，无多态）
  return 0;
}
```
输出：
```
----Class BirdFly::Fly()----
----Class DragonFly::Fly()----
----Class BirdFly::Fly()----
----Class DragonFly::Fly()----
----Class BaseFly::Fly()----
```
[来源：第12章 p34，习题 Notes答案]

**【执行结果分析】** 虚函数与非虚函数对比：
```cpp
#include <iostream>
using namespace std;

class base_class {
public:
  const char *infor;

  explicit base_class(const char *s) : infor(s) {}

  virtual void print() { cout << infor << endl; }  // 虚函数
  void disp() { cout << infor << endl; }           // 非虚函数

  virtual ~base_class() = default;                 // 多态基类：建议虚析构
};

class cube : public base_class {
public:
  explicit cube(const char *s) : base_class(s) {}

  void print() override { cout << "Spring" << endl; }
  void disp() { cout << "Summer" << endl; }
};

class sphere : public base_class {
public:
  explicit sphere(const char *s) : base_class(s) {}

  void print() override { cout << "Autumn" << endl; }
  void disp() { cout << "Winter" << endl; }
};

int main() {
  cube c("Hello");
  sphere s("xjtu");
  base_class b1("sjtu"), *pb1, &b2 = s;

  b1 = c;           // 对象赋值（切片）：只复制 base_class 部分（infor）
  pb1 = &c;         // 指针指向派生类

  b1.print();       // Hello（对象调用）
  pb1->print();     // Spring（虚函数+指针→派生类）
  b2.disp();        // xjtu（非虚函数，静态绑定到 base_class::disp）

  return 0;
}
```
输出：
```
Hello
Spring
xjtu
```
[来源：第12章 p35，习题 Notes答案]

---

### 12.9 虚析构函数

#### 规则/规范
- **构造函数不能是虚函数**：对象都没有构造出来，使用指针没有意义。
  [来源：第12章 p36，Notes]

- **析构函数可以且常常应声明为 virtual**：只要类被设计为多态基类（需要通过基类指针/引用删除派生类对象，或类中含虚函数），就应提供虚析构函数；否则可不必，以避免不必要的开销。
  [来源：第12章 p36]

- **若基类析构函数非 virtual，却用基类指针 `delete` 派生类对象**：行为是**未定义（Undefined Behavior）**；常见后果是只执行基类析构导致资源泄漏/未释放/析构不完整，但不能依赖具体表现。
  [来源：第12章 p36]

- **当把析构函数定义为虚函数时**：当用基类指针析构一个派生类对象时，会自动找到并调用派生类的析构函数，而派生类的析构函数会自动调用父类的析构函数，从而依次完成对整个派生类对象的正确析构。
  [来源：第12章 p36]

---

### 12.10 纯虚函数与抽象类

#### 定义/语法
- **纯虚函数**：在基类中以 `= 0` 声明的虚函数，用于强制派生类提供实现；纯虚函数**可以**在类外给出定义（例如供基类析构或公共逻辑复用），但仍使该类保持抽象。在派生类里需要实现基类的纯虚函数或继续声明为纯虚函数。
  [来源：第12章 p38，纯虚函数与抽象类]

- **纯虚函数定义格式**：
```cpp
virtual 类型 函数名(参数表) = 0;
```
[来源：第12章 p38]

- **抽象类**：如果一个类中至少有一个纯虚函数，则该类被称为抽象类。
  [来源：第12章 p38]

#### 规则/规范
- **抽象类不能建立对象，但是可以建立指针**。
  [来源：第12章 p38]

- **如果派生类给出了基类所有纯虚函数的实现，则它不再是抽象类**。
  [来源：第12章 p38]

- **纯虚函数的作用**：规范派生类的编写格式，避免新类型设计过程中忘记定义某些必须的成员函数。
  [来源：第12章 p39，Notes]

#### 代码模式
```cpp
class Shape {
public:
  virtual void area() = 0;  // 纯虚函数
};

class Rectangle : public Shape {
  float w, h;
public:
  Rectangle(float ww, float hh) { w = ww; h = hh; }
  void area() { cout << "area is:" << w*h << endl; }  // 实现纯虚函数
};

class Circle : public Shape {
  float r;
public:
  Circle(float rr) { r = rr; }
  void area() { cout << "area is:" << 3.14*r*r << endl; }  // 实现纯虚函数
};

int main() {
  Shape *ptr;              // 可以定义抽象类指针
  Rectangle ob1(5, 10);
  Circle ob2(10);
  ptr = &ob1; ptr->area(); // 多态调用
  ptr = &ob2; ptr->area();
  return 0;
}
```
[来源：第12章 p39，抽象类示例]

---

## 本章总结

- **面向对象程序设计的一个重要目标是代码重用**。
  [来源：第12章 p40，总结]

- **代码重用的两种方法**：
  1. **组合**：将某一个已定义类的对象作为当前类的数据成员，则对此数据成员操作的代码得到了重用；
  2. **继承**：在已有类（基类）的基础上加以扩展，形成一个新类（派生类）。在派生类定义时，只需要实现扩展功能，而基类有的功能得到了重用。
  [来源：第12章 p40，总结]

---

## 学习目标对照

根据 p3 学习目标页，本章需要掌握：

| 目标 | 对应知识点 |
|---|---|
| 能在编程中使用继承 | 12.2-12.5 继承定义、访问权限、构造析构、重定义 |
| 填空，读代码给结果 | 所有例题结论部分 |
| 继承 | 12.2-12.7 |
| 虚函数 | 12.8-12.9 |
| 抽象类 | 12.10 |

[来源：第12章 p3，学习目标]
