import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './section/Footer';

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
