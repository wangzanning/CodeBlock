// train promise

// let p = new Promise(((resolve, reject) => {
//   // reject(1000);
//   setTimeout(() => resolve(1), 1000);
// }))
//
// p.then((res) => {
//     console.log(res);
//     return new Promise((resolve => {
//       setTimeout(() => resolve(2), 1000);
//     }))
//   }, (err) => {
//     console.log(err);
//     return Promise.reject(4)
//   }
// ).then((res) => {
//   console.log(res);
// }, (err) => {
//   console.log(err);
// })

//-------------------------------------------
// let p1 = new Promise((resolve, reject) => {
//   console.log('p1 executor');
//   setTimeout(resolve, 1000);
// });
//
// p1.then(() => new Promise((resolve, reject) => {
//   console.log('p2 executor');
//   setTimeout(resolve, 1000);
// })).then(() => new Promise((resolve, reject) => {
//   console.log('p3 executor');
//   setTimeout(resolve, 1000);
// })).then(() => new Promise((resolve, reject) => {
//   console.log('p4 executor');
//   setTimeout(resolve, 1000);
// }));

new Promise((resolve, reject) => {
  setTimeout(()=>reject(Error('error1')),1000);
  // resolve(1);
}).catch((err) => console.log(err)).then((res) => {
  console.log('234');
  test
  return Promise.resolve('123');
}).catch((err)=>console.log(err)).then((res)=>console.log(res));
