export const enum Rotation {
  DOWN = 'down',
  LEFT = 'left',
  UP = 'up',
  RIGHT = 'right',
}

export const enum PipeType {
  I_SHAPE = 'I_SHAPE',
  L_SHAPE = 'L_SHAPE',
  T_SHAPE = 'T_SHAPE',
  LEAF = 'LEAF',
}

export interface Pipe {
  x: number
  y: number
  type: PipeType
  rotation: Rotation
}

export interface GameMeta {
  width: number
  height: number
  isWrapped: boolean
}

export interface GameState {
  meta: GameMeta
  pipes: Pipe[][]
}
