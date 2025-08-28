let btn=document.querySelector("button");

let inp=document.querySelector("input");

let p=document.querySelector("p");



btn.addEventListener("click",()=>{

    let result=inp.value;

  p.innerText=result.toUpperCase();
inp.value="";

});