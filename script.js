console.log("Spotifay Nachinayetsya");

// variables init
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPLay = document.getElementById('masterPLay');
let myProgressBar = document.getElementById('myProgressBar');
let playingGif = document.getElementById("playingGif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName: "Warriyo - Mortals", filePath:"songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath:"songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible", filePath:"songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE", filePath:"songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath:"songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "NEFFEX", filePath:"songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "NEFFEX", filePath:"songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "NEFFEX", filePath:"songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "NEFFEX", filePath:"songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "NEFFEX", filePath:"songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// handling Play/Pause/CLick
masterPLay.addEventListener('click', () => {
    // if(audioElement.paused || audioElement.currentTime <= 0) // audio not p[laying]
    if( masterPLay.classList.contains('fa-circle-play')) // alternative logic
    {
        audioElement.play();
        // changing Play button to Pause Button
        masterPLay.classList.remove('fa-circle-play');
        masterPLay.classList.add('fa-circle-pause');
        playingGif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPLay.classList.remove('fa-circle-pause');
        masterPLay.classList.add('fa-circle-play');
        playingGif.style.opacity = 0;
    }
})

// Listening to Events
audioElement.addEventListener('timeupdate', () =>{
    // console.log("time update event listener")
    // update progressbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100); // percentage of the progress of the song
    myProgressBar.value = progress;
})

// update on clicking the progress bar
myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})