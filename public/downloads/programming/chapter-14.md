# 第十四章 输入输出

> Arietids Learn · 个人课程复习笔记
> 在线阅读：https://learn.arietids.net/courses/programming/chapter-14/

## 关键考点总览

1. 文件IO的三步骤：定义文件流对象 → 打开文件 → 访问文件 → 关闭文件
2. 文件流类型：`ifstream`（读）、`ofstream`（写）、`fstream`（读写）
3. 文件打开方式与失败检测（`if (!file)`）
4. 文件顺序访问：`>>`/`<<` 运算符、`eof()` 判断文件结束
5. 文件定位指针：`seekg`/`seekp`、`tellg`/`tellp`
6. 二进制读写：`read`/`write` 与 `reinterpret_cast` 类型转换
7. 格式化输出：进制转换（`hex`/`oct`/`dec`）、精度（`setprecision`）、域宽（`setw`）
8. 控制台输入：`cin.get()` 与 `>>` 的区别（是否跳过空白字符）
9. 控制台输出：字符指针输出地址需强制转换为 `void*`

---

## 详细知识点

### 14.1 基本概念

#### 定义/语法

- **输入输出定义**：程序与外部设备交换信息的过程，信息以数据流的形式存在。
  [来源：第14章 p5，输入输出]

- **C++ IO特点**：输入输出不是语言定义的部分，而是由**标准库**提供。
  [来源：第14章 p5，输入输出]

- **三种IO方式**：
  1. 基于控制台的I/O（键盘输入、命令行显示）
  2. 基于文件的I/O（本章重点）
  3. 基于字符串的I/O
  [来源：第14章 p5，Notes]

#### 规则/规范

- **IO库对应关系**：
  | 库 | 用途 |
  |---|---|
  | `<iostream>` | 控制台IO |
  | `<fstream>` | 文件IO |
  | `<sstream>` | 字符串IO |
  [来源：第14章 p6，Notes]

- **IO类继承关系**：`ios` → `istream`/`ostream` → `iostream`；各自派生出文件流和字符串流。
  [来源：第14章 p7，Notes]

- **高级IO vs 低级IO**：
  - 低级IO：直接操作数据流中的字节（OS控制）
  - 高级IO：操作数据单元（整数、浮点数、字符串等）
  [来源：第14章 p8]

- **格式化IO vs 无格式IO**：
  - 无格式IO：数据视为二进制序列，传输速度快
  - 格式化IO：按类型处理数据，需额外处理时间，不适合大容量数据传输
  [来源：第14章 p8]

#### 执行逻辑

- **输入输出缓冲机制**：
  1. 每个IO对象对应一个外围设备，都有缓存区
  2. 程序与缓存之间交互
  3. 缓存与外设之间交互（操作系统完成）
  [来源：第14章 p11]

- **输出缓冲区刷新的四种情况**：
  1. 程序正常结束（main返回时清空所有输出缓冲区）
  2. 缓冲区已满
  3. 使用操纵符（如`endl`）显式刷新
  4. 关联的输入输出流切换（`cin`操作会刷新`cout`缓冲区）
  [来源：第14章 p12]

---

### 14.2 控制台IO

#### 定义/语法

- **四个标准IO对象**（`<iostream>`）：
  | 对象 | 连接设备 |
  |---|---|
  | `cin` | 标准输入（键盘） |
  | `cout` | 标准输出（显示器） |
  | `cerr` | 标准错误输出 |
  | `clog` | 标准日志输出 |
  [来源：第14章 p14]

#### 输入流操作

##### 规则/规范

- **流读取运算符 `>>`**：会**跳过**输入流中的空格、tab、换行符等空白字符。
  [来源：第14章 p15]

- **EOF标识**：
  - Windows系统：`Ctrl+Z`
  - 类Unix系统：`Ctrl+D`
  [来源：第14章 p15]

- **`cin` 作为循环条件**：`while(cin >> x){}` 每轮循环读入一个数据，遇EOF停止。
  [来源：第14章 p15，Notes]

##### 代码模式

- **`get()` 函数的三种形式**：

  ```cpp
  // 1. 无参数：读入一个字符（包括空白字符和EOF），返回读入的字符
  char a = cin.get();
  
  // 2. 带一个字符引用参数：将下一字符存入参数，返回流对象引用
  cin.get(ch);
  
  // 3. 带三个参数：buffer地址、buffer大小、结束字符（默认'\n'）
  cin.get(ch, 80, '\n');  // 读取最多79个字符或遇'\n'停止
  ```
  [来源：第14章 p16-17]

- **`read()` 无格式输入**：
  ```cpp
  char buffer[80];
  cin.read(buffer, 10);  // 读入10个字符到buffer
  cout << cin.gcount();  // 用gcount()统计实际读入字符个数
  ```
  [来源：第14章 p18]

##### 易错点与辨析

- ⚠️ **`get()` vs `>>` 的区别**：
  - `get()`：读取**包括空白字符**在内的所有字符
  - `>>`：**跳过**空白字符
  
  ```cpp
  char a, b, c;
  // 输入 "1 2 3↙"
  a = cin.get(); b = cin.get(); c = cin.get();  // a='1', b=' ', c='2'
  cin >> a >> b >> c;                            // a='1', b='2', c='3'
  ```
  [来源：第14章 p16，Notes]

- ⚠️ **`get` vs `getline` 对结束字符的处理**：
  - `get`：结束字符**保留**在输入流缓冲区
  - `getline`：结束字符从输入流中**删除**
  [来源：第14章 p17]

#### 输出流操作

##### 规则/规范

- **`<<` 运算符特性**：
  - 二元左结合运算符
  - 第一操作数为输出流对象，第二操作数为要输出的数据
  - 返回第一操作数的引用（支持链式调用）
  - 自动判别数据类型并转换为字符显示
  [来源：第14章 p20]

- **字符指针输出规则**：
  - 默认输出指针指向的**字符串内容**
  - 若要输出**地址值**，需强制转换为 `void*`
  
  ```cpp
  char *ptr = "abcdef";
  cout << ptr;            // 输出：abcdef
  cout << (void*)ptr;     // 输出：0046C04C（地址）
  ```
  [来源：第14章 p20]

##### 代码模式

- **`put()` 输出字符**：
  ```cpp
  cout.put('A');              // 输出字符'A'
  cout.put('A').put('\n');    // 连续调用
  cout.put(65);               // 用ASCII码输出'A'
  ```
  [来源：第14章 p21]

- **`write()` 无格式输出**：
  ```cpp
  char buffer[] = "HAPPY BIRTHDAY";
  cout.write(buffer, 10);   // 输出：HAPPY BIRT
  ```
  [来源：第14章 p22]

#### 格式化输入/输出

##### 定义/语法

- **进制转换操纵符**：
  | 操纵符 | 作用 |
  |---|---|
  | `hex` | 设为十六进制 |
  | `oct` | 设为八进制 |
  | `dec` | 设为十进制 |
  | `setbase(n)` | 设为n进制（n=8/10/16） |
  
  **注意**：使用 `setbase` 需包含 `<iomanip>` 头文件。
  [来源：第14章 p23]

- **精度设置**：
  ```cpp
  cout.precision(5);      // 成员函数方式
  cout << setprecision(5); // 操纵符方式（需<iomanip>）
  ```
  设置后影响**之后所有**浮点数输出，直到下次设置。
  [来源：第14章 p25]

- **域宽设置**：
  ```cpp
  cout << setw(5) << x;   // x占5个字符宽度，不足用空格填充
  ```
  **注意**：域宽设置**仅对下一次**输入/输出有效，之后恢复默认值。
  [来源：第14章 p27]

##### 规则/规范

- **进制设置的持久性**：流的基数值只有被**显式更改**时才会变化，否则一直沿用。
  [来源：第14章 p23]

- **精度超出时的处理**：当数据位数超过设置精度时，自动改为**科学计数法**。
  [来源：第14章 p25]

- **域宽不足时的处理**：
  - 输出：如果输出值宽度比域宽大，则**忽略域宽**，按实际值输出
  - 输入：如果输入字符数大于域宽，只读入域宽指定的字符数
  [来源：第14章 p27，Notes]

##### 例题结论

- **【执行结果分析】** 进制转换示例：
  ```cpp
  int n;
  cin >> oct >> n;  // 输入八进制30
  cout << hex << n; // 输出十六进制18
  cout << dec << n; // 输出十进制24
  ```
  输入八进制30 = 十进制24 = 十六进制18
  [来源：第14章 p24，示例代码]

##### 代码模式

- **自定义流操纵符**：
  ```cpp
  ostream &操纵符名(ostream &os) {
      // 需要执行的操作
      return os;
  }
  
  // 示例：定义tab操纵符
  ostream &tab(ostream &os) { return os << '\t'; }
  
  // 使用
  cout << a << tab << b << endl;
  ```
  [来源：第14章 p29]

---

### 14.3 文件IO（重点）

#### 定义/语法

- **文件概念**：C++把每个文件看成一个有序的字节流（二进制序列），每个文件以**文件结束符(EOF)**结束。
  [来源：第14章 p31]

- **文件流类型**（`<fstream>`）：
  | 类型 | 用途 |
  |---|---|
  | `ifstream` | 输入文件流（只读） |
  | `ofstream` | 输出文件流（只写） |
  | `fstream` | 输入输出文件流（读写） |
  [来源：第14章 p32]

- **文件流对象存在的意义**：
  1. 抽象硬件差异：统一接口操作不同存储设备
  2. 缓冲机制：提高读写效率
  3. 安全控制：通过打开模式限制操作权限
  [来源：第14章 p32]

#### 文件打开

##### 代码模式

- **两种打开方式**：
  ```cpp
  // 方式1：构造函数打开
  ofstream outfile("file1.txt", fstream::out);
  
  // 方式2：成员函数open打开
  ifstream infile;
  infile.open("file2.txt", fstream::in);
  ```
  [来源：第14章 p33]

- **文件打开模式**：
  | 模式 | 含义 |
  |---|---|
  | `ios::in` | 读方式打开 |
  | `ios::out` | 写方式打开 |
  | `ios::app` | 追加方式打开 |
  | `ios::ate` | 打开后定位到文件尾 |
  | `ios::trunc` | 若文件存在则清空 |
  | `ios::binary` | 二进制方式打开 |
  
  **注意**：`ate`、`trunc` 不能单独使用，需与其他模式组合，如 `ios::trunc | ios::out | ios::in`
  [来源：第14章 p33，Notes]

##### 规则/规范

- **打开失败检测**：如果文件打开失败，流对象会得到一个**0值（false）**。
  ```cpp
  if (!infile) {
      cout << "open file error\n";
      return 1;
  }
  ```
  [来源：第14章 p33-34]

#### 文件顺序访问

##### 代码模式

- **读写操作**：使用 `>>` 和 `<<` 运算符，与控制台IO相同。
  ```cpp
  ifstream in("file");
  int i;
  while (in >> i) cout << i << ' ';  // 方式1：检查读取操作
  
  // 方式2：使用eof()
  while (!in.eof()) {
      in >> i;
      cout << i << ' ';
  }
  ```
  [来源：第14章 p34]

##### 规则/规范

- **文件结束检测**：
  - `eof()` 成员函数：遇到文件结束返回1，否则返回0
  - 直接检查 `>>` 操作结果：成功返回true
  [来源：第14章 p34]

#### 文件定位指针

##### 定义/语法

- **文件定位指针**：`long`类型数据，指出当前读写在文件中的位置。
  [来源：第14章 p35]

- **指针初始位置**：
  - 输入方式打开：读指针指向文件第一个字节
  - 输出方式打开：写指针指向文件第一个字节
  - 追加方式打开：写指针指向文件尾
  [来源：第14章 p35]

##### 代码模式

- **获取指针位置**：
  ```cpp
  ifstream对象.tellg();  // 获取读指针位置
  ofstream对象.tellp();  // 获取写指针位置
  ```
  [来源：第14章 p35]

- **设置指针位置**：
  ```cpp
  // seekg用于ifstream，seekp用于ofstream
  file.seekg(偏移量, 起始位置);
  file.seekp(偏移量, 起始位置);
  
  // 起始位置选项：
  // ios::beg - 文件开头
  // ios::cur - 当前位置
  // ios::end - 文件结尾
  
  // 示例
  file.seekg(0);           // 移到文件开头
  file.seekg(5, ios::cur); // 从当前位置向后移5字节
  ```
  [来源：第14章 p35，Notes]

##### 易错点与辨析

- ⚠️ **fstream中读写指针是同一个**：`seekp` 和 `seekg` 移动的是同一个指针。
  [来源：第14章 p35，Notes]

- ⚠️ **指针到达EOF后无法重置**：如果指针已经指到了文件结尾(EOF)，指针无法重置。
  [来源：第14章 p35]

##### 例题结论

- **【执行结果分析】** 文件指针操作：
  ```cpp
  // 文件内容：1 2 3 4 5 6 7 8 9 10
  fstream io_file("file");
  io_file.seekp(10);      // 移动写指针到第10字节
  io_file << 20;          // 在该位置写入20
  io_file.seekg(0);       // 读指针回到开头
  while (io_file >> i) cout << i << ' ';
  // 输出：1 2 3 4 5 207 8 9 10
  // 注意：20覆盖了6，与7连成207
  ```
  [来源：第14章 p36]

#### 二进制读写（记录操作）

##### 定义/语法

- **用途**：立即访问文件中指定的记录，要求**记录长度固定**。
  [来源：第14章 p37]

##### 代码模式

- **write写入**：
  ```cpp
  outFile.write(reinterpret_cast<const char *>(&number), sizeof(number));
  ```
  将number内容写入文件的sizeof(number)个字节空间，写完后指针后移。
  [来源：第14章 p37]

- **read读出**：
  ```cpp
  inFile.read(reinterpret_cast<char *>(&number), sizeof(number));
  ```
  将文件中sizeof(number)个字节内容读入number，读完后指针后移。
  [来源：第14章 p37]

##### 规则/规范

- **`reinterpret_cast<char*>` 的必要性**：文件只能存储二进制序列或字符序列，不能定义丰富数据类型。需要强制将内存中的二进制内容以字符形式读写。
  [来源：第14章 p37，Notes]

- **定位到指定记录**：
  ```cpp
  // 定位到第n条记录（记录从0开始编号）
  file.seekg(n * sizeof(记录类型));
  ```
  [来源：第14章 p48，borrowBook函数]

#### 文件关闭

##### 代码模式

```cpp
outfile.close();
infile.close();
```
[来源：第14章 p38]

##### 规则/规范

- **自动关闭**：main函数执行结束时，会关闭所有打开的文件。
- **良好习惯**：文件访问结束时，应**显式关闭**文件。
  [来源：第14章 p38]

#### 习题结论

- **【填空题答案】** 读取文本文件中的字符串：
  ```cpp
  void FR(char* fname) {
      ifstream fin(fname);          // 定义并打开文件
      char a[20];
      int cnt = 0;
      if (!fin) {                   // 检查打开是否成功
          cout << "Can't open file";
          return;
      }
      while (fin >> a) {            // 循环读取字符串
          cout << a << endl;
          cnt++;                    // 计数
      }
      fin.close();                  // 关闭文件
      cout << "The number of strings is " << cnt << endl;
  }
  ```
  [来源：第14章 p39，习题答案（Notes）]

- **【填空题答案】** 读取并输出账户信息：
  ```cpp
  fstream fin("clients.txt");                     // 打开文件
  while (fin >> account >> name >> balance)       // 读取三个字段
      outputLine(account, name, balance);
  fin.close();                                    // 关闭文件
  ```
  [来源：第14章 p40，习题答案（Notes）]

---

### 14.4 字符串IO（了解）

#### 定义/语法

- **sstream库**：支持内存中的输入输出，将流与string对象捆绑。
  [来源：第14章 p51]

- **三种字符串流类型**（`<sstream>`）：
  | 类型 | 派生自 | 功能 |
  |---|---|---|
  | `istringstream` | `istream` | 读string |
  | `ostringstream` | `ostream` | 写string |
  | `stringstream` | `iostream` | 读写string |
  [来源：第14章 p51]

##### 代码模式

```cpp
#include <sstream>
#include <string>

ostringstream os;           // 创建输出字符串流
for (int i = 0; i <= 20; ++i)
    os << i << ' ';         // 向字符串流写入
cout << os.str();           // 用str()获取字符串内容

istringstream is(os.str()); // 用字符串初始化输入字符串流
int i;
while (is >> i) cout << i << '\t';  // 从字符串流读取
```
[来源：第14章 p52]

---

### 14.5 图书馆系统实例（综合应用）

#### 设计要点

- **文件记录设计**：每个记录保存一本书的信息，按馆藏号顺序存放。
  [来源：第14章 p42]

- **记录定位公式**：`file.seekg((bookNo - 1) * sizeof(book))`
  [来源：第14章 p48]

##### 代码模式

- **系统初始化**：
  ```cpp
  void initialize() {
      ofstream outfile("library.bin");  // 创建空文件
      book::resetTotal();                // 静态成员复位
      outfile.close();
  }
  ```
  [来源：第14章 p47]

- **添加记录（追加模式）**：
  ```cpp
  void addBook() {
      ofstream outfile("library.bin", ofstream::app);  // 追加模式
      book::addTotal();
      // ... 创建book对象bp ...
      outfile.write(reinterpret_cast<const char *>(bp), sizeof(*bp));
      outfile.close();
  }
  ```
  [来源：第14章 p47]

- **修改记录（读写模式）**：
  ```cpp
  void borrowBook() {
      fstream iofile("library.bin");
      book bk;
      // 定位到指定记录
      iofile.seekg((bookNo - 1) * sizeof(book));
      // 读取记录
      iofile.read(reinterpret_cast<char *>(&bk), sizeof(book));
      // 修改
      bk.borrow(readerNo);
      // 写回原位置
      iofile.seekp((bookNo - 1) * sizeof(book));
      iofile.write(reinterpret_cast<const char *>(&bk), sizeof(book));
      iofile.close();
  }
  ```
  [来源：第14章 p48]

- **遍历所有记录**：
  ```cpp
  void displayBook() {
      ifstream infile("library.bin");
      book bk;
      infile.read(reinterpret_cast<char *>(&bk), sizeof(book));
      while (!infile.eof()) {
          bk.display();
          infile.read(reinterpret_cast<char *>(&bk), sizeof(book));
      }
      infile.close();
  }
  ```
  [来源：第14章 p49]

---

## 本章总结

1. 利用iostream库进行**格式化的输入输出**
2. 利用文件**永久保存信息**
3. 实现文件的**随机读写**（以图书馆系统为例）
   [来源：第14章 p53，总结]

---

## 附录：码制（补充知识）

#### 定义/语法

- **三种编码方式**：原码、反码、补码
- **符号位**：0表示正数，1表示负数
  [来源：第14章 p54]

- **原码**：符号位 + 数值的二进制表示
  ```
  [62]原  = 0 0111110
  [-62]原 = 1 0111110
  ```
  [来源：第14章 p55]

- **反码**：
  - 正数：与原码相同
  - 负数：绝对值的原码**取反**
  ```
  [62]反  = 0 0111110
  [-62]反 = 1 1000001
  ```
  [来源：第14章 p56]

- **补码**：
  - 正数：与原码相同
  - 负数：反码**加1**
  ```
  [62]补  = 0 0111110
  [-62]补 = 1 1000010
  ```
  [来源：第14章 p57]

【整理自 PPT】计算机中负数用补码表示，可参考：https://blog.csdn.net/leonliu06/article/details/78685197
[来源：第14章 p57]
