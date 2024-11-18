import { useOutletContext } from "react-router-dom";

export default function CommentCard ({comment,post}){
    const [posts,setPosts,token,setToken,edit,setEdit,users,setUsers] = useOutletContext();
    const dateTime = new Date((Date.parse(comment.createdAt)))
    const dayMonthYear = dateTime.getDay()+"/"+dateTime.getDate()+"/"+dateTime.getFullYear();
    const time = dateTime.getHours()+":"+dateTime.getMinutes()
    const thisAuthor = users.filter((user)=>user.id == post.userId)[0];
    
    return (
        <li key={crypto.randomUUID()} className="commentCard">
            <div className="text"> {comment.text}</div>
            <div className="authorAndDate">
                <div className="author">{thisAuthor.first_name} {thisAuthor.last_name}</div>
                <div className="date"> {dayMonthYear} @ {time}</div>
            </div>
        </li>
    )
}


