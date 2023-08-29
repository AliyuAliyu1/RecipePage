import React from 'react'
import { useState } from 'react'
import Ingridents from './Components/Ingridents'
import Instructions from './Components/Instructions'
import Notes from './Components/Notes'

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
      <div>

     <h1 className='text-8xl  bg-purple-200'> 
                  My Nigerian Recipe          
     </h1>
      <p className="mt-10">
          <h2 className='text-3xl inline-block font-bold border-b border-t border-l border-r'>
           My favourite Meal is Pounded Yam
          </h2>
        </p> 
        <p className="mt-5 text-left font-bold text-2xl text-blue-500">
          How to make one ?
          </p> 
         <Ingridents/>
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
