export default function FilterBar({filter, numItems, clearCompleted}: {filter: (value:string) => void, numItems:number, clearCompleted:()=>void}) {
    return (
<nav className="bg-Very-Dark-Desaturated-Blue flex justify-between items-center gap-3 p-3 rounded-sm w-[550px] h-[50px] absolute -bottom-[47px] ">
<p className="text-xs text-Very-Dark-Grayish-Blue">{numItems} items left</p>
<div className="flex gap-3 grow-1 ml-8">
    <button className="text-m text-Bright-Blue hover:text-Light-hover-Blue" onClick={()=>filter("all")} >All</button>
    <button className="text-m text-Dark-Grayish-Blue hover:text-Light-hover-Blue" onClick={()=>filter("active")}>Active</button>
    <button className="text-m text-Dark-Grayish-Blue hover:text-Light-hover-Blue" onClick={()=>filter("completed")}>Completed</button>
</div>
<button className="text-sm text-Very-Dark-Grayish-Blue hover:text-Light-hover-Blue" onClick={clearCompleted}>Clear completed</button>
</nav>
    )
}