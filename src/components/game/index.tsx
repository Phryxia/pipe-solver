import classNames from 'classnames/bind'
import styles from '@src/styles/game.module.css'
import React, { useReducer, useRef } from 'react'
import { GameState, rotate } from '@src/model'
import { createGame } from '@src/utils'
import Pipe from './pipe'

const cx = classNames.bind(styles)

export default function Game() {
  const [, update] = useReducer(() => ({}), {})
  const game = useRef<GameState>(
    createGame({
      width: 8,
      height: 8,
      isWrapped: false,
    })
  )

  function handlePipeClick(x: number, y: number): void {
    game.current.pipes[y][x].rotation = rotate(
      game.current.pipes[y][x].rotation,
      1
    )
    update()
  }

  return (
    <div className={cx('game')}>
      {game.current.pipes.map((row, y) => (
        <div className={cx('pipe-row')} key={y}>
          {row.map((pipe, x) => (
            <Pipe pipe={pipe} onClick={handlePipeClick} key={x} />
          ))}
        </div>
      ))}
    </div>
  )
}
