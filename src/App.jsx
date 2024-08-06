import React from 'react'
import ProductCategories from './components/footer/Footer'
import Main from './components/main/Main'
import Navbar from './components/navbar/Navbar'
function App() {
  return (
    <div className='container'>
        <Navbar/>
        <Main/>
        <ProductCategories/>
    </div>
  )
}

export default App