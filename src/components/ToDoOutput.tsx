import { useEffect, useState } from "react";
import { ToDoType } from "../Types";
import ToDo from "./ToDo";
import FilterBar from "./FilterBar";

export default function ToDoOutput({items, clearCompleted, setCompleted, remove}:{items:ToDoType[], clearCompleted:()=> void, setCompleted:(id:number)=>void, remove:(id:number)=>void}) {

    const [currTodos, setCurrTodos] = useState(items)
    useEffect(()=> {
        setCurrTodos(items)
    },[items])

    function filter(value:string) {
        switch (value) {
            case "all" : setCurrTodos(items)
            break;
            case "active" : setCurrTodos(items.filter(item=> item.active === true))
            break;
            case "completed" : setCurrTodos(items.filter(item=> item.active === false))
            break;
        }
    }

    
    return (
        <div className=" -top-10 absolute flex flex-col items-center">
        <div className="relative rounded-lg overflow-x-hidden overflow-y-auto max-h-[400px] ">
           {currTodos.map(item=> <ToDo todo={item} setCompleted={setCompleted} remove={remove}/>)}


        </div>
         <FilterBar numItems={currTodos.length} filter={filter} clearCompleted={clearCompleted}/>
</div>
    )
}