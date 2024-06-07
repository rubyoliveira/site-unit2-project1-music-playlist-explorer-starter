function createPlaylistCards(playlists) {
    const container = document.getElementById('playlists');

    playlists.forEach((playlist) => {
        const card = document.createElement("div")
        card.className = "cards"
        card.innerHTML = `
            <img src="${playlist.playlist_art}" alt = "n/a" width = "250" height = "250" class = "center" class = "playlist-img">
            <div class= "cards-txt">
                <h2 id = 'name'>${playlist.playlist_name}</h2>
                <p id = "creator">${playlist.playlist_creator}</p>
                <span id = "likes">&#128151; ${playlist.likeCount}</span>
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

        const modal = document.getElementById(`modal-${playlist.playlistID}`);
        card.addEventListener("click", () => {
            modal.style.display = "block";
        })
        // const modal = document.getElementById(`modal-${playlist.playlistID}`);
        const span = document.getElementById(`close-${playlist.playlistID}`);
        console.log(span)

        span.addEventListener("click", () => {
            closeModal(modal)
        })
    })
}

document.addEventListener('DOMContentLoaded', () => {
    createPlaylistCards(data.playlists);
});

function closeModal(element) {
    console.log("closing", element.style.display)
    element.style.display = "none";
    console.log("closing", element.style.display)
}

// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none"
//     }
// }



//   how to get the data from data.js => playlist
//   use for each to make the code shorter
//   transfer function to arrow functions