import { useState } from 'react'
import Main from './components/Main'
import Sidenav from './components/Sidenav'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <Sidenav></Sidenav>
    <Main></Main>   
    <Projects></Projects> 
    <Work></Work>
   
    <Contact></Contact>
    <Footer></Footer>
    
    </>
  )
}

export default App
