


let para = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iste totam? In quaerat sapiente delectus recusandae ratione, doloribus repellendus iusto!",

    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iste totam? In quaerat sapiente delectus recusandae ratione, doloribus repellendus iusto!",

    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iste totam? In quaerat sapiente delectus recusandae ratione, doloribus repellendus iusto!",

    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iste totam? In quaerat sapiente delectus recusandae ratione, doloribus repellendus iusto!",

    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iste totam? In quaerat sapiente delectus recusandae ratione, doloribus repellendus iusto!",

    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iste totam? In quaerat sapiente delectus recusandae ratione, doloribus repellendus iusto!",

    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iste totam? In quaerat sapiente delectus recusandae ratione, doloribus repellendus iusto!",

    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iste totam? In quaerat sapiente delectus recusandae ratione, doloribus repellendus iusto!",

    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iste totam? In quaerat sapiente delectus recusandae ratione, doloribus repellendus iusto!",


    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iste totam? In quaerat sapiente delectus recusandae ratione, doloribus repellendus iusto!",

    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iste totam? In quaerat sapiente delectus recusandae ratione, doloribus repellendus iusto!",

    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iste totam? In quaerat sapiente delectus recusandae ratione, doloribus repellendus iusto!",

    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iste totam? In quaerat sapiente delectus recusandae ratione, doloribus repellendus iusto!",

    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iste totam? In quaerat sapiente delectus recusandae ratione, doloribus repellendus iusto!"





]
let inp = document.querySelector("input");

let btn = document.querySelector("button");

let op=document.querySelector("#output");




btn.addEventListener("click", () => {
    let no = parseInt(inp.value);
    op.innerText="";    
   
    console.log(no);
   
    for (let i = 0; i < no; i++) {
        let p = document.createElement("p");
        p.innerText = para[i];
        op.appendChild(p);
       inp.value="";
    }

    
});

