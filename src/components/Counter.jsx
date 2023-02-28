import { useState } from "react"

function Counter() {

  // let counter = 0;
  // const algo = useState(0)
  // console.log(algo)

  const [ counter, setCounter ] = useState(0)
  //        |            |                 |
  //     el estado     funcionQueActualizaElEstado   valor inicial del estado

  // console.log(counter)
  // console.log(setCounter)

  // vamos a crear un estado llamado counter

  const increaseNumber = () => {
    console.log("intentando incrementar el contador")

    // necesito acceder al valor de 0 e incrementarlo
    // manipular dom X No :(
    // counter = counter + 1;
    // console.log(counter)
    // el ESTADO de React es un Objeto que almacena valor que cambiaran
    // cada vez que cambie uno de esos valores, causa un nueva renderizacion del JSX

    // luego de crear el estado, lo manipulamos acá
    // counter = counter + 1 // NUNCA DEBEMOS MODIFICAR EL ESTADO DIRECTAMENTE
    setCounter( counter + 1 )
    //                          |
    //                      el nuevo valor del estado

    // la funcion hace 2 cosas
    // 1. Actualiza el estado
    // 2. Renderiza el componente de nuevo

  }

  const decreaseNumber = () => {
    setCounter(counter - 1)
  }

  const [ message, setMessage ] = useState("")

  const updateMessage = () => {
    setMessage(`El valor guardado es: ${counter}`)
  }

  return (
    <div>
      
      <h2>{counter}</h2>
      <button onClick={decreaseNumber}>-</button>
      <button onClick={increaseNumber}>+</button>
      <br />
      <button onClick={updateMessage}>Registrar valor</button>
      <p>{message}</p>

    </div>
  )
}

// ! BONUS. que el boton se bloquee cuando el contador sea mayor a 10 o menos a 0

export default Counter