import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Contact from './pages/ContactUs';
import Shope from './pages/Shope';
import Page from './pages/Page404';
import NavBar from './components/NavBar';
import Cart from './pages/Carts'
import Pay from './pages/Pay';

function App() {

  return (
    <>
      <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shope" element={<Shope />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/pages/Carts" element={<Cart />} />
            <Route path="/*" element={<Page />} />
          </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
      </div>

    </>
  )
}

export default App
