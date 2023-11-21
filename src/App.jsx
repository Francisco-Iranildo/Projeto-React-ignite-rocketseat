import { Post } from "./Post"
import './global.css'
import { Header } from "./components/Header"

export function App() {

  return (
    <div>
      <Header/>
      <Post 
        author = "francisco iranildo"
        conteudo="esta aprendendo a usar o react"
      />
      <Post
        author = "Aomine Daiki"
        conteudo = "O único que pode me vencer, sou eu mesmo"
      />
    </div>
  )
}

