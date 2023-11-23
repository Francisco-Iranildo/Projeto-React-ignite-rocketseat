import { PencilLine } from "@phosphor-icons/react";
import styles from './Sidebar.module.css';
import { Avatar } from "./Avatar";

export function Sidebar () {
  return(
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1474224017046-182ece80b263?q=30&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      />
      <div className={styles.perfil}>
        <Avatar  src = "https://github.com/Francisco-Iranildo.png"/>

        <strong>Francisco Iranildo</strong>
        <span>Programador Front-End</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}