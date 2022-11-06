const sounds = ['round1','round2','round3','round4','finishhim','fatality']

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0;
    })
}

sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add('btn');

    btn.innerText = sound

    btn.addEventListener('click',() => {
        stopSongs()

        document.getElementById(sound).play()
    });

    document.getElementById("buttons").appendChild(btn)
})