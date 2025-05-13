import { useEffect, useState } from 'react'
import './App.css'
import HeroSection from './components/hero'
import Nav from './components/nav'
import { setCoinLs, verifyCoinLs } from './utilities/localStorage';
import AllPlayerContainer from './components/allPlayerContainer';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [freeCoin, setFreeCoin] = useState(0);
  useEffect(() => {
    const finalCoin = verifyCoinLs();
    setFreeCoin(finalCoin)
  }, [])

  function addCredit() {
    const coin = 1500000;

    if (freeCoin == 0) {
      toast.info('Coin Added');
      setCoinLs(coin)
      const finalCoin = verifyCoinLs();
      setFreeCoin(finalCoin)
    }
    else {
      toast.warning('Coin Already Added');
    }


  }

  return (
    <>
      <nav>
        <Nav freeCoin={freeCoin}></Nav>
      </nav>

      <header className='container mx-auto p-2 lg:mt-6'>
        <HeroSection addCredit={addCredit} ></HeroSection>
      </header>
      <main className='container mx-auto p-2 lg:mt-6' >
        <AllPlayerContainer></AllPlayerContainer>
      </main>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
