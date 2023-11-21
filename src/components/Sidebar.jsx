import styles from './Sidebar.module.css'
export function Sidebar () {
  return(
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1474224017046-182ece80b263?q=30&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      />
      <div className={styles.perfil}>
        <strong>Francisco Iranildo</strong>
        <span>Programador</span>
      </div>
      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}