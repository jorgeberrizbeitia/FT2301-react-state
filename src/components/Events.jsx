

function Events() {

  const printSomething = () => {
    console.log("probando")
  }

  const handleMouseEnter = () => {
    console.log("raton entrando al div")
  }

  const handleMouseLeave = () => {
    console.log("raton saliendo del div")
  }

  const userWritingSomething = (event) => {
    console.log(event) // TODA la informacion del evento que está ocurriendo
    console.log(event.target) // la info sobre donde está ocurriendo el evento (el campo)
    console.log(event.target.value) // el valor de el campo
    // console.log("usuario escribiendo")
  }

  return (
    <div>
      
      <h4>Eventos</h4>

      {/* <button onClick={ console.log("probando") }>Click</button>  */}
      {/* no funciona :( JS ejecuta la funcion al leerla, no al hacer click */}
      <button onClick={ printSomething }>Click</button>

      <div onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>
        <h3>Hola</h3>
      </div>

      <input type="text" onChange={ userWritingSomething }/>

    </div>
  )
}

export default Events




// recordamos modulo 1


// function startGame() {
//   // logica para iniciar el juego
// }


// buttonDOM.addEventListener("click", startGame )