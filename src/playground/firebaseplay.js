
// child on removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child on changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child on added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// const setupSubscription = database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   }, (e) => {
//     console.log('error in subscription', e);
//   });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
    // console.log(expenses);
//  });

// database.ref('expenses').push({
//   description: "pancake",
//   note: "expensive",
//   amount: 12,
//   createdAt: 0
// });

// const setupSubscription = database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   }, (e) => {
//     console.log('error in subscription', e);
//   });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
    // console.log(expenses);
//  });

// database.ref('expenses').push({
//   description: "pancake",
//   note: "expensive",
//   amount: 12,
//   createdAt: 0
// });








// database.ref('notes/-L-UakZ26OFm-Zxfd-8h').update({
//   body: 'eat food'
// });

// database.ref('notes').push({
//   title: 'course topics',
//   body: 'react firebase angular python'
// });

// const firebaseNotes = {
//   notes: {
//     bldcacasah: {
//       title: 'this is my note',
//       body: 'this is my note'
//     },
//     dcadcadc: {
//       title: 'this is myacanote',
//       body: 'this is my acasdcs'
//     }
//   }
// };

// const notes = [{
//   id: 12,
//   title: 'this is my note',
//   body: 'this is my note'
// }, {
//   id: 13,
//   title: 'this is myacanote',
//   body: 'this is my acasdcs'
// }]

// const setupSubscription = database.ref()
//   .on('value', (snapshot) => {
//     let name = snapshot.val().name;
//     let job = snapshot.val().job.title;
//     let company = snapshot.val().job.company;
//     console.log(`${name} is a ${job} at ${company}.`);
//   }, (e) => {
//     console.log('error in subscription', e);
//   });

//   setTimeout(() => {
//     database.ref('job/title').set('road warrior');
//   }, 3000);

//   setTimeout(() => {
//     database.ref('job/company').set('Tesla');
//   }, 4000);

// const onValueChange = database.ref()
//   .on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//     console.log('error with data fetching', e);
//   });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('error', e)
//   });

// database.ref().set({
//   name: 'Alan James',
//   age: 26,
//   job: {
//     title: 'software dev',
//     company: 'Google'
//   },
//   stressLevel: 6,
//   isSingle: false,
//   location: {
//     city: 'Seattle',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((error) => {
//   console.log('error', erroor);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("removed successfully");
//   })
//   .catch(error => {
//     console.log("error", error);
//   });