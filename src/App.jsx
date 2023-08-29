import React from 'react'
import { useState } from 'react'
import Ingridents from './Components/Ingridents'
import Instructions from './Components/Instructions'
import Notes from './Components/Notes'
import Images from './Components/Images'

/*
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
*/
import './App.css'

function App() {
 
  /*
  const [count, setCount] = useState(0)
  */

  return (
    <>
      <div className='p-4 sm:p-6 md:p-8 lg:p-10'>

     <h1 className='text-4xl sm:text-6xl bg-purple-200 p-2 sm:p-4'> 
                  My Nigerian Recipe          
     </h1>
      <p className="mt-4 sm:mt-6">
          <h2 className='text-xl sm:text-3xl inline-block font-bold border-b border-t border-l border-r'>
           My favourite Meal is Pounded Yam
          </h2>
        </p> 
        <p className="mt-3 sm:mt-5 text-left font-bold text-lg sm:text-2xl text-blue-500">
          How to make one ?
          </p> 
        <div className>
         <Ingridents/> 
       
        </div>
     
         <Instructions/>
         <Notes/>  
         
       {/*
        <a href="https://google.com" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
  */}
      </div>

      {/*
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
*/}
    </>
  )
}

export default App
