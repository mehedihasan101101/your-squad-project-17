import './App.css'
import HeroSection from './components/hero'
import Menu from './components/nav'

function App() {


  return (
    <>
      <Menu></Menu>
      <header className='container mx-auto p-2 lg:mt-6'>
        <HeroSection></HeroSection>
      </header>

    </>
  )
}

export default App
