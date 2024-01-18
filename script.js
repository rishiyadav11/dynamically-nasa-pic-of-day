var date = document.querySelector(".date");
var image = document.querySelector(".image");
var explanation = document.querySelector(".explanation");
var link = document.querySelector(".link");
var apikey = "tymQ0afT1c9cGMYRpOckXy8PuKN864oEwdFxkB5F";
var url = "https://api.nasa.gov/planetary/apod?api_key=" + apikey;

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        date.textContent = data.date;
        image.src = data.url;
        explanation.textContent = data.explanation;
        link.href = data.hdurl;
        link.textContent = data.title;
    })
    .catch(function(error) {
        console.log(error);
    });


    