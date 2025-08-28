let p=document.querySelector("p");

let btn=document.querySelector("button");
let btn2=document.querySelector("#reset");
let btn3=document.querySelector("#decr");
let count=0;
let incrCount=()=>{
return count=count+1;

}


btn.addEventListener("click",()=>{

    let ans=incrCount();
    p.innerText=ans;
});

btn3.addEventListener("click",()=>{
    
    if(count>0){
        count=count-1;
    p.innerText=count;
    }
})
btn2.addEventListener("click",()=>{
    count=0;
    p.innerText=count;
})