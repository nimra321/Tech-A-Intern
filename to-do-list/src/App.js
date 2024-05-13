
import './App.css';
import Footer from './component/footer/footer';
import Home from './component/home/home';
import Navbar from './component/navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Todo from './component/todo/todo';
import About from './component/about/about';
import Signup from './component/signup/signup';
import Singin from './component/signup/singin';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={ <Home/>} />
          <Route path='/about' element={ <About/>} />
          <Route path='/todo' element={ <Todo /> } />
          <Route path='/signup' element={ <Signup/>} />
          <Route path='/signin' element={ <Singin />} />          
        </Routes>
      </Router>
      
      
      <Footer />
    </div>
  );
}

export default App;
