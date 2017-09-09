import {GET_ONE_GAME} from './types';

export default function oneGameFetched(game) {
  return {
    type: GET_ONE_GAME,
    game
  }
}
