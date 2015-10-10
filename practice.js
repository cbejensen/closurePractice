//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here
var inner = outer();

//Once you do that, invoke inner.

  //Code Here
inner();


//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here
var callF = callFriend();
callF(435-215-9248);


//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here
  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4

var makeCounter = function() {
  var counter = 0;
  return function() {
    counter++;
    console.log(counter);
  }
}
  


//Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
  Once completed, add a second argument that allows the function to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');
*/

function outer(fn, n) {
  var counter = 0;
  return function() {
      if (counter < n) {
      fn();
      counter++;
    } else {
      console.log('STAHHP');
    }
  }
}

function sayHi() {
  console.log("hi!");
}

var go = outer(sayHi, 5);
go();
go();
go();
go();
go();
go();


/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };
  
  Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the function is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.
    //Answer Here
  Now, run the function in your console and note what happpens.
  Was your answer right or wrong?
    //Answer Here
  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)
*/

    //Code Here


  var counter = function(){
    for (var i=1; i<=5; i++) {
      (function(x) {
        setTimeout( function timer(){
          console.log( x );
      }, x*1000 );
      })(i);
    }
  };




//Next Problem



/*
  Make the following code work
  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5
  *Hint: Don't let this fool you. Break down what's really happening here.
*/

  var outer = function(x) {
    return function() {
      console.log(x);
    }
  }

  var funcArray = [];

for (var i = 0; i < 6; i++) {
  var x = 0;
  funcArray.push(outer(i));
}



  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5
