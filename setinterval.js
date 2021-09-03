console.log('1')
console.log('2')
// setInterval(() => {
//     console.log('printes')
// }, 1000);
let time = 0;
const second = setInterval(()=>{
    // time ++;
    console.log(++time);
    if(time>14){
        clearInterval(second);
    }
},1000)
console.log('3')
console.log('4')
console.log('5')