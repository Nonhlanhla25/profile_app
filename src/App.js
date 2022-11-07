import './App.scss'
import Layout from './components/Layout'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import SovTech from './components/SovTech'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />}/>
      <Route path="sovtech" element={<SovTech />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
