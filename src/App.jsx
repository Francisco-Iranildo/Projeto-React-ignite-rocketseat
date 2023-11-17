import { Post } from "./Post"

export function App() {

  return (
    <div>
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

