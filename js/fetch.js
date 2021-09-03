console.log('printed');
console.log('printed1');
setTimeout(() => console.log('aal'),1000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log('printed2');
console.log('printed3');
console.log('printed4');