function toggleMusic(musicSrc, buttonId) {
    var audio = document.getElementById('music');
    var button = document.getElementById(buttonId);
    
    if (audio.paused) {
        audio.src = musicSrc;
        audio.play();
        button.textContent = 'Pause Music';
        button.classList.remove('play');
        button.classList.add('pause');
    } else {
        audio.pause();
        button.textContent = 'Play Music';
        button.classList.remove('pause');
        button.classList.add('play');
    }
}