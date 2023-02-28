

function List() {

  const someArray = ["patata", "banana", "tomate", "aguacate", "piña", "fresas", "uvas"]
  // const JSXArray = [<li>patata</li>, <li>banana</li>, <li>tomate</li>, <li>aguacate</li>]
  // .map() crea un nuevo array donde cada uno de los elementos del original está modificado


  const ninjaTurtles = [
    {
      name: "leonardo",
      color: "blue", 
      weapon: "katana",
    },
    {
      name: "raphael",
      color: "red",
      weapon: "sai",
    },
    {
      name: "donatello",
      color: "purple",
      weapon: "bo",
    },
    {
      name: "michelangelo",
      color: "orange",
      weapon: "nunchaku",
    },
    {
      name: "splinter",
      color: "gray",
      weapon: "cane",
    }
  ]


  return (
    <div>
      
        <h4>Lista</h4>

        <ol>
          {someArray.map((eachElement, index) => {
            return (
              <li key={eachElement}>{eachElement}</li>
            )
          })}
        </ol>
        
        {/* key es un identificativo unico que debemos agregar a los elementos de una lista en react. DEBE SER UNICO */}

        {/* <ol>
          {someArray.map((eachElement) => <li>{eachElement}</li>)}
        </ol> */}


        {/* {tweetData.map((eachTweet) => {
          return (
            <Tweet tweet={eachTweet}/>
          )
        })} */}

        <h4>Lista de las Tortugas Ninja</h4>

        {ninjaTurtles.map((eachCharacter) => {
          return (
            <div key={eachCharacter.name} style={{
              backgroundColor: eachCharacter.color,
              margin: "20px",
              padding: "30px"
            }}>
              {/* {eachCharacter} */}
              <h3>{eachCharacter.name} <span> {eachCharacter.name === "splinter" ? "🐀" : "🐢"} </span></h3>
              <p>{eachCharacter.color}</p>
              <p>Arma: {eachCharacter.weapon}</p>

              {/* si el persona es splinter muestra 🐀 y en caso contrario 🐢 */}
              {/* <span>🐢</span> */}
              {/* {if (eachCharacter.name === "splinter") {
                <span>🐀</span>
              } else {
                <span>🐢</span>
              }} */}

              { (eachCharacter.name === "splinter") ? <span>🐀</span> : <span>🐢</span>}
              <span> {eachCharacter.name === "splinter" ? "🐀" : "🐢"} </span>

              {/* agregar un mensaje "la mejor ⭐" si la tortuga es donatello */}

              { eachCharacter.name === "donatello" ? <p>La mejor ⭐</p> : null }
              {/* { eachCharacter.name === "donatello" && <p>La mejor ⭐</p> } */}

              { eachCharacter.name === "michelangelo" ? <p>Casi casi la mejor ⭐</p> : null }

              { eachCharacter.name === "donatello" 
              ? <p>La mejor ⭐</p> 
              : eachCharacter.name === "michelangelo" 
              ? <p>Casi casi la mejor ⭐</p> 
              : null }

            </div>
          )
        })}

    </div>
  )
}

export default List