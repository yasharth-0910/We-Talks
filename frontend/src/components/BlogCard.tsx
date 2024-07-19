import { Link } from "react-router-dom";

interface BlogCardProps{
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,
    id
}: BlogCardProps) => {
    return (
        <Link to= {`/blog/${id}`}>
            <div className="p-4 border-b border-slate-200 pb-4 cursor-pointer">
                <div className="flex pt-2 ">
                    <div className="flex justify-center flex-col">
                        <Avatar size={5} name={authorName} />
                    </div>
                    <div className="font-light pl-3 pr-1 flex justify-center flex-col">{authorName}</div> 🌟 
                    <div className="font-normal	text-slate-400 pl-1 flex justify-center flex-col">{publishedDate}</div>
                </div>
                <div className="text-xl font-semibold pt-2">
                    {title}
                </div>
                <div className="text-md font-thin ">
                    {content.slice(0, 100) + (content.length > 100 ? "..." : "")}
                </div>
                <div className="text-slate-400 text-sm ">
                    {content.length > 100 && <button>Read More</button>}
                </div>
                <div className="text-slate-400 text-sm font-thin pt-4" >
                    {`${Math.ceil(content.length / 100)} min read`}
                </div>
            </div>
        </Link>
    )
}


function Avatar({name, size = 5} : {name: string, size: number}) {
    return (
        <div className={`relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className={`text-xs font-semibold	 text-gray-600 dark:text-gray-300`}>{name[0].toUpperCase() + name[1] }</span>
        </div>
    )
}