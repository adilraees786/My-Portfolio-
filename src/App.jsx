import  About  from "./components/About";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Sociallinks from "./components/Sociallinks";



export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Sociallinks/>
      <Portfolio/>

      
    </div>

  )
}