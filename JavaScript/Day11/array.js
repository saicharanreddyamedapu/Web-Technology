// literal way
let arr= []
console.log(arr);
let arr1=[10,"hi", true,20,20.5,5n,null,undefined]
console.log(arr1);
console.log(arr1[3]);
console.log(arr1[6]);

// new keyword
let arr2 = new Array()
console.log(arr2);

let arr3 = new Array(10,20,"hi")
console.log(arr3);


// Constructor
let arr4 = Array()
console.log(arr4);
let arr5 = Array(6,"hi",true,20)
console.log(arr5);

let arr6=[]
console.log(arr6);
arr6.push(30,40)
console.log(arr6);
arr6.push("hi")
console.log(arr6);

arr6.unshift(40,50)
console.log(arr6);
arr6.unshift(true)
console.log(arr6);

arr6.pop()
console.log(arr6);
arr6.pop()
console.log(arr6);

arr6.shift()
console.log(arr6);
arr6.shift()
console.log(arr6);

console.log(arr6.length);

// Slice

let arr7 =[10,20,30,40,50]
console.log(arr7);
console.log(arr7.slice(1,2));
console.log(arr7.slice(1,3));
console.log(arr7,slice(2));
console.log(arr7);


// Splice

//arr,splce(position, how many value you want to delete, What value you want to insert) 
arr7.toSpliced(1,0,"hi")
console.log(arr7); //[10,'hi', 290,30,40,50]
console.log(arr7.splice(2,3,true));
console.log(arr7);//[10,'hi',truee,50]
arr7.splice(1,1)
console.log(arr7);








