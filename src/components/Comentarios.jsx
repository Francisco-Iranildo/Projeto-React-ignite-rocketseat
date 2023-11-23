import { Avatar } from "./Avatar";
import styles from "./Comentarios.module.css"
import { Trash, ThumbsUp } from "@phosphor-icons/react";

export function Comentarios() {
  return(
    <div className={styles.comentarios}>
      <Avatar comBorda={false} src={"https://github.com/diego3g.png"}/>

      <div className={styles.caixaComentar}>
        <div className={styles.conteudoComentario}>
          <header>
            <div className={styles.autorTempo}>
              <strong>Francisco Iranildo</strong>
              <time 
                title="11 de maio as 8:13h" 
                dateTime="2022-05-11 08:00"
              >
                Publicado há 1 hora atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20}/>
            <p>Aplaudir <span>20</span></p>
          </button>
        </footer>
      </div>
    </div>
  )
}