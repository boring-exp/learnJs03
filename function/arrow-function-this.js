const obj = {
  name: 'obj',
  sayHi: function () {
    // this
    return () => {
      console.log(this) // 直接将this的值绑定上了
    }
  }
}

const objtest = {
  name: 'obj',
  sayHi: () => {
    console.log(this) // 直接将this的值绑定上了
  }
}

const obj2 = {
  name: 'obj2',
  sayHi: obj.sayHi
}

obj.sayHi()() // obj
obj2.sayHi()() // obj2