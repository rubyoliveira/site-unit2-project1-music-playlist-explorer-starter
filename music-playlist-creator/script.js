function createPlaylistCards(playlists) {
    const container = document.getElementById('playlists');

    playlists.forEach((playlist) => {
        const card = document.createElement("div")
        card.className = "cards"
        card.innerHTML = `
            <img src="${playlist.playlist_art}" alt = "n/a" width = "250" height = "250" class = "center" id = "playlist-img">
            <div class= "cards-txt">
                <h2 id = 'name'>${playlist.playlist_name}</h2>
                <p id = "creator">${playlist.playlist_creator}</p>
                <button class = "button" id = "button-${playlist.playlistID}">
                <p id = "likes">&#128151;</p>
                <p class = "playlist-like" id = "likes-${playlist.playlistID}">0</p>
                </button>
            </div>
            <div id = "modal-${playlist.playlistID}" class = "modal">
                <div class= "modal-content">
                    <div class = "modal-header">
                        <span id="close-${playlist.playlistID}" class="close">&times;</span>
                        <img src="${playlist.playlist_art}" alt = "n/a" width = "50" height = "50" class = "modal-img">
                        <div class = "modal-text">
                            <h1>${playlist.playlist_name}</h1>
                            <h2>${playlist.playlist_creator}</h2>
                        </div>
                    </div>
                    <button class = "shuffle" id = "shuffle-${playlist.playlistID}">
                        shuffle
                    </button>
                    <div id="song-container-${playlist.playlistID}"></div>
                </div>
            </div>`;

        container.appendChild(card)

        const songContainer = document.getElementById(`song-container-${playlist.playlistID}`)

        for (let i = 0; i < playlist.songs.length; i++) {
            songContainer.innerHTML += `
            <ul class="box">
                <li class="box" id="${playlist.songs[i].songID}">
                    <img src="${playlist.songs[i].cover_art}" alt = "n/a" width = "25" height = "25" class = "box-img">
                    <div class = "box-text">
                        <h1>${playlist.songs[i].title}</h1>
                        <p>${playlist.songs[i].artist}</p>
                        <p>${playlist.songs[i].album}</p>
                    </div>
                <div class = "box-time">
                    <p>${playlist.songs[i].duration}</p>
                </div>
                </li>
            </ul>`
        };
        const img = card.querySelector("#playlist-img")
        const modal = document.getElementById(`modal-${playlist.playlistID}`);
        img.addEventListener("click", () => {
            modal.style.display = "block";
        })
        // const modal = document.getElementById(`modal-${playlist.playlistID}`);
        const span = document.getElementById(`close-${playlist.playlistID}`);
        console.log(span)

        span.addEventListener("click", () => {
            console.log(modal)
            closeModal(modal)
        })

        let count = 0;
        let btn = document.getElementById(`button-${playlist.playlistID}`);
        let disp = document.getElementById(`likes-${playlist.playlistID}`);
         
        btn.onclick = function () {
                    count++;
        disp.innerHTML = count;
        }
        const shuffleButton = modal.querySelector(`#shuffle-${playlist.playlistID}`);
        shuffleButton.onclick = function(){
            console.log('push')
            const shuffledSongs = shuffleArray(playlist.songs);
            songContainer.innerHTML = "";
            for (let i = 0; i < shuffledSongs.length; i++) {
                songContainer.innerHTML += `
                <ul class="box">
                    <li class="box" id="${shuffledSongs[i].songID}">
                        <img src="${shuffledSongs[i].cover_art}" alt = "n/a" width = "25" height = "25" class = "box-img">
                        <div class = "box-text">
                            <h1>${shuffledSongs[i].title}</h1>
                            <p>${shuffledSongs[i].artist}</p>
                            <p>${shuffledSongs[i].album}</p>
                        </div>
                        <div class = "box-time">
                            <p>${shuffledSongs[i].duration}</p>
                        </div>
                    </li>
                </ul>`
             };
        }
})
};

function shuffleArray(array) {
    let newArray = array
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return newArray
}

document.addEventListener('DOMContentLoaded', () => {
    createPlaylistCards(data.playlists);
});

function closeModal(element) {
    element.style.display = "none";
}

function createFeatured(playlist){
    const container = document.getElementById('featured');
    const div = document.createElement("div")
    div.className = "featured-info"
    div.innerHTML = `
        <img src="${playlist.playlist_art}" alt = "n/a" width = "400" height = "400" class = "featured-img" >
        <div class = "featured-title">
            ${playlist.playlist_name}
        </div>
        <div class = "featured-creator">
            ${playlist.playlist_creator}
        </div>
        <div class = "featured-boxes">
        </div>
        `;
        const boxContainer = document.getElementById("featured-boxes")

        for (let i = 0; i < playlist.songs.length; i++) {
            boxContainer.innerHTML += `
            <ul class="box">
                <li class="box" id="${playlist.songs[i].songID}">
                    <img src="${playlist.songs[i].cover_art}" alt = "n/a" width = "25" height = "25" class = "box-img">
                    <div class = "box-text">
                        <h1>${playlist.songs[i].title}</h1>
                        <p>${playlist.songs[i].artist}</p>
                        <p>${playlist.songs[i].album}</p>
                    </div>
                <div class = "box-time">
                    <p>${playlist.songs[i].duration}</p>
                </div>
                </li>
            </ul>`
        };
    }

