import { useEffect, useState } from 'react'
import './App.css'
import HeroSection from './components/hero'
import Nav from './components/nav'
import { setCoinLs, verifyCoinLs } from './utilities/localStorage';
import AllPlayerContainer from './components/allPlayerContainer';

function App() {
  const [freeCoin, setFreeCoin] = useState(0);
  useEffect(() => {
    const finalCoin = verifyCoinLs();
    setFreeCoin(finalCoin)
  }, [])

  function addCredit() {
    const coin = 1500000;

    if (freeCoin == 0) {
      setCoinLs(coin)
      const finalCoin = verifyCoinLs();
      setFreeCoin(finalCoin)
    }
    else (
      console.log("no")
    )
  }

  return (
    <>
      <Nav freeCoin={freeCoin}></Nav>
      <header className='container mx-auto p-2 lg:mt-6'>
        <HeroSection addCredit={addCredit} ></HeroSection>
      </header>
      <main>
        <AllPlayerContainer></AllPlayerContainer>
      </main>

    </>
  )
}

export default App
