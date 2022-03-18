import { GameMeta, GameState, Pipe, PipeType, Rotation } from '@src/model'
import { create2DArray, getRandomly } from '@src/utils'

export function createGame(meta: GameMeta): GameState {
  return {
    meta,
    pipes: create2DArray<Pipe>(meta.width, meta.height, (x, y) => ({
      x,
      y,
      rotation: getRandomly([
        Rotation.DOWN,
        Rotation.LEFT,
        Rotation.UP,
        Rotation.RIGHT,
      ]),
      type: getRandomly([
        PipeType.I_SHAPE,
        PipeType.L_SHAPE,
        PipeType.T_SHAPE,
        PipeType.LEAF,
      ]),
    })),
  }
}

function hasLoop(game: GameState) {
  //
}
