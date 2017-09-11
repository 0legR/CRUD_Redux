import handleResponse from '../utils/handleResponse';
import addGame from './addGame';

export default (data) => dispatch => fetch('/api/games', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json"
  }
}).then(handleResponse)
.then(data => dispatch(addGame(data.game)));
