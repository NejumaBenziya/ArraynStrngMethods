//concat
const str=' welcome'
const str1=str.concat(' new',' world ')
console.log(str1)
//includes
console.log(str.includes('come'))
//indexOf
console.log(str.indexOf('l'))
//lastIndexOf
console.log(str1.lastIndexOf('w'))
//padEnd
let text="5"
let padded=text.padEnd(4,"0")
console.log(padded)
//padStart
let padded1=text.padStart(4,"0")
console.log(padded1)
//repeat
let result=text.repeat(2)
console.log(result)
//replace
newStr=str1.replace('new','my')
console.log(newStr)
//search
console.log(str.search('o'))
//slice
const strnew=str.slice(3,7)
console.log(strnew)
//split
console.log(str1.split(' '))
//startsWith
console.log(str.startsWith('w'))
//substr
const string=str1.substr(8,3)
console.log(string)
//substring
console.log(str1.substring(8,11))
//toUpperCase
console.log(str.toUpperCase())
//toLowerCase
console.log(str.toLowerCase())
//trim
console.log(str1.trim())
//trimEnd
console.log(str1.trimEnd())
//trimStart
console.log(str1.trimStart())
//charAt
console.log(str.charAt(2))
//charCodeAt
console.log(str.charCodeAt(2))
