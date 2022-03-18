import '@src/styles/global.css'
import classNames from 'classnames/bind'
import styles from '@src/styles/app.module.css'
import Game from './game'

const cx = classNames.bind(styles)

export default function App() {
  return (
    <div className={cx('root')}>
      <h1>Pipe Puzzle Solver</h1>
      <Game />
    </div>
  )
}
