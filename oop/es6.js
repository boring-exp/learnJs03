// class_base 继承
// 1. 封装中如何用私有属性
// 2. 如何体现多态: 同一方法，在不同的对象上表现出不同的行为
// 3. 实现一下单例模式: config对象
class Person {
  // es6中的私有属性
  #app = 'app'
  constructor(name, age) {
    // 构造函数中仅放置属性

    // 属性是公开的，如何实现私有属性
    // 约定：以_开头的属性是私有属性
    this.name = name;
    this.age = age;

    // 用闭包
    const a = 1;

    this.getA = function () {
      return a;
    }

    // 用symbol
    const privateVal = Symbol('privateVal')
    // getOwnPropertySymbols
    this[privateVal] = 'symbol'

    this.#app = 'app1'
  }
  // 方法
  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name
  }

  getApp() {
    return this.#app;
  }
}

class Student extends Person {
  constructor(name, age, skill) {
    super(name, age) // 调用子类的构造函数
    this.skill = skill
  }

  getSkill() {
    return this.skill
  }

  sing() {
    console.log('student')
  }
}


class Teacher extends Person {
  constructor(name, age) {
    super(name, age) // 调用子类的构造函数
  }

  sing() {
    console.log('teacher')
  }
}

// const stu1 = new Student('pjw', 18, ['coding'])
// console.log(stu1.getName())
// console.log(stu1.getSkill())
// console.log(stu1.getApp())
// const pjw = new Base('pjw', 18);
// const xxx = new Base('xxx', 20);
// console.log(pjw.name);
// console.log(xxx.age);
const stu2 = new Student('stu2', 18, ['coding'])
const teacher = new Teacher('teacher', 18)
stu2.sing()
teacher.sing()
// 先定义方法，再实现方法
function stage(obj/** { sing(){} } */) {
  obj.sing()
}

stage(stu2)
stage(teacher)