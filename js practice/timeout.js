function print(){
    console.log('this is printed.')
}

console.log('first');
console.log('second')
setTimeout(print,5000);
setTimeout(function(){console.log('i am the second function.')}, 4000);
setTimeout(() => {console.log('i am arrow function.....')}, 3000)
console.log('third')
console.log('fourth');
