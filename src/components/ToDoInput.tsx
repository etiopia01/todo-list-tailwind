import { useState } from "react"
import { ToDoType } from "../Types"

export default function ToDoInput({getToDo}:{getToDo:(value:ToDoType)=> void}) {
    const [todo, setTodo] = useState<ToDoType>({title: "", active:true, id:0})

    const handleClick= ()=> {
        getToDo(todo)
        setTodo({title: "", active:true, id:0})
    } 

    return (
        <div className="bg-Very-Dark-Desaturated-Blue flex justify-start items-center gap-3 p-3 rounded-md h-[55px] w-[350px] lg:w-[550px] overflow-hidden">
            <button className="h-4 w-4 rounded-full border border-solid border-Dark-Grayish-Blue active:bg-Light-Grayish-Blue" onClick={handleClick}></button>
        <input className="bg-Very-Dark-Desaturated-Blue w-full outline-none p-1 text-Light-Grayish-Blue" type="text" value={todo.title} onChange={(e)=>setTodo({title:e.target.value, active:true, id:Math.random()})}/>
        </div>
    )
}