// myFilter polyfill
// arr =[1,2,3,4,5]
// if(!Array.prototype.myFilter){
//     Array.prototype.myFilter=function(callback){
//     const result=[]
//     for(let i=0; i<this.length; i++){
//             console.log(this[i]);
//             if(callback(this[i])){
//                 result.push(this[i])
//             }
//         }
//         return result
//     }
// }
// const result=arr.filter(item =>item !==3)
// const myResult=arr.myFilter(item =>item !==3)
// console.log(result);
// console.log(myResult);

// myMap polyfill
Array.prototype.myMap = function(callback){
    let result=[];
    for(let i=0; i<this.length; i++){
        result.push(callback(this[i],i,this));
    }
    return result;
};
const nums=[1,2,3,4,5,6,7,8,9,10];
const multiplyThree= nums.myMap((num,i,arr) => {return num * 3;});
console.log(multiplyThree);

// once polyfill
// function once(func, context){
//     let result;
//     return function(){
//         if(func){
//             result = func.apply(context || this, arguments);
//             func=null;
//         }
//         return result;
//     };
// }
// const hello= once((a,b) => console.log("hello", a, b)
// );
// hello(1,2);
// hello(1,2);
// hello(1,2);
// hello(1,2);
