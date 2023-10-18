let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("success");
  } else {
    reject("failed");
  }
});

//then will be called if promise if succesful if it isnt catch will be called
p.then((message) => {
  console.log("This is in the then: " + message);
}).catch((message) => {
  console.log("This is in the catch: " + message);
});

Promise.all([
    //all functions will be called at the same time (after that *then* will be called)
    //function1(),
    //function2(),
    //...
]).then((/* message */)=>{
    //console.log(message)
})

Promise.race([
    //all functions will be called at the same time (if one is finished *then* will be called)
    //function1(),
    //function2(),
    //...
]).then((/* message */)=>{
    //console.log(message)
})

