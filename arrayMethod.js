//concat
const arr1=[2,4,6,4]
const arr2=[3,5,2,8]
const newArr=arr1.concat(arr2)
console.log(newArr)
//every
function check(arr1){
    return arr1>4
}
const bol=arr1.every(check)
console.log(bol)
//fill
arr2.fill(7)
console.log(arr2)
//find
const find=arr1.find(ele=>{return ele>4})
console.log(find)
//findIndex
const fndindex=arr1.findIndex(ele=>{return ele==2})
console.log(fndindex)
//flat
const myArr=[[1,2],[3,4],[5,6]]
const arr=myArr.flat()
console.log(arr)
//includes
console.log(arr1.includes(2))
//indexOf
console.log(arr1.indexOf(6))
//join
const str=arr1.join('')
console.log(str)
//lastIndexOf
console.log(arr1.lastIndexOf(4))
//pop
console.log(arr1.pop())
//push
arr1.push(3)
console.log(arr1)
//reverse
arr1.reverse()
console.log(arr1)
//unshift
console.log(arr1.unshift(5))
//shift
console.log(arr1.shift())
//slice
console.log(arr1)
console.log(arr1.slice(1,3))
//some
let someEven=arr1.some(num=>(num%=0))
console.log(someEven)
//sort
console.log(arr1.sort())
//splice
arr1.splice(1,2,'a','b')
console.log(arr1)
//toString
const stng=arr1.toString()
console.log(stng)
//filter
const arr3=[4,7,5,2]
const newArr1=arr3.filter(element=>{
    if(element%2==0)
        return element
})
console.log(newArr1)
//reduce
const newdata=arr2.reduce((acc,ele)=>{
    return acc=acc+ele
})
console.log(newdata)
//map
const newArr2=arr3.map(data=>data**3)
console.log(newArr2)
//forEach
arr.forEach((ele,index)=>{
    console.log(ele,index)
})

