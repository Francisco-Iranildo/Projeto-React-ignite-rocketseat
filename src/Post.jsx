export function Post(props) {
  console.log(props)
  return(
    <div>
      <strong>{props.autor}</strong>
      <p>{props.conteudo}</p>
    </div>
  )

}
