const API_URL = "https://musicbrainz.org/ws/2/";

function apiGetArtist(name, error) {
    console.log("coucou1");
    const request = new XMLHttpRequest();
    request.open("GET", API_URL + "artist/?query=" + encodeURIComponent(name), true);
    request.addEventListener("readystatechange", () => {
        console.log("coucou2");
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                console.log("coucou3");
                const response = request.responseText;
                console.log("coucou4");
                console.log(response);

                // artist-list.forEach(artist => {
                //     addArtist(
                //     );
                // });
                
            } else {
                error(request);
                console.log("error");
            }
        }
    });
    request.send();
}