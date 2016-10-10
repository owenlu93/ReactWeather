// function getTempCallback(location,callback){
//   callback(undefined,78); // in the event the error is not defined, pass temp
//   callback('City not found'); // in the event error occured
// }
//
// getTempCallback('Philaelphia', function(err,temp) {
//   if(err) {
//     console.log('error',err);
//   } else {
//     console.log('success',temp)
//   }
// });
//
// // this function returns a promise which has a resolve or reject state
// // which it returns is taken care of internally
// function getTempPromise(location) {
//   return new Promise(function(resolve,reject){
//     setTimeout(function () { // functions call after 1000 milliseconds
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// // calls on success or failure at most once
// getTempPromise('Philadelphia').then(function(temp) {
//   console.log('Promise success',temp); // on success (returns the temp)
// }, function(err){ // on error (returns and error)
//   console.log('Promise error',err);
// })

//Challenge Area
function addPromise(a,b) {
  return new Promise(function(resolve,reject){
    if( typeof(a) === 'number' && typeof(b) === 'number')
    {
      resolve(a+b);
    }
    else
    {
      reject('One or more of the arguments are not numbers');
    }
  });
}

addPromise(2,'f').then(function(num){
  console.log('Promise success',num); // on success
}, function(fuck){ // on reject
  console.log('Promise error',fuck)
})
