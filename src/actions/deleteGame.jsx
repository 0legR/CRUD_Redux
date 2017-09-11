import handleResponse from '../utils/handleResponse';
import gameDeleted from './gameDeleted';

export default (id) => dispatch => fetch(`/api/games/${id}`, {
  method: 'DELETE',
  headers: {
    "Content-Type": "application/json"
  }
}).then(handleResponse)
.then(data => dispatch(gameDeleted(id)));
