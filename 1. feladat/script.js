function getData(params) {
    
    var URL = `https://api.tvmaze.com/${params}`;
    var x = new XMLHttpRequest();

    x.onreadystatechange = () => {
        if(x.readyState == 4 && x.status == 200){
            var response = JSON.parse(x.responseText);
            showFirstTen(response);
        }
    }

    x.open("GET", URL, true);
    x.send();
}

function showFirstTen(data) {

    document.getElementById('numberOfResults').innerText = data.length;

    var firstTen = data.slice(0,10)
    var cardsArray = firstTen.map(x => dataToCard(x));
    document.getElementById("grid").innerHTML = cardsArray.join("");
}

function dataToCard(data) {
    return `
    <div class="col-md-6 col-lg-3 col-sm-12 d-flex align-items-center flex-column m-4">
        <div class="card " style="width: 22rem;">
            ${imageExists(data)}
            <div class="card-body">
            <h5 class="card-title mb-3">${data.show.name}</h5>
            <p><b>Imdb code</b>: ${data.show.externals.imdb}</p>
            <p><b>Genres</b>: ${badges(data)}</p>
            <p><b>Language</b>: ${data.show.language}</p>
            <p><b>Status:</b> ${data.show.status}</p>
            ${reduceSummary(data)}
            </div>
        </div>
    </div>`;
}

function badges(data){
    var genres = data.show.genres;
    
    var badgesArray = genres.map(x => `<span class='badge text-bg-primary'>${x}</span>`);

    return badgesArray.join(" ");
}

function imageExists(data) {
    var image = "";
    if (data.show.image) {
        image = `<img src="${data.show.image.medium}" class="card-img-top" alt="${data.show.name} kép"></img>`;
    }
    else {
        image = "<p class='text-center'>No image avaliable</p>"
    }
    return image;
}

function reduceSummary(data) {
    var summary = data.show.summary;
    return `${String(summary).slice(0, 200)}...`;
}

function search() {
    var option = document.getElementById("searchSelect").value;

    if (option == 1) {
        searchByKeyword();
    }
    else if (option == 2) {
        searchByPerson();
    }
    else if (option == 3) {
        searchByKeyword();
    }
}

function searchByKeyword(){
    var keyWord = document.getElementById("searchBar").value;

    getData(`search/shows?q=${keyWord}`);
}

function searchByPerson(){
    var person = document.getElementById("searchBar").value;

    var URL = `https://api.tvmaze.com/search/people?q=${person}`;

    var x = new XMLHttpRequest();

    x.onreadystatechange = () => {
        if(x.readyState == 4 && x.status == 200){
            var response = JSON.parse(x.responseText);
            var actorId = response[0].person.id;
            getMoviesByActor(actorId);
        }
    }

    x.open("GET", URL, true);
    x.send();
}

function getMoviesByActor(actorId) {

    var URL = `https://api.tvmaze.com/people/${actorId}/castcredits?embed=show`;

    var x = new XMLHttpRequest();

    x.onreadystatechange = () => {
        if(x.readyState == 4 && x.status == 200){
            var response = JSON.parse(x.responseText);

            let shows = response.map(x => x._embedded);

            showFirstTen(shows);
        }
    }

    x.open("GET", URL, true);
    x.send();
}