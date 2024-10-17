import { useNavigate, useParams } from "react-router-dom"
import useFetch from '../hooks/useFetch';
import { useEffect } from "react";

function BlogDetail(){
    let params = useParams();
    let navigate = useNavigate();
    let url = 'http://localhost:3001/blogs/'+params.id;
    let { data : blog , loading , error } = useFetch(url);
    useEffect(()=>{
        if(error){
            setTimeout(()=>{
                navigate('/')
            },2000);
        }
    },[error,navigate])
    return (
        <div>
        {error && <div>{error}</div>}
        {loading && <div>loading..</div>}
        {blog && 
        <div> 
        <h2>{blog.title}</h2>
        <p>posted by - {blog.author}</p>
        <p>{blog.body}</p>
    </div>
        }
        </div>
    ) 
}
export default BlogDetail;