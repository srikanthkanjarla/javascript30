let cities = [];
const citiesList = document.getElementById('search-results');

fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        cities = data;
    });

function findMatches(searchWord, cities) {
    let regExp = new RegExp(searchWord, 'gi');
    return cities.filter(function (place) {
        return place.city.match(regExp) || place.state.match(regExp);

    });
}

function displayMatches(value, cities) {
    let matchedCities = findMatches(value, cities);
    let regexp = new RegExp(value, 'gi');
    let html = matchedCities.map(function (place) {
        let city = place.city.replace(regexp, `<span class="highlight">${value}</span>`);
        let state = place.state.replace(regexp, `<span class="highlight">${value}</span>`);
        return `<li>${city}, ${state}</li>`;
    }).join(' ');
    citiesList.innerHTML = value === '' ? '' : html;
}

document.getElementById('search').addEventListener('change', function (e) {
    displayMatches(this.value, cities);
});

document.getElementById('search').addEventListener('keyup', function (e) {
    displayMatches(this.value, cities);
});