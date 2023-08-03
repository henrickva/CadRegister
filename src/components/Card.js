export default function Card({children, title}){
    return (
        <div className="bg-white rounded-md p-8 flex flex-col justify-center items-center">
            <h1 className="font-bold text-xl">
                {title}
            </h1>
            {children}
        </div>
    )
}