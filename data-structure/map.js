// 哈希表
const hashMap = new Map()

hashMap.set('name', 'zhangsan')
hashMap.set('age', 18)
hashMap.set('prop', {
  a: 1,
  b: 2
})

console.log(hashMap.get('name'))
console.log(hashMap.has('name'))
hashMap.delete('name')
console.log(hashMap)

// 对象
const hashMapObj = {}
hashMapObj.name = 'zhangsan'
hashMap.name
delete hashMapObj.name

// hashmap和object的区别
// hashmap的key可以是任意数据类型
const pojo = { name: '测试' }
hashMap.set(pojo, 'aaa')
console.log(hashMap.get(pojo))

