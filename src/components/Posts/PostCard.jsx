import { Link,useOutletContext,useNavigate } from "react-router-dom";

export default function PostCard ({post}){
    const [posts,setPosts,token,setToken,edit,setEdit,users,setUsers] = useOutletContext();
    const thisAuthor = users.filter((user)=>user.id == post.userId)[0];
    const dateTime = new Date((Date.parse(post.createdAt)));
    const dayMonthYear = dateTime.getDay()+"/"+dateTime.getDate()+"/"+dateTime.getFullYear();
    const value = crypto.randomUUID()

    if(post.published == true){
        return(
        <li key={value} className="published">
            <Link to={`../postpage/${post.id}`} >
                <div className="title">Title: {post.title}</div>
                <div className="author">Author: {thisAuthor.first_name} {thisAuthor.last_name}</div>
                <div className="date">Created: {dayMonthYear}</div>
                <div className="commentCount">{post.comments.length} comments</div>

            </Link>
        </li>
        )
    }
    return 
}


