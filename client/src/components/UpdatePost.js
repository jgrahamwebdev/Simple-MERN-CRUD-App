
import { Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdatePost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState([])
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios
            .get(`/posts/${id}`)
            .then((res) => {
                console.log(res.data);
                setPost(res.data)
                setTitle(res.data.title);
                setDescription(res.data.description);
            })
            .catch((err) => console.log(err));

    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`/posts/${id}`, { 
                title, 
                description,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/"); 
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deletePost = (id) => {
        axios.delete(`/delete/${id}`).then((res) => console.log(res)).catch((err) => console.log(err))
        navigate("/"); 
    }
    
    return (
        <div className='w-full h-screen flex items-center justify-center flex-col'>
            <div className='w-1/2'>
            <div className='w-full flex items-center justify-between'>
                <h1>Note</h1>
                <Link to='/'><Button>Go Back Home</Button></Link>
            </div>
            <Form className='w-full border-4 border-black p-4 my-4' onSubmit={submitHandler}>
                <Form.Group className='mb-4'>
                    <Form.Label>Note Title:</Form.Label>
                    <Form.Control name='title' value={title} placeholder='Note Title' onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group className='mb-4'>
                    <Form.Label>Note Body:</Form.Label>
                    <Form.Control name='description' value={description} placeholder='Note Body' onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
            </Form>
                <Button className='mr-4' variant='success' onClick={submitHandler}>Edit Note</Button>
                <Button variant='danger' onClick={() => deletePost(post._id)}>Delete Note</Button>
            </div>
        </div>
    )
}
export default UpdatePost;
