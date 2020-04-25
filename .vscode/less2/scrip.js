// function greeting(){
//     console.log('Hello world');
// }

// // let timer_id = setTimeout(greeting, 5000);
// // clearTimeout(timer_id);


// let timer_id = setInterval(greeting, 5000);
// clearTimeout(timer_id);

// let timer_id = setTimeout(function greet(){
//     console.log('Hello world'); 
//     setTimeout(greet, 1000);

// }); 
let btn = document.querySelector('.btn'),
    element = document.querySelector('.box');

function move(){
    let pos = 0;
    let id = setInterval(frame, 10);

    function frame(){
        if (pos == 300){
            clearInterval(id);
        }
        else {
            pos++;
            element.style.top = pos + 'px';
            element.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', move);

let btnBlock = document.querySelector('.btn-block'),
    buttons = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event){
    if (event.target && event.target.matches('button.first')){
        console.log('Hello');
    }
});
