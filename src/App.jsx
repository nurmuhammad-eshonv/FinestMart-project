import React from 'react'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import Navbar from './components/navbar/Navbar'
function App() {
  return (
    <div className='container'>
        <Navbar/>
        <Main/>
        {/* <Footer/>  */}
    </div>
  )
}

export default App