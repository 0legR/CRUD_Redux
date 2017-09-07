import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function GamesList({games}) {
  const emptyMessage = (<p>There are no games in your Collection</p>);
  const gamesList = (<p>Games List</p>);

  return (
    <div>
      {games.length === 0 ? emptyMessage : gamesList}
    </div>
)};

GamesList.propTypes = {
  games: PropTypes.array.isRequired
}
