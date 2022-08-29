import './App.css';
import Header from './components/Header/Header';
import Home from './Pages/Home'
import Experience from './Pages/Experience'
import Projects from './Pages/Projects'
import Footer from './components/Footer/Footer';
import { Route, Routes} from "react-router-dom"
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
