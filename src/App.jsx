
import Button from "./component/Button"
import Navbar from "./component/Navbar"
import { Profile } from "./component/Profile"


function App() {
  const btn = {
    color: "red",
    backgroundColor: "yellow",
  }
  return (

    <>
      <Navbar />
      <div>
        <h1>Hello world</h1>
        <Button text={'log In'} colorVariable={'yellow'} />
        <button style={btn}
        > hello world</button><br />
        <button style={{
          color: "yellow",
          backgroundColor: "blue"
        }}>Inline css </button>
        <Profile />



      </div>
    </>


  )
}

export default App