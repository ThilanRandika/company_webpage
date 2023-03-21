import {Routes,Route} from 'react-router-dom'
import { NavBar } from './components/NavBar';
import { About } from './pages/About';
import { ContactUs } from './pages/ContactUs';
import {Home} from "./pages/Home"
import { Projects } from './pages/Projects';
import './App.css';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/contact' element={<ContactUs/>}></Route>
         <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
