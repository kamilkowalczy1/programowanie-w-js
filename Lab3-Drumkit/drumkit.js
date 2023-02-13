const btnStartRecording = document.getElementById("btn-start-recording");
 

document.addEventListener('keypress', (event) => {
    playSound(event.key);
    startRecording(event.key);
});

//case od 1 - 9 przypisanie dzwieku
function playSound(key) {
    switch (key) {
        case '1':
            var boom = new Audio('sounds/boom.wav');
            boom.play();
            break;

        case '2':
            var clap = new Audio('sounds/clap.wav');
            clap.play();
            break;

        case '3':
            var hihat = new Audio('sounds/hihat.wav');
            hihat.play();
            break;

        case '4':
            var kick = new Audio('sounds/kick.wav');
            kick.play();
            break;

        case '5':
            var openhat = new Audio('sounds/openhat.wav');
            openhat.play();
            break;

        case '6':
            var ride = new Audio('sounds/ride.wav');
            ride.play();
            break;

        case '7':
            var snare = new Audio('sounds/snare.wav');
            snare.play();
            break;
        case '8':
            var tink = new Audio('sounds/tink.wav');
            tink.play();
            break;

        case '9':
            var tom = new Audio('sounds/tom.wav');
            tom.play();
            break;

        default:
            console.log(key);
    }
}

let track1 = [];
let track2 = [];
let track3 = [];
let track4 = [];


//nagrywanie
function record(event) {
    if (!recording) return;
    const sound = {
        key: event.key,
        time: Date.now()
    };
   const trackName = eval("track"+ trackNumber);
    trackName.push(sound);
    console.log(track1)
}
function setRecording(number) {
    recording = true;
    if (number) {
        trackNumber = number;
    }
}
window.addEventListener('keypress', record);

//odtwarzanie
function playBack(number){
let pauseTime;
const trackName = eval("track"+ number);
trackName.forEach(element => {
    if (element === trackName[0]) {
        pauseTime = element.time;   
    }
    if (element.key) {
        setTimeout(() => {
            playSound(element.key);
        }, element.time - pauseTime);
    }
console.log(pauseTime)
});


}

// Odtworzenie wszystkich kanałów na raz
function playAll(){
    playBack(1);
    playBack(2);
    playBack(3);
    playBack(4);
}

