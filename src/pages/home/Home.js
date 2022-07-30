import { useState, useEffect } from "react"
import Onboarding from "../../components/onboarding/Onboarding"
import Menu from "../../components/menu/Home"
import Header from "../../components/header/Header"

const Home = ()=>{
    const [isOpen, setIsOpen] = useState(true)

    useEffect(()=>{
      function checkUserData() {
        const item = localStorage.getItem('userId')
        
        if (item) {
          setIsOpen(false)
        }else{
          setIsOpen(true)
        }
      }
      checkUserData()
      window.addEventListener('storage', checkUserData)
  
      return () => {
        window.removeEventListener('storage', checkUserData)
      }
    },[])

    return(
        <div>
          <Header/>
            {
                isOpen && <Onboarding setIsOpen={setIsOpen}/>
            }
            {
                !isOpen && <Menu />
            }
        </div>
    )
}

export default Home;