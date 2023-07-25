function test1() {}

const t2 = {
  sing() {
    console.log('sing')
  }
}

test1.prototype = t2
t2.constructor = test1
const t1 = new test1()

t1.sing()
// [[prototype]] -> __proto__
// 最终指向的结果是null
console.log(t1.__proto__.__proto__.__proto__)
