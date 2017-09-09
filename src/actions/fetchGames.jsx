import setGames from './setGames';

export default () => dispatch => fetch('/api/games')
  .then(res => res.json())
  .then(data => dispatch(setGames(data.games)));
