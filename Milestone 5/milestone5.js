function myFunction() {
    let newvar = document.getElementById('demo').value;
    fetch(`http://localhost:5050/fibonacci/${newvar}`)
        .then(res => res.json()) 
        .then(function(data) {
            let y = data.result; 
            document.getElementById('demo1').innerHTML = y;
            console.log(y);
        });
}