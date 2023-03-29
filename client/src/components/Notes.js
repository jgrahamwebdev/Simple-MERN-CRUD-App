
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Notes = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('/posts')
        .then((res) => { 
            console.log(res)
            setPosts(res.data)
        })
        .catch((err) => console.log(err))

    }, [])

    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-full my-8'>
                {posts.map((post) => {
                    return(
                        <div key={post._id} className='w-full flex items-center justify-between'>
                            <div>
                                <h1>{post.title}</h1>
                                <p>{post.description}</p>
                            </div>
                            <Link to={`/post/update/${post._id}`}><Button className='mr-4' variant='warning'>Edit</Button></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Notes
