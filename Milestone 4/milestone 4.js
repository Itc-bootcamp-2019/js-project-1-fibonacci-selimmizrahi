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

function myFunction() {
    let newvar = document.getElementById('demo').value;
    document.getElementById("demo1").innerHTML = fibonacci(newvar) ;
  }