import styles from './styles.module.css'

console.log(styles)

export function Header() {
  return(
    <header className={styles.header}>
      <h1>ignite</h1>
    </header>
  );
}