// API modules are used to perform the AJAX
// communications between client (browser)
// and the server
import sendRequest from './send-request';

const BASE_URL = '/api/drinks';

export function getAll() {
  return sendRequest(`${BASE_URL}`);
}

export function getRandomCocktail() {
  return sendRequest(`${BASE_URL}/random`)
}

