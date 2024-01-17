/*
==============================================
    Synchronous javascript
==============================================
*/

console.log("Synchronous code");

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("End");

/* This code will run from top to bottom first it will print 
    ==> Synchronous code
    ==> 0, 1, 2, 3, 4
    ==> End
*/

/*
==============================================
    Asynchronous javascript
==============================================
*/

console.log("*********************************************");

//SetTimeOut

console.log("Asynchronous code");

setTimeout(() => {
  for (let i = 0; i < 5; i++) {
    // console.log(i)
  }
}, 2000);

console.log("End");

/* 
SetTimeOut is asnyc in nature because it doesn't block the main thread 
so the output will be

    ==> Asynchronous code
    ==> End 
    ==> 0, 1, 2, 3, 4
*/

//....Using Callbacks....

function serveBreakFast() {
  console.log("Break fast is served...");
}

function breakfastIsReady(callback) {
  console.log("Breakfast is ready...");

  callback(serveBreakFast);
}
function prepareBreakfast(callback) {
  console.log("Preparing breakfast...");

  callback(serveBreakFast);
}

// prepareBreakfast(breakfastIsReady);

//SameCode in a single function

function prepareBreakfast() {
  console.log("Preparing breakfast...");

  function breakfastIsReady() {
    console.log("Breakfast is ready...");

    function serveBreakFast() {
      console.log("Break fast is served...");
    }

    serveBreakFast();
  }

  breakfastIsReady();
}

// prepareBreakfast();


//....Using promises....






function isBreakfastServed(res) {
  let successMsg = "served";
  let failureMsg = "cannot be served...!";

  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (res === "ready") {
        resolve(successMsg)

      } else {
        reject(failureMsg)

      }
    }, 2000)

  })
}


function isBreakfastReady(res) {
  let successMsg = "ready";
  let failureMsg = "is not ready yet!!";

  return new Promise(function (resolve, reject) {
    setTimeout(() => {

      if (res === "Preparing") {
        resolve(successMsg)

      } else {
        reject(failureMsg)
      }
    }, 2000)

  })
}
function prepareBreakfast(flag) {
  let successMsg = "Preparing";
  let failureMsg = "Will prepare later...";

  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (flag) {
        resolve(successMsg)

      } else {
        reject(failureMsg)
      }
    }, 2000)

  })
}

let flag = true

prepareBreakfast(flag)
  .then(res => {
    console.log("Resonpnse from prepreBreakfast: ", res)
    return isBreakfastReady(res)
    
  }).then(res => {
    console.log("Response from isBreakfastReady: ", res)

    return isBreakfastServed(res)
  }).then(res => {
    console.log("Response from isBreakfastServed: ", res)
  })
  .catch(res => {
    console.log(res)
  })