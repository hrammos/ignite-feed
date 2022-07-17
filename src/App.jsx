import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque expedita saepe molestiae necessitatibus error placeat et excepturi neque aut nostrum! Voluptas perspiciatis odit tempore voluptate, sequi doloremque harum iusto nulla.
        </main>
      </div>
    </div>
  )
}
