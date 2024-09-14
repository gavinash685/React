import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <div  className="w-full max-w-xs bg-gray-300">
     <h1 className='text-3xl'>Redux tool kit learning</h1>
     <AddTodo />
     <Todos />
    </div>
  )
}

export default App
