import { useState } from 'react'

import './App.css'
import ToDoInput from './components/ToDoInput'
import { ToDoType } from './Types'
import ToDoOutput from './components/ToDoOutput'

function App() {
  const [todos, setTodos] = useState<ToDoType[]>([])

  const getToDo = (value:ToDoType)=> {
setTodos(prev=> [...prev, value])
  }
 
  const clearCompleted = ()=> {
    setTodos(prev=> prev.filter(item=> item.active === true))
  }

  const setCompleted = (id:number)=> {
    setTodos(prev=> prev.map(item=> item.id === id ? {...item  , active: !item.active } : item ))
  }
  const remove = (id:number) => {
    setTodos(prev=> prev.filter(item=> item.id !== id))
  }

  return (
    <div className='main flex flex-col'>
     <div className='top-section h-[35%] flex flex-col justify-center items-center'>
      <div className='flex justify-between w-[350px] lg:w-[550px] p-3 mb-3'>
        <h1 className='font-bold text-Light-Grayish-Blue text-4xl tracking-[10px]'>TODO</h1>
        <button></button>
        </div>
        <ToDoInput getToDo={getToDo}/>
     </div>
<div className='h-[65%] bg-Very-Dark-Blue relative flex justify-center items-start'>
<ToDoOutput items={todos} clearCompleted={clearCompleted} setCompleted={setCompleted} remove={remove}/>
</div>
    </div>
  )
}

export default App
