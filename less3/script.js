let box = document.querySelector('.box'),
btn = document.querySelector('button');

let width = box.offsetWidth,
height = box.offsetHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);
console.log(document.documentElement.clientHeight);
btn.addEventListener('click', function(){
    console.log('Hi');
});