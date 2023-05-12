import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter } from 'react-router-dom';
import Hsection from './components/HeroSection';
import CrossProduct from './components/CrossProduct';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <>
    <BrowserRouter>
      
      <NavigationBar/>
      <Hsection/>

      <CrossProduct/>
      <About/>
      <Footer/>

    </BrowserRouter>
    </>
  );
}

export default App;
