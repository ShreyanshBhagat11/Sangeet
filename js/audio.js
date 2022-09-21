console.log("WT project");

function playPause(music, btn) {
    let stopAudio = document.querySelectorAll('audio');
    let pauseAll = document.querySelectorAll('.button');

    if (music.play && music.id != sessionStorage.getItem("musicValue")) {
        stopAudio.forEach(element => {
            element.pause();
        });

        pauseAll.forEach(element => {
            element.src = "/images/playNobackground.png";
        });
    }
    sessionStorage.setItem("musicValue", music.id);

    if (music.paused) {
        music.play();
        btn.src = "/images/pauseNobackground.png";
    } else if (music.play) {
        console.log("else part");
        music.pause();
        btn.src = "/images/playNobackground.png";
    }


}

/*
let btn = document.getElementsByClassName('button');
let music = document.querySelectorAll('audio');
console.log(btn);
console.log(music);
btn.forEach(element => {
    if (audio.paused) {
        audio.play();
        btn.src = "/images/pauseNobackground.png";
    } else {
        audio.pause();
        btn.src = "/images/playNobackground.png";
    }
}); */