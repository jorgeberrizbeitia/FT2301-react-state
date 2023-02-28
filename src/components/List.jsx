

function List() {

  const someArray = ["patata", "banana", "tomate", "aguacate", "piña", "fresas", "uvas"]
  // const JSXArray = [<li>patata</li>, <li>banana</li>, <li>tomate</li>, <li>aguacate</li>]
  // .map() crea un nuevo array donde cada uno de los elementos del original está modificado

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

    </div>
  )
}

export default List