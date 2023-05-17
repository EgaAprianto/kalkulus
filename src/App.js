import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter } from "react-router-dom";
import Hsection from "./components/HeroSection";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Simpan1 from "./components/Simpanan/Simpan1";
import Simpan2 from "./components/Simpanan/Simpan2";
import Simpan3 from "./components/Simpanan/Simpan3";
import Simpan4 from "./components/Simpanan/Simpan4";
import Simpan5 from "./components/Simpanan/Simpan5";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavigationBar />
                <Hsection />
                <About />
                <Footer />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/simpan2"
            element={
              <>
                <NavigationBar />
                <Simpan1 />
                <About />
                <Footer />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/simpan3"
            element={
              <>
                <NavigationBar />
                <Simpan2 />
                <About />
                <Footer />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/simpan4"
            element={
              <>
                <NavigationBar />
                <Simpan3 />
                <About />
                <Footer />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/simpan5"
            element={
              <>
                <NavigationBar />
                <Simpan4 />
                <About />
                <Footer />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/simpan6"
            element={
              <>
                <NavigationBar />
                <Simpan5 />
                <About />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
