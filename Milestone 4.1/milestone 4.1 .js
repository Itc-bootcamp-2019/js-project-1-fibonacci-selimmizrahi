function recurse(n){
    if (n==0) {
        return 0;
    }
    else if(n==1){
        return 1;
    }
    else if(n>1){
       let result = recurse(n-2) + recurse(n-1)
       return result
    }
}

function myFunction() {
    let newvar = document.getElementById('demo').value;
    document.getElementById('demo1').innerHTML = recurse(newvar) ;
  }