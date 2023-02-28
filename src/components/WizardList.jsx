import React, { useState } from 'react';
import wizards from "../data/wizards.json"
// console.log(wizards)

const startingWizards = wizards.slice(0, 3)// los tres primeros elementos de wizards

function WizardList() {

  const [ actualWizards, setActualWizard ] = useState(startingWizards)

  const cardStyles = {
    backgroundColor: "lightgray",
    margin: "10px",
    padding: "10px",
  }

  const addWizard = () => {

    if (actualWizards.length === wizards.length) {
      console.log("todos los hechiceros añadidos")
      return;
    }

    // console.log("intentando agregar hechicero")

    // buscar un hechicero aleatorio
    const randomNumber = Math.random() * wizards.length
    const randomPosition = Math.floor(randomNumber)
    const randomWizard = wizards[randomPosition]
    // console.log(randomWizard)
    
    let newWizardId = randomWizard.id;
    let isWizardRepeated = false;
    actualWizards.forEach((eachWizard) => {
      if (newWizardId === eachWizard.id) {
        isWizardRepeated = true
      }
    })
    console.log(isWizardRepeated)
    if (isWizardRepeated === true) {
      console.log("se ha realizado una recursion")
      addWizard()
      return;
    }


    // en una sola linea
    // const randomWizard = wizards[ Math.floor(Math.random() * wizards.length) ]

    // agregar hechicero a la lista

    // CLONAMOS EL ARRAY
    const wizardClone = [...actualWizards]
    // const wizardClone = actualWizards.map((eachElement) => {
    //   return eachElement
    // })
    // const wizardClone = JSON.parse( JSON.stringify( actualWizards ) )

    wizardClone.unshift(randomWizard)
    // actualWizards.push(randomWizard) // no podemos hacerlo
    setActualWizard( wizardClone )

  }

  const sortWizards = () => {
    
    const wizardClone = [...actualWizards];

    // wizardClone.sort((elem2, elem1) => {
    //   // 1 o -1 o 0
    //   if (elem2.name[0] > elem1.name[0]) {
    //     return 1
    //   } else if (elem2.name[0] < elem1.name[0]) {
    //     return -1
    //   } else {
    //     return 0
    //   }
    // })

    wizardClone.sort((elem2, elem1) => {
      return elem2.name.localeCompare(elem1.name)
    })

    setActualWizard( wizardClone )

  }

  const removeWizard = (elIdABorrar) => {
    // 1. como sabemos exactamente cual elemento remover
    console.log("intentando remover a un wizard", "el id:", elIdABorrar)

    // 2. como removemos un elemento del array
    const filteredArr = actualWizards.filter((eachElement) => {
      if (eachElement.id === elIdABorrar) {
        return false // no lo incluyas
      } else {
        return true // si incluyelo
      }
    })

    setActualWizard( filteredArr )

  }



  return (
    <div>
      
      <h3>Lista de Hechiceros</h3>

      <button onClick={ addWizard }>Agregar Hechiceros</button>
      <button onClick={ sortWizards }>Ordenar Lista</button>

      {actualWizards.map((eachElement) => {
        return (
          <div style={cardStyles} key={eachElement.id}>
            <h3>Nombre: {eachElement.name}</h3>
            <p>Descripción: {eachElement.description}</p>
            {/* <button onClick={ removeWizard }>Borrar</button> */}
            <button onClick={ () => removeWizard(eachElement.id) }>Borrar</button>
          </div>
        )
      })}


    </div>
  )
}

export default WizardList