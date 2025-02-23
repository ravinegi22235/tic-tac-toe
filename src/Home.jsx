import React from 'react'
import tic from "./assets/tic.jpeg"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-screen bg-slate-500 flex items-center justify-center w-screen m-0 p-0'
    style={{ backgroundImage: `url(${tic})`, backgroundSize: "cover", backgroundPosition: "center" }}>
           
            <div className='w-full max-w-[400px] mx-5 backdrop:blur-2xl h-full'>
        <Link to={"tic"}>
              <button className=' text-5xl w-full py-8  text-white border bg-green-700  rounded-xl hover:bg-green-800 hover:text-white  transition-colors duration-200' > Start Game</button>
        </Link>  
            </div>

        </div>
  )
}

export default Home
