
export default function Button({children, props}){
    return (
        <button className="transition ease-in-out duration-500 bg-zinc-200 text-zinc-900 rounded p-2 mt-4 hover:text-zinc-200 hover:bg-zinc-900 " {...props}>
            {children}
        </button>
    )
}