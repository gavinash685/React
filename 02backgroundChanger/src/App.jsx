import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('red');

  return (
    <div className="w-full h-screen duration-200"style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-4 rounded-3xl'>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"yellow"}}
          onClick={ ()=> setColor('yellow') }
          >
            Yellow
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}
          onClick={ ()=> setColor('green') }
          >
            Green
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}} 
          onClick={ ()=> setColor('blue') }
          >
            Blue
            </button>
        </div>
      </div>
    </div>
    
  )
}

export default App
