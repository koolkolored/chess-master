import Image from 'next/image'
import styles from './page.module.css'
import Board from './Board'

export default function Home() {
  function printTheWordInArg() {

  }
  return (
    <main className={styles.main}>
      
      <Board></Board>
    </main>
  )
}
