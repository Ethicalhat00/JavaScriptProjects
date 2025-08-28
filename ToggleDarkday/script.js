let btn=document.querySelector("#togglebtn1");
let btn2=document.querySelector("#togglebtn2")


let turnNight=()=>{
document.body.classList.toggle("togglebtn-dark");
}



btn.addEventListener("click",turnNight);

