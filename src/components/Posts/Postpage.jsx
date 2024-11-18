import { useOutletContext,useParams,useNavigate } from "react-router-dom";
import CommentCards from "../Comments/CommentCards";
import NewComment from '../Comments/NewComment.jsx';
import Login from '../Users/Login.jsx';

export default function PostPage (){
    const [posts,setPosts,token,setToken,edit,setEdit,users,setUsers] = useOutletContext();
    const { id } = useParams();
    const thisPost = (posts.filter((post) => post.id == id))[0];
    const dateTime = new Date((Date.parse(thisPost.createdAt)))
    const dayMonthYear = dateTime.getDay()+"/"+dateTime.getDate()+"/"+dateTime.getFullYear();
    const time = dateTime.getHours()+":"+dateTime.getMinutes()
    const thisAuthor = users.filter((user)=>user.id == thisPost.userId)[0];
    const navigate = useNavigate()

    if(typeof token == "object"){
        return (
            <Login></Login>
        )
    }
    return (
        <div className="postpage">
            <div className="post">
                <div className="header">
                    <h2 className="title">{thisPost.title}</h2>
                </div>
                <div className="imgPlaceholder">Image Placeholder (300 x 300)</div>
                <div className="author">Author: {thisAuthor.first_name} {thisAuthor.last_name}</div>
                <div className="date">Created: {dayMonthYear} @ {time}</div>
                <div className="text">{thisPost.text}</div>
            </div>
            <div className="comments">
                <h2 className="title">Comments ({thisPost.comments.length}):</h2>
                <NewComment/>
                <CommentCards comments={thisPost.comments} post={thisPost}></CommentCards>
            </div>
        </div>
    )
}


