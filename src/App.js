import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
    </Routes>
  );
}

export default App;
