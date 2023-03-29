
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Message from '../components/Message'

const CreatePost = () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    const [post, setPost] = useState({
        title: "",
        description: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target

        setPost((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };

    const formValidator = () => {
        const isValid = true
        if (post.title.length < 3) {
            return false
        }
        if (post.description.length > 255) {
            return false
        }
        return isValid
    }

    const handleClick = (e) => {
        e.preventDefault();

        if(formValidator()) {
        axios.post("/create", post)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))

        navigate(`/`)
        } else {
            setErrors({
                title: "Title must contain 2 characters",
                description: "Body must contain max of 255 characters"
            })
        }

    }

    return (
        <div className='w-full h-screen flex items-center justify-center flex-col'>
            <div className='w-1/2'>
            <div className='w-full flex items-center justify-between'>
            <h1>Write Notes</h1>
            <Link to='/'><Button>Go Back Home</Button></Link>
            </div>
            <h4 className='font-light'>Write a new note!</h4>
            <Form className='w-full my-4 border-4 border-black p-4'>
                {errors.title ? <Message variant='danger'>{errors.title}</Message> : ""}
                <Form.Group className='mb-4'>
                    <Form.Label className='font-semibold'>Note Title: </Form.Label>
                    <Form.Control name='title' value={post.title} placeholder='Note Title' onChange={handleChange}/>
                </Form.Group>
                {errors.description ? <Message variant='danger'>{errors.description}</Message> : ""}
                <Form.Group className='mb-4'>
                    <Form.Label className='font-semibold'>Note Body:</Form.Label>
                    <Form.Control as="textarea" rows={8} name='description' value={post.description} placeholder='Note Body' onChange={handleChange}/>
                </Form.Group>
                <Button variant='success' onClick={handleClick}>Write this note!</Button>
            </Form>
            </div>
        </div>
    )
}

export default CreatePost
