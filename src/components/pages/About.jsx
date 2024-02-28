import React, { useContext, useState } from 'react'
import { Informations } from '../../App.js'

const About = () => {
  const [showCardEl, setShowCardEl] = useState(false)
  const { name, age, gender, Card } = useContext(Informations)
  console.log(name, age, gender, Card)

  const showCard = () => {
    setShowCardEl(true) // Show the card

    setTimeout(() => {
      setShowCardEl(false) // Hide the card after 1 second
    }, 1000)
  }

  return (
    <>
      <div className="flex flex-col text-center items-center justify-center h-[100vh] w-[100vw]">
        <h1>About</h1>
        <button onClick={showCard}>show popUp card</button>
      </div>

      {showCardEl && <Card name={name} age={age} gender={gender} />}
    </>
  )
}

export default About
