const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
    .then(bolb => bolb.json())
    .then(data => cities.push(...data))

function findMatches(word, cities) {
    return cities.filter(place => {
        const regex = new RegExp(word, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
}

function displayMathes() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
    	const regex = new RegExp(this.value, 'gi');
    	const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`) 
    	const state = place.state.replace(regex, `<span class="hl">${this.value}</span>`) 
        return `
			<li>
				<span class="name">${cityName}, ${state}</span>
				<span class="population">${place.population}</span>
			</li>
		`
    });
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMathes);
searchInput.addEventListener('keyup', displayMathes);