const app=require('./app')
const arr=[2,5,2,6,2,4,25,8,5,4,5];
console.log(app)
console.log(app.x)
console.log(app.y)
console.log(app.xyz())


// arr.filter((item)=>{
//    console.log(item)
// })

// let result=arr.filter((item)=>{
//     return item ===2
// })
// console.log(result)


let result=arr.filter((item)=>{
    return item >2
})
console.log(result)