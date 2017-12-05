const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is my resolved data');
  })
}, 1500);

console.log('before');

promise.then((data)=> {
  console.log(data);
});

console.log('after');

return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3500)
  .then(() => {
    console.log('success');
  }).catch((e) => {
    console.log('error:', error)
  })
})