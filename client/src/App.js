import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/create'  element={<CreatePost />}/>
        <Route path='/post/update/:id'  element={<UpdatePost />}/>
        <Route exact path='/'  element={<HomeScreen />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
