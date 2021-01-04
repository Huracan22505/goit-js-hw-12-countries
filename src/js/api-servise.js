const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

function fetchCountries(name) {
  return fetch(`${BASE_URL}${name}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Error fetching data');
  });
}

export default { fetchCountries };
