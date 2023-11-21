import styles from "./Post.module.css"

export function Post(){
  return(
    //artigo
    <article className={styles.post}>
      <header>
        <div className={styles.autor}>
          <img className={styles.avatar} src="https://github.com/Francisco-Iranildo.png"/>
          <div className={styles.autorInfor}>
            <strong>Francisco Iranildo</strong>
            <span>Dev Front-End</span>
          </div>
        </div>

        <time title="11 de maio as 8:13h" dateTime="2022-05-11 08:00">Publicado há 1 hora</time>
      </header>

      <div className={styles.content}>
          <p>Fala galeraa 👋</p>

          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

          <p>👉<a href="#"> jane.design/doctorcare</a></p>

          <p>
            <a href="#">#novoprojeto</a>
            <a href="#">#nlw</a>
            <a href="#">#rocketseat</a>
          </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
        placeholder="Deixe um comentário"/>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}