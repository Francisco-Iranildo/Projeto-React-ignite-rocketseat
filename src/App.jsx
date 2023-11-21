import { Post } from "./Post"
import './global.css'
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import styles from "./App.module.css"

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            autor = "francisco iranildo"
            conteudo="esta aprendendo a usar o react"
          />
          <Post
            autor = "Aomine Daiki"
            conteudo = "O único que pode me vencer, sou eu mesmo"
          />
        </main>
      </div>
    </div>
  )
}

