import React from 'react';
import PropTypes from 'prop-types';

export default function GamesList({games}) {
  const emptyGamesList = (
    <p>There are no games in your Collection!</p>
  );
  const gamesList = (
    <p>Your Games List</p>
  );
  return (
    <div>
      {games.length === 0 ? emptyGamesList : gamesList}
    </div>
  );
}

GamesList.propTypes = {
  games: PropTypes.array.isRequired
}
