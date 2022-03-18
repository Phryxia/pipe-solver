export const enum Rotation {
  DOWN = 0,
  LEFT = 1,
  UP = 2,
  RIGHT = 3,
}

export function rotate(rotation: Rotation, amount: number): Rotation {
  return (rotation + 4 + (amount % 4)) % 4
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
