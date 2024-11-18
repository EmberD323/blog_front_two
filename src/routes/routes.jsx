import App from '../App.jsx';
import PostPage from '../components/Posts/Postpage.jsx';
import HomePage from '../components/Homepage.jsx';
import Signup from '../components/Users/Signup.jsx';
import Login from '../components/Users/Login.jsx';
import NewComment from '../components/Comments/NewComment.jsx';


const routes = [
  {
    path: "/",
    element: <App />,
    children:[
      { index: true, element: <HomePage /> },
      {path: "homepage",element: <HomePage/>},
      {path: "signup",element: <Signup/>},
      {path: "login",element: <Login/>},
      {path: "newcomment",element: <NewComment/>},
      {path: "postpage/:id",element: <PostPage />},      
    ]
  },
];
export default routes;