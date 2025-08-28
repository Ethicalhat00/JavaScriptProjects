let memeBtn=document.querySelector(".generate-meme-btn");

let memeImg=document.querySelector("img");

let memeTitle=document.querySelector("h2");

let memeAuthor=document.querySelector("p");


let API_URL="https://meme-api.com/gimme/wholesomememes";



let getMeme=async()=>{

    let res=await axios.get(API_URL);
    console.log(res.data.author);
    
    return{
        title:res.data.title,
        img:res.data.url ,
        author:res.data.author,
        
};
}


memeBtn.addEventListener("click", async ()=>{

    let meme=   await  getMeme();

    memeImg.src=meme.img;

    memeTitle.innerText=meme.title;
    
    memeAuthor.innerText=meme.author.toUpperCase();

    


});
