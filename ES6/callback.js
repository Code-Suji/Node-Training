// a();
// b();

// function statement aka declaration
function a() {
  console.log('1. Function Statement ....')
}


// function expression
var b = function(){
  console.log('2. Function Expression ...')
}

//Anonymous Function
// function(){
//     console.log('3. anonymous function .....')
// }

function k() {
  return function() {
      console.log('dose something')
  }
}

// Named function
let p = function xyz(){
  console.log('4. Named function...')
}
p();

//Difference between a parameter and an argument?

function F1(param1, param2, param3){
  //these params are local to the function
}

F1(1,2,3) //arguments

// First class functions
  // functions that can be assigned to a var or passed as a parameter to another function

  var exForFirstClassFunction = function(){
      console.log('2. Function Expression ...');
  }

// Higher Order functions ...
function greet(name)
{
  return function(){
      console.log(`hello ${name}`)
  }
}
greet('Sujith');


// 1. api call login
// 2. api call to check if user is active or not?
// 3. api call to fetch userDetails

function login(userData){
  //validate the data
  if(userDataIsValid){
      function fetchUser(quer){
          //Query the database to fetch the result
          let result = {}
          // validate the user
          function validateResults(results){
              if (userIsValid) 
                  return true
              else
                  return false
          }
      }
  }
  else{
      return false
  }
}

// Promises
let fetchUser = new Promise((resolve, rejects)=>{
  console.log('Query the database for the user');
  if(error){
      rejects(error)
  }
  resolve()
})

let validateInput = new Promise((resolve, rejects)=>{
  console.log('Input validation .. ');
  if(error){
      rejects(error);
  }
  resolve()
})

let validateUserPassword = new Promise((resolve, rejects)=>{
  console.log('Input passsword == password in database');
  if(error){
      rejects(error);
  }
  resolve()
})

function loginFunction(){
  validateInput().then((result) => {
      fetchUser().then(result => {
          validateInput().then(result => {

          }).catch(err => {
              console.log(err);
          })
      }).catch(err => {
          console.log(err);
      })
  }).catch(err => {
      console.log(err);
  })

  // set cookies
  // log the loging user
  // send notification
}

async function loginFunction(){
  var result1 = await validateInput()
  var result2 = await fetchUser()
  var result3 = await validateUserPassword()
// this way of writing promises can avoid callback hell
}

