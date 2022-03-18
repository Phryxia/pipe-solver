import classNames from 'classnames/bind'
import styles from '@src/styles/game.module.css'
import { Pipe } from '@src/model'

const cx = classNames.bind(styles)

interface PipeProps {
  pipe: Pipe
  onClick(x: number, y: number): void
}

export default function Pipe({ pipe, onClick }: PipeProps) {
  return (
    <button
      className={cx('pipe', pipe.rotation)}
      onClick={() => onClick(pipe.x, pipe.y)}
    >
      A
    </button>
  )
}
