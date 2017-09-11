import React from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';

export default function GamesList({games, deleteGame}) {
  const emptyGamesList = (
    <p>There are no games in your Collection!</p>
  );
  const gamesList = (
    <div className="ui four cards">
      {games.map(game => <GameCard
          game={game}
          key={game._id}
          deleteGame={deleteGame} />)}
    </div>
  );
  return (
    <div>
      {games.length === 0 ? emptyGamesList : gamesList}
    </div>
  );
}

GamesList.propTypes = {
  games: PropTypes.array.isRequired,
  deleteGame: PropTypes.func.isRequired
}
