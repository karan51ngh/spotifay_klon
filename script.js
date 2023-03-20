console.log("Spotifay Nachinayetsya");

// variables init
let audioElement = new Audio('1.mp3');
let masterPLay = document.getElementById('masterPLay');
let myProgressBar = document.getElementById('myProgressBar')

let songs = [
    {songName: "NEFFEX", filePath:"songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "NEFFEX", filePath:"songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "NEFFEX", filePath:"songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "NEFFEX", filePath:"songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "NEFFEX", filePath:"songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "NEFFEX", filePath:"songs/1.mp3", coverPath: "covers/1.jpg"}
]

// handling Play/Pause/CLick
masterPLay.addEventListener('click', () => {
    // if(audioElement.paused || audioElement.currentTime <= 0) // audio not p[laying]
    if( masterPLay.classList.contains('fa-circle-play')) // alternative logic
    {
        audioElement.play();
        // changing Play button to Pause Button
        masterPLay.classList.remove('fa-circle-play');
        masterPLay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPLay.classList.remove('fa-circle-pause');
        masterPLay.classList.add('fa-circle-play');
    }
})

// Listening to Events
myProgressBar.addEventListener('timeupdate', () =>{
    console.log("time update event listener")
    // update seekbar
})