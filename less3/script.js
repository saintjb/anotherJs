function shoot(arrow, headshot, fail){
    console.log('You make a shot...');
    setTimeout(function(){
        Math.random() > .5 ? headshot({}): fail('You missed');
    }, 3000);
}

function win(){
    console.log('You won');
}

function lose(){
    console.log('You lose');
}
shoot({}, function(mark){
    console.log('Yep');
    win();
}, function(miss){
    console.error(miss);
    lose();
});