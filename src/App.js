import { createContext } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import NotFound from './components/pages/NotFound.jsx'
import { getByDisplayValue } from '@testing-library/react'

export const Informations = createContext()

function Card({ name, age, gender }) {
  console.log('Card is being rendered')
  return (
    <div className=" absolute top-[50%] left-[50%] w-[300px] h-[400px] bg-blue-300 translate-x-[-50%] translate-y-[-50%]">
      <h1>this is text of using components inside of context</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
    </div>
  )
}

function App() {
  return (
    <>
      <Informations.Provider
        value={{ name: 'Ameer', age: 19, gender: 'male', Card }}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Informations.Provider>
    </>
  )
}

export default App
