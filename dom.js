const artistZone = document.querySelector("#results_container");
const searchForm = document.querySelector("#search_artist_form");
const inputSearch = document.querySelector("#inputSearch");
const resultsZone = document.querySelector("#results_container");
const artistName = document.querySelector("#artist");

function addArtist(name){

    const artistContainer = document.createElement("article");
    artistContainer.className = "artistContainer";

    const artistName = document.createElement("p");
    artistName.className = "name";
    artistName.textContent = name;


    artistContainer.appendChild(artistName);
    resultsZone.appendChild(artistContainer);
};