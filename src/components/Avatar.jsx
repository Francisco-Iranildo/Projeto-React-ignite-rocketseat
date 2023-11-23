import styles from "./Avatar.module.css"

//conceito de desistruturação no javaScript
// const user = {name:"diego"}
// const {name} = user;

// eslint-disable-next-line react/prop-types
export function Avatar ({comBorda = true, src}){
  
  //const comBorda = props.comBorda != false;

  return(
    <img className={comBorda ? styles.avatarComBorda : styles.avatarSemBorda }  src={src}/>
  )
}