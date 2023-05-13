import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter } from 'react-router-dom';
import Hsection from './components/HeroSection';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/'element=
          {
            <>
              <NavigationBar/>
              <Hsection/> 
              <About/>
              <Footer/>
            </>
          } 
          />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;