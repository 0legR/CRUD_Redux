import handleResponse from '../utils/handleResponse';

export default (data) => dispatch => fetch('/api/games', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json"
  }
}).then(handleResponse);
