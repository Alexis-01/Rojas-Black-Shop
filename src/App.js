import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import './app.css'
const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <ItemListConteiner 
      greeting='hola mundo'
      />

    </div>
  )
}

export default App