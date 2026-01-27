
import { Route, Routes } from "react-router"
import Button from "./component/Button"
import Navbar from "./component/Navbar"
import { Profile } from "./component/Profile"
import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact"
import { Faq } from "./Pages/Faq"
import { User } from "./Pages/User"
import { Login } from "./Pages/Login"


function App() {
  // const btn = {
  //   color: "red",
  //   backgroundColor: "yellow",
  // }
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>





      {/* <Navbar />
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



      </div> */}
    </>


  )
}

export default App