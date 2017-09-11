import {GAME_UPDATED} from './types';

export default function gameUpdated(game) {
  return {
    type: GAME_UPDATED,
    game
  }
}
