import { useEffect, useState } from 'react'
import './App.css'
import HeroSection from './components/hero'
import Nav from './components/nav'
import { setCoinLs, verifyCoinLs } from './utilities/localStorage';
import AllPlayerContainer from './components/allPlayerContainer';
import { ToastContainer, toast } from 'react-toastify';
import SubToNewsLetterSec from './components/subToNewsLetterSec';


function App() {
  const [freeCoin, setFreeCoin] = useState(0);
  useEffect(() => {
    const finalCoin = verifyCoinLs();
    setFreeCoin(finalCoin)
  }, [])

  function addCredit() {
    const coin = 2000000;

    if (freeCoin == 0) {
      toast.success('Congratulations! You Got Free Coins', {
        position: 'top-center'
      });
      setCoinLs(coin)
      const finalCoin = verifyCoinLs();
      setFreeCoin(finalCoin)
    }
    else {
      toast.warning('Reset to Add Free Coin Again', {
        position: 'top-center'
      });
    }


  }

  return (
    <>

      <nav className='sticky top-0 z-50 '>
        <Nav freeCoin={freeCoin}></Nav>
      </nav>

      <header className='container mx-auto p-2 lg:mt-6'>
        <HeroSection addCredit={addCredit} ></HeroSection>
      </header>
      <main className='container mx-auto p-2 lg:mt-6' >
        <AllPlayerContainer freeCoin={freeCoin} setFreeCoin={setFreeCoin}></AllPlayerContainer>
        <SubToNewsLetterSec></SubToNewsLetterSec>
        <ToastContainer></ToastContainer>
      </main>


    </>
  )
}

export default App
