
import styles from './app.module.css'

import { Header } from "./components/Header"
import { Tip } from './components/Tip'

function App() {

  function handleRestart() {
    alert('Reiniciar jogo!')
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestart} />

        <Tip tip="Linguagem de programção dinamica"></Tip>
      </main>
    </div>
  )
}

export default App
