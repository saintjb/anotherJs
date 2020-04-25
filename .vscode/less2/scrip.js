window.addEventListener('DOMContentLoaded', function(){
    let box = document.getElementById('btn');
    // box.addEventListener('touchstart', function(event){
    //     event.preventDefault();
    //     console.log('Button touchstart');
    //     console.log(event.changedTouches);
    //     console.log(event.touches);
    //     console.log(event.targetTouches);
    //     console.log(event.target);

    // });
    box.addEventListener('touchmove', function(event){
        event.preventDefault();
        console.log('Button touchmove ' + event.touches[0].pageX);
    });
    // box.addEventListener('touchend', function(event){
    //     event.preventDefault();
    //     console.log('Button touchend');
    // });
});
