function fibonacci(x){
    let previous_first = 0;
    let previous_second = 1;

    if (x > 1) {
        for(let i = 2; i <= x; i++) {
            y = previous_first + previous_second;
            previous_first = previous_second;
            previous_second = y;
        }
        return y; 
    } else if (x==0) {
        return y = 0;
    } else if (x==1) {
        return y = 1;
    }
}

function myFunction() {
    let newvar = document.getElementById('demo').value;
    document.getElementById("demo1").innerHTML = fibonacci(newvar) ;
  }