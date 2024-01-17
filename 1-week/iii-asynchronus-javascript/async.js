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

//....Callbacks....

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

prepareBreakfast(breakfastIsReady);

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

prepareBreakfast();

/*
==============================================
    Blocking code
==============================================
*/
