import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar'
import Inicio from './Components/Inicio/Inicio'
import Peliculas from './Components/Peliculas/Peliculas'
import Error from './Components/Error/Error'

function App() {
  return (
    <>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Inicio />}></Route>
            <Route path='/peliculas' element={<Peliculas />}></Route>
            <Route path='*' element={<Error/>}></Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;
