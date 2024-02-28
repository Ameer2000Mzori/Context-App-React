import React, { useContext } from 'react'
import { Informations } from '../../App.js'

const Home = () => {
  const { name, age, gender, Card } = useContext(Informations)
  console.log(name, age, gender, Card)

  return (
    <>
      <div className="flex flex-col text-center items-center justify-center h-[100vh] w-[100vw]">
        Home
      </div>
      <Card />
    </>
  )
}

export default Home
