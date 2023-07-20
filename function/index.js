function test() {
    // console.log(test.caller)
    // console.log('test');
    console.log('hello')
    return 'hello'
}

// test();

const fn = function test() {
    console.log('test');
}

// 匿名函数
const fn1 = function() {
  console.log('test');
}

fn1()

