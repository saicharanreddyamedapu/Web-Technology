function demo(a,b,task){
  console.log(a,b,task);
  task(a,b)
}

// arrow function
demo(10,20,(e,f)=>{
  console.log(e+f);
})

// anonymous function
demo(10,5,function (e,f){
  console.log(e-f);
})

//function declaration
demo(6,4,function d1(e,f){
  console.log(e*f);
})