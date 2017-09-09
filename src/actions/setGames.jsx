import {SET_GAMES} from './types';

export default function setGames(games) {
  return {type: SET_GAMES, games};
};
