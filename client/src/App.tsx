
import './App.css'
import Footer from './components/Footer'

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Popular from './components/Popular'

function App() {


  return (
    <main className='bg-black text-white'>

      {/* Navbar */}
      <Navbar/>

      {/* Hero */}
      <Hero/>

      {/* Popular items */}
      <Popular/>

      {/* Footer */}
      <Footer/>
    </main>
  )
}

export default App
