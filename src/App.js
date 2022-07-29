import logo from './clearthoughts-logo2bg.png';
import './App.css';
import Onboarding from './components/onboarding/Onboarding';
import { useEffect, useState } from 'react';

function App() {
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
  return (
    <div className="App">
      <img src={logo} className='logo'/>
      {
        isOpen && <Onboarding setIsOpen={setIsOpen}/>
      }
    </div>
  );
}

export default App;