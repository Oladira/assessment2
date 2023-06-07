import "./Component/User.css"
import UserInput from "./Component/UserInput"
import UserOutput from "./Component/UserOutput"

const App = () => {
  
  return (
    <div className="container">
      <UserInput />
      <UserOutput 
      p1="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, facere!" 
      p2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, facere!" />
      <UserOutput 
      p1="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, facere!" 
      p2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, facere!" />
      <UserOutput 
      p1="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, facere!" 
      p2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, facere!" />
      
    </div>
    
  )
}

export default App