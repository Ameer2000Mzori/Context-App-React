import React, { useContext, useState } from 'react'
import { Informations } from '../../App.js'

const Home = () => {
  const [showCardEl, setShowCardEl] = useState(false)
  const { name, age, gender, Card } = useContext(Informations)

  const showCard = () => {
    setShowCardEl(true)

    setTimeout(() => {
      setShowCardEl(false)
    }, 1000)
  }

  return (
    <>
      <div className="flex flex-col text-center items-center justify-center h-[100vh] w-[100vw]">
        <h1>home</h1>
        <button onClick={showCard}>show popUp card</button>
      </div>

      {showCardEl && (
        <Card place={'in home'} who={'we dont know'} gender={'female'} />
      )}
    </>
  )
}

export default Home
