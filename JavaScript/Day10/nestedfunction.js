function demo(){
  function d1(){
    console.log("hello d1");
  }
  function d2(){
    console.log("hello d2");
  }
  d1()
  d2()
}
demo()

// function demo4(){
//   function d1(){
//     console.log("hello d1");
//   }
//   function d2(){
//     console.log("hello d2");
//   }
//   return d1(),d2()
// }
// demo4()



function demo1(){
  function d1(){
    console.log("demo1 d1");
  }
  function d2(){
    console.log("demo1 d2");
  }
  return [d1,d2]
}
demo1()()


function demo2(){
  function d1(){
    console.log("demo2 d1");
  }
  function d2(){
    console.log("demo2 d2");
  }
  return [d1,d2]
}
demo2()[0]()
demo2()[1]()

var a=10
function demo3(){
  function d1(){
    var a =30
    console.log("demo3 d1");  
    console.log(a);
    console.log(this.a);      
  }
  function d2(){
    console.log("demo3 d2");    
    console.log(a); 
  }
  d1()
  d2()
}
demo3()


// closer-  bind between parent function and child function. This is the disadvantage of 

// lexical Scope/- check or finding the variable from block,local to global scope
