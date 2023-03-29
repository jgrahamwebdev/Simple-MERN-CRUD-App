
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Notes from '../components/Notes';


const HomeScreen = () => {

    return (
        <div className='w-full h-screen flex items-center justify-center flex-col'>
            <div className='w-1/2 flex items-start justify-center flex-col'>
                <h1 className='mb-4'>Note Wall</h1>
                <h4 className='font-light mb-2'>Leave a note</h4>
                <Notes />
                <Link to='/create'><Button>Write a note</Button></Link>
            </div>
        </div>
    )
}

export default HomeScreen