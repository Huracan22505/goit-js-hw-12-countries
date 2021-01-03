import countryCardTpl from '../templates/card.hbs';
import countriesListTpl from '../templates/countriesList.hbs';
import debounce from 'lodash.debounce';
import API from '../js/api-servise';
import refs from '../js/refs';
import errMsg from '../js/notifications.js';

refs.input.addEventListener('input', debounce(onInputChange, 500));

function onInputChange() {
  reset();

  let inputValue = refs.input.value.replace(/[^a-z]/gi, '');
  let query = '';

  query = inputValue;

  API.fetchCountries(query).then(renderCountryCard).catch(onFetchError);
}

function renderCountryCard(country) {
  if (country.length > 10) {
    errMsg.errorMesg();
  } else if (country.length > 1 && country.length <= 10) {
    const markup = countriesListTpl(country);
    refs.cardContainer.insertAdjacentHTML('afterbegin', markup);
  } else {
    const markup = countryCardTpl(country);
    refs.cardContainer.insertAdjacentHTML('afterbegin', markup);
  }
}

function reset() {
  refs.cardContainer.innerHTML = '';
}
