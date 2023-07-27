// 面向接口编程
interface singer {
    sing(): void;
}

function stage(obj: singer) {
  obj.sing()
}

class Student implements singer {
  sing() {
    console.log('student')
  }
}

const stu = new Student()
stage(stu)