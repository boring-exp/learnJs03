// 1.at(3) charAt(3)
const str1 = '1234'
console.log(str1[3])

// 2.concat // 数组也有
const str2 = '1234'
const str21 = '5678'
const str22 = str2.concat(str21)
console.log(str22)
const str23 = `${str2}${str21}`

// 3. endsWith
str1.endsWith('4')
str1[str1.length - 1] === '4'

// 4. includes
const str4 = 'hello world, boy!'
console.log(str4.includes('boy'))

// 5. indexOf, 如不没有找到，返回-1
const str5 = 'hello world, boy!'
console.log(str5.indexOf('world!'))

// 6. match，给正则表达式
const h1 = '<h1>{{ msg }}</h1>'
const msg = 'hello world'
// const reg = /{{\s*msg\s*}}/

// 7. replace 既可以用字符串匹配，也可以正则来匹配字符串
// 如果pattern是字符串，则仅替换第一个匹配项
const compilerResult = h1.replace('{{ msg }}', msg)
console.log(compilerResult)

// 8. search 用正则表达式匹配字符串，返回匹配到的第一个位置

// 9. slice 切割字符串，返回一个新的字符串
const str9 = 'hello world'
const str91 = str9.slice(1, 3)
console.log(str91)

// 10. split
const str10 = 'The quick brown fox jumps over the lazy dog.'
const str10Result = str10.split(' ')
const str10Result1 = str10Result.join('-')
console.log(str10Result1)

// 11. substring
const str11 = 'hello world'
const str111 = str11.substring(1, 3)
console.log(str111)

// 12.大小写
const str12 = 'hello world'
const str121 = str12.toUpperCase()
console.log(str121)
// 面试题：如何将一个对象所有的key的第一个字母大写

// 13. trim 去除字符串两边的空格
const str13 = ' hello world '
const str131 = str13.trim()
console.log(str131)


