( 
  function (){
    console.log("hello 1st");
  }
)();

( 
  function (x,y,z){
    console.log("hello 1st");
    console.log(x+y+z);
    
  }
)(10,20,30);

// ()()

(
  ()=>{
    console.log("hello iife 2nd");
  }
)()

let a = (
  function demo(){
    console.log("hello iife 3rd");
    
  }
)()


let a1 = 100, b = 2110, c=400
let res= a1>b?"a is gr":"b is gr"
console.log(res);

let res1 =(a1>b)?(a1>c)?"a is gr":"c is gr": "b is gr"

console.log(res1);

