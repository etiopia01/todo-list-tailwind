import { ToDoType } from "../Types";

export default function ToDo({todo, setCompleted, remove}:{todo:ToDoType, setCompleted:(id:number)=>void, remove:(id:number)=>void}) {

    const textClass = todo.active? "active" : "completed" 
    const buttonClass = todo.active? "active" : "button-completed"
    
    return (
        <div className="bg-Very-Dark-Desaturated-Blue flex justify-between items-center gap-3 p-3 rounded-sm w-[350px] lg:w-[550px] max-h-fit text-Light-Grayish-Blue border-b border-b-Very-Dark-Grayish-Blue">
            <button className= {`h-4 w-4 min-w-[16px] rounded-full border border-solid border-Dark-Grayish-Blue active:bg-Light-Grayish-Blue ${buttonClass}`} onClick={()=>setCompleted(todo.id)}></button>
            <div className={`${textClass} break-normal ml-4`}>{todo.title}</div>
            <button onClick={()=>remove(todo.id)}>X</button>
        </div>
    )
}