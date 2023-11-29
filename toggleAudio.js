
<script>
    function toggleAudio() {
        var audio = document.getElementById('audio-player');
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
</script>