function fibonacci(x){
    let previous_first = 0;
    let previous_second = 1;

    for(let i = 2; i <= x; i++) {
        y = previous_first + previous_second;
        previous_first = previous_second;
        previous_second = y;
    }
        return y; 
    }

let newvar = document.getElementById('demo');
newvar.innerText=8;
document.getElementById('demo1').innerText = fibonacci(8);