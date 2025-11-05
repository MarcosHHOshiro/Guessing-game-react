
import styles from './app.module.css'

import { Header } from "./components/Header"
import { Tip } from './components/Tip'
import { Letter } from './components/Letter'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { LetterUsed } from './components/LettersUsed'

function App() {

  function handleRestart() {
    alert('Reiniciar jogo!')
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestart} />

        <Tip tip="Linguagem de programção dinamica"></Tip>

        <div className={styles.word}>
          <Letter value="R"></Letter>
          <Letter value="a"></Letter>
          <Letter value="t"></Letter>
          <Letter value="o"></Letter>
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder='?' />
          <Button title='Confirmar'></Button>
        </div>

        <LetterUsed />
      </main>
    </div>
  )
}

export default App
