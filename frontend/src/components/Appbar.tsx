import { Link } from "react-router-dom"

function Avatar({name, size = 5} : {name: string, size: number}) {
    return (
        <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className={`text-lg font-semibold	 text-gray-600 dark:text-gray-300`}>{name[0].toUpperCase() + name[1] }</span>
        </div>
    )
}

export const Appbar = () => {
    return (
        <div className="border-b flex justify-between px-10 py-3" >
            <Link to= {"/blogs"} >
                <div className="text-xl curson-pointer">
                    JP Talks
                </div>
            </Link>
            
            <div className="">
                <Link to={"/publish"}>
                    <button type="button" className=" mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Publish a Blog</button>
                </Link>
                <Avatar size={10}  name="Yasharth" />
            </div>
        </div>
    )
}