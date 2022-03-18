import classNames from 'classnames/bind'
import styles from '@src/styles/game.module.css'
import React, { useRef } from 'react'
import { GameState } from '@src/model'
import { createGame } from '@src/utils'
import Pipe from './pipe'

const cx = classNames.bind(styles)

export default function Game() {
  const game = useRef<GameState>(
    createGame({
      width: 8,
      height: 8,
      isWrapped: false,
    })
  )

  return (
    <div className={cx('game')}>
      {game.current.pipes.map((row, y) => (
        <div className={cx('pipe-row')} key={y}>
          {row.map((pipe, x) => (
            <Pipe pipe={pipe} onClick={() => {}} key={x} />
          ))}
        </div>
      ))}
    </div>
  )
}
