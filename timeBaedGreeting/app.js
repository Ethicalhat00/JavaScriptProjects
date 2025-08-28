let conatain=document.querySelector("container");

let timeNow=new Date().getHours();

let p=document.querySelector("p");
console.log(timeNow);

let greeting= timeNow>=5 && timeNow < 12 ? "Good Morning"
             : timeNow >=12 && timeNow <17 ?"Good Afternoon"
             : timeNow >=17 && timeNow < 19 ?"Good evening"
             : "Good Night";
             console.log(greeting);

             p.innerHTML=`<h1> ${greeting}!</h1>`;

