let currSong = new Audio();

function secondsToMinutes(seconds) {
  if(isNaN(seconds) || seconds<0){
    return "invalid input";

  }
  const min=Math.floor(seconds/60);
  const remainsec=Math.floor(seconds%60);

  const formattedMin=String(min).padStart(2,'0');
  const formattedSec=String(remainsec).padStart(2,'0');

  return `${formattedMin}:${formattedSec}`;
}

async function getSongs() {

    let a = await fetch("http://127.0.0.1:3000/songs/");
    let response = await a.text();

    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith('.mp3')) {
            songs.push(element.href.split("/songs/")[1]);
        }

    }
    return songs;

}

getSongs();



let playMusic = (track,pause=false) => {
    currSong.src = "/songs/" + track;
    if(!pause){
currSong.play();
play.src = "pausebtn.svg"
    }
    
    
    document.querySelector(".songinfo").innerHTML=decodeURI(track);
    document.querySelector(".songtime").innerHTML="00:00/00.00";
}
async function main() {
    let songs = await getSongs();

    playMusic(songs[0],true);


    let songul = document.querySelector(".songlist").getElementsByTagName("ul")[0];


    for (const song of songs) {
        songul.innerHTML = songul.innerHTML + ` <li>

                            <img class="invert" src="music.svg" alt="">
                            <div class="info">
                               <div> ${song.replaceAll("%20", " ")}</div>
                               <div>Matheen</div>
                              
                            </div>
                            <div class="playnow">
                                <span>Playnow</span>
                                <img class="invert" src="playbtn.svg" alt="">
                            </div>
                        </li>
              </li> `


    }

    //attaach an vent listener to play each song
    let arr = Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach((e) => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML);
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
        })


    });

    //attach an event listener for play,pause,next

    play.addEventListener("click", () => {
        if (currSong.paused) {
            currSong.play();
            play.src = "pausebtn.svg"
        }
        else {
            currSong.pause();
            play.src = "playbtn.svg"
        }
    });

    //listen for timeupdate event

    currSong.addEventListener("timeupdate",()=>{


        // console.log(currSong.currentTime,currSong.duration);

        document.querySelector(".songtime").innerHTML=`${secondsToMinutes(currSong.currentTime)}/${secondsToMinutes(currSong.duration)}`;
     
      document.querySelector(".circle").style.left=(currSong.currentTime)/(currSong.duration)*100+'%';
    
    })

    //add an event to listen the seekbar

    document.querySelector(".seekbar").addEventListener("click",(e)=>{
       
        let percent=(e.offsetX/e.target.getBoundingClientRect().width)*100;
        document.querySelector(".circle").style.left=percent+"%";
        currSong.currentTime=((currSong.duration)*percent)/100;
    });


}

main()