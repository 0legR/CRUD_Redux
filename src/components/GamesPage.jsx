import React, {Component} from 'react';
import GamesList from './GamesList';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import fetchGames from '../actions/fetchGames';

class GamesPage extends Component {
  componentDidMount() {
      this.props.fetchGames();
  }

  render() {
    return (
      <div>
        <h1>Games List</h1>
        <GamesList games={this.props.games} />
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      games: state.games
    }
}

GamesPage.propTypes = {
  games: PropTypes.array.isRequired,
  fetchGames: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {fetchGames})(GamesPage);
