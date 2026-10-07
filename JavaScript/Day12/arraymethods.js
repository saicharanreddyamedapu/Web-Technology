let arr =[10,20,30,40,50]
console.log(arr);
let a = arr.reduce((acc,v) => {
  // console.log(acc,v);
  //     acc- acumulator, value
  return acc + v
})
console.log(a);

let b = arr.reduce((acc,v) =>{
  // console.log(acc,v);
  return acc + v 
},5)
console.log(b);
console.log(arr);


let arr1=[111, -1,0,7,4,31,8,21]
console.log(arr1);

console.log(arr1.sort());
console.log(arr1);

let x = arr1.sort((e,f) =>{
  console.log(e,f);
  return e- f
})
console.log(x);

// console.log(arr1);

// let y = arr1.sort((e,f) =>{
//   console.log(e,f);
//   return f-e  
// })
// console.log(y);
// console.log(arr1);


// reverse
console.log(arr1.reverse());
console.log(arr1);


let arr2 =[5,6,7,8]
console.log(arr2);
console.log(arr2.reverse());
console.log(arr2); //[8,7,6,5]


// indexof--> starting

console.log(arr2.indexOf(6));
console.log(arr2.indexOf(7));


// Last Index of

let arr3 = [6,7,8,9,7,6,7,9,6]
console.log(arr3);
console.log(arr3.lastIndexOf(6));
console.log(arr3.lastIndexOf(7));


let arr5 =[10,20,30,40,50]
console.log(arr5);

for(let i = 0; i<=arr5.length;i++){
 console.log(arr5[i] + 5)
} //15
// 25
// 35
// 45
// 55

let arr6 =[]
for(let i = 0; i<=arr5.length;i++){
  arr6.push(arr5[i] + 5)
}
console.log(arr6); //[15,25,35,45,55]

let r = arr5.map((e,i) =>{
  return e+5
})
console.log(r);//[15,25,35,45,55]
console.log(arr5);
for(let i = 0; i<=arr5.length;i++){
  if(arr5[i]>20){
    console.log(arr5[i]);
  }
}//30,40

let w = arr5.filter((e) =>{
  return e>20
})
console.log(w);//[30,40]
console.log(arr5);




// push
// pop
// unshift
// shift
// slice
// splice
// indexof
// lastindexof
// reduce
// filter
// map
// sort
// reverse
// length
// flat
// for of  //it will print only the elements
// for in   //it will only print indexes
// for each    // it will print element and indexes
// entries      // it will elements and indexes in form array

let arr8=[[[[10,31]]],[[[20]]],[30],40]
console.log(arr8);
// [10,31,20,30,40]

// flat
console.log(arr8.flat());
console.log(arr8.flat(4));

console.log(arr8.flat(Infinity));

let arr9 =[10,20,30,40]
console.log(arr9);

for(let i in arr9){
  console.log(i);
}

for(let i of arr9){
  console.log();
}

arr8.forEach((s,i)=>{
  console.log(s,i);
})

let w1 = arr9.entries()//an
console.log(w1);
for(let i of w1){
  console.log(i);  
}
console.log(w1);

// occurance
// sort
// sum of an array



// prime
// avg