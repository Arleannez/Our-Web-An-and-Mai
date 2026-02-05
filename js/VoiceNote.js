// Burger menu toggle
document.getElementById('burger').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});

// Close menu when clicking outside or on a link
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('nav-menu');
    const burger = document.getElementById('burger');
    if (!navMenu.contains(event.target) && !burger.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

// Close menu when a link is clicked
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('nav-menu').classList.remove('active');
    });
});


// Playlist
const songs = [
  {
    title: "Note 1",
    artist: "An/Bean",
    src: "Music/MESSAGE_1.m4a"
  },
  {
    title: "Note 2",
    artist: "An/Bean",
    src: "Music/Message_2.m4a"
  },
    {
        title: "Note 3",
        artist: "An/Bean",
        src: "Music/Message_3.m4a"
    },
    {
        title: "Note 4",
        artist: "An/Bean",
        src: "Music/Message_4.m4a"
    },
    {
        title: "This one is RNB",
        artist: "An/Bean",
        src: "Music/RNB.mp3"
    },
    {
        title: "Sunny Rainy Day",
        artist: "An/Bean",
        src: "Music/Sunny Rainy Day.mp3"
    }

];

let currentSong = 0;
let isPlaying = false;

const audio = document.getElementById("audio-player");
const playBtn = document.getElementById("play-pause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.querySelector(".song-title");
const artist = document.querySelector(".artist");
const progressBar = document.getElementById("progress-bar");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = "By: " + song.artist;
  audio.src = song.src;
}

function playSong() {
  audio.play();
  playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  isPlaying = true;
}

function pauseSong() {
  audio.pause();
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
  isPlaying = false;
}

playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

prevBtn.addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(songs[currentSong]);
  playSong();
});

nextBtn.addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(songs[currentSong]);
  playSong();
});

// Progress bar
audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = progress + "%";

  const currentMinutes = Math.floor(audio.currentTime / 60);
  const currentSeconds = Math.floor(audio.currentTime % 60);
  currentTimeEl.textContent = `${currentMinutes}:${currentSeconds < 10 ? "0" : ""}${currentSeconds}`;

  if (!isNaN(audio.duration)) {
    const durationMinutes = Math.floor(audio.duration / 60);
    const durationSeconds = Math.floor(audio.duration % 60);
    durationEl.textContent = `${durationMinutes}:${durationSeconds < 10 ? "0" : ""}${durationSeconds}`;
  }
});

// Auto next
audio.addEventListener("ended", () => {
  nextBtn.click();
});

// Load first song
loadSong(songs[currentSong]);


// Update progress bar and time
audioPlayer.addEventListener('timeupdate', () => {
    const { currentTime, duration } = audioPlayer;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;

    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = formatTime(duration);
});

// Click on progress bar to seek
progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (clickX / width) * duration;
});

// Format time
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}



