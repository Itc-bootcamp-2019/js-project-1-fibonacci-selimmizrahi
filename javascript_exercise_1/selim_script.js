function myFunction() {
    document.getElementById('presenterror').classList.add("disappear");
    let input = document.getElementById('input').value;
    let loading = document.getElementById('loading');
    loading.classList.add("spinner-border");
    document.getElementById('output').classList.add("disappear");
    document.getElementById('output2').classList.add("disappear");
    if(input>=50){
        document.getElementById('presenterror').classList.remove("disappear");
        loading.classList.remove("spinner-border");
        let presenterror=document.getElementById('presenterror');
        presenterror.innerText = "Can't be larger than 50"
    } else {
        fetch(`http://localhost:5050/fibonacci/${input}`)
        .then( response => {
            if (response.ok) {
                return response.json();
              } else {
                return response.text();
              }
        })
        .then(function(data) {
            let output; 
            let output2; 
            if (data.result) {
            output = data.result;
            loading.classList.remove("spinner-border");
            document.getElementById('output').classList.remove("disappear");
            document.getElementById('output').innerHTML = output;
            console.log(output);
            } 
            else {
            errMessage = "Server Error: ";
            output2 =  errMessage + data;
            loading.classList.remove("spinner-border");
            document.getElementById('output2').classList.remove("disappear");
            document.getElementById('output2').innerHTML = output2;
            console.log(output2);
            }
    }  )
    }
}
