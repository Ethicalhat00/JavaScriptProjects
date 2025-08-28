


let height=document.querySelector("#height");

let weight=document.querySelector("#Weight");

let btn=document.querySelector(".cal");

let p=document.querySelector(".result");
btn.addEventListener("click",()=>{
     
    let h=height.value;
    let w=weight.value;
    console.log(h,w);
    let ans=getCalculateBmi(h,w);
  console.log(ans);
   

     if(ans<18.5){
p.textContent="UnderWeight: "+ans;
p.style.color="blue"
    }
    
    else if(ans>=18.5 && ans<24.9){
        p.textContent="Normal Weight: "+ans;
        p.style.color="green";
    }
    else if(ans>=25 && ans<29.9){
          p.textContent="Overweight: "+ans;
        p.style.color="orange";
    }
    else if(ans>=30){
        p.textContent="Obese: "+ans;
        p.style.color="red";
    }
    else{
        
        p.textContent="input it";
    
    }
     

});


let getCalculateBmi=(height,weight)=>{
    
     
     let Bmi=(weight/((height/100)**2)).toFixed(2);
     return Bmi;
}
