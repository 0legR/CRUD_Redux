import oneGameFetched from './oneGameFetched';

export default (id) => dispatch => fetch(`/api/games/${id}`)
  .then(res => res.json())
  .then(data => dispatch(oneGameFetched(data.game)));
