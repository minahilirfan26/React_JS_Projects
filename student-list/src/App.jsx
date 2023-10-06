import React, {useState} from "react"
import Data from "./Components/Data"
import List from "./Components/List"

function App() {
  const [people, setPeople] = useState(Data)

  return (
    <div className="container">
     <h3>{people.length} Students</h3>
     <List people={people}/>
     <button onClick={()=> setPeople([])}>Clear All</button>
    </div>
  )
}

export default App
