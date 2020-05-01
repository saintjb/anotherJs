let ruble = document.querySelector('.rubles'),
    usd = document.querySelector('.dollars');

ruble.addEventListener('input', () => {
    let request = new XMLHttpRequest();
    request.open('GET','current.json');
    request.setRequestHeader('Content-type', 'application/json: charset=utf-8');
    request.send();
    request.addEventListener('readystatechange', function(){
        if (request.readyState === 4 && request.status == 200){
            let data = JSON.parse(request.response);
            let conv = ruble.value / data.usd;
            usd.value = conv.toFixed(2);

        }
        else {
            usd.value = 'Something goes wrong'; 
        }
    });
});