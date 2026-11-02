//1.Synchronous
console.log('Start');

//2. Timer
setTimeout(()=>{
    console.log('Timer Completed');
},1000);

//3. Promise
Promise.resolve().then(()=>{
    console.log('Promise completed')
});

//4.
console.log('End');
