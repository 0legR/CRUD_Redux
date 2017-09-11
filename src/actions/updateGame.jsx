import handleResponse from '../utils/handleResponse';
import gameUpdated from './gameUpdated';

export default (data) => dispatch => fetch(`/api/games/${data._id}`, {
  method: 'PUT',
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json"
  }
}).then(handleResponse)
.then(data => dispatch(gameUpdated(data.game)));
