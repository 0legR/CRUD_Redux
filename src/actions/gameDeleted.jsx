import {GAME_DELETED} from './types';

export default function gameUpdated(gameId) {
  return {
    type: GAME_DELETED,
    gameId
  }
}
