import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <div className="App">
    <Navbar/>
    <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />}/>
      <Route path="projects" element={<Projects />} />
    </Routes>
    </main>
    {/* <footer className="footer">
          <p>Footer Content</p>
      </footer> */}
    </div>
    </>
  );
}

export default App;
