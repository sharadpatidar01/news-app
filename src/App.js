
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Form from './components/form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/form" element={<Form/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
