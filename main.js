searchForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    console.log("test");
    console.log(artistName.value);
    apiGetArtist(artistName.value);
});