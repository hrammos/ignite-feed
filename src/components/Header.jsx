import styles from './Header.module.css'
import initeLogo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={initeLogo} alt="Logotipo do Ignite Feed" />
    </header>
  )
}