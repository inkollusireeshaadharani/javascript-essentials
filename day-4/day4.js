var d=document.querySelector("span");

function name(){
    var x=prompt("Your name");
    document.querySelector("input").value=x;
    s=document.querySelector("input").value;
}

function hello(){
    d.innerText="Hello "+s;
    }