function playSound() {
    const audio = document.getElementById('audio');
    audio.currentTime = 0; // Mulai dari awal
    audio.play();
}
