function myFunction() {
    let input = document.getElementById('input').value;
    fetch(`http://localhost:5050/fibonacci/${input}`)
        .then(res => res.json()) 
        .then(function(data) {
            let y = data.result; 
            document.getElementById('output').innerHTML = y;
            console.log(y);
        });
}