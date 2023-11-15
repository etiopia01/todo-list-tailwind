export default function FilterBar({filter, numItems, clearCompleted}: {filter: (value:string) => void, numItems:number, clearCompleted:()=>void}) {
    return (
<nav className="bg-Very-Dark-Desaturated-Blue flex justify-between items-center gap-3 py-3 px-2 lg:px-4 rounded-sm w-[350px] lg:w-[550px] h-[50px] absolute -bottom-[47px] ">
<p className="text-xs text-Very-Dark-Grayish-Blue">{numItems} items left</p>
<div className="flex gap-3 grow-1 ml-8">
    <button className="text-xs lg:text-sm text-Bright-Blue hover:text-Light-hover-Blue" onClick={()=>filter("all")} >All</button>
    <button className="text-xs lg:text-sm text-Dark-Grayish-Blue hover:text-Light-hover-Blue" onClick={()=>filter("active")}>Active</button>
    <button className="text-xs lg:text-sm text-Dark-Grayish-Blue hover:text-Light-hover-Blue" onClick={()=>filter("completed")}>Completed</button>
</div>
<button className="text-xs lg:text-sm w-14 lg:w-auto text-Very-Dark-Grayish-Blue hover:text-Light-hover-Blue" onClick={clearCompleted}>Clear completed</button>
</nav>
    )
}