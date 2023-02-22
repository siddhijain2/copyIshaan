import './App.css';
import styles from "./style";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import {Home,Enuncify,Kalamkaari,Speakwise} from './pages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
  
      <div className="bg-primary w-full overflow-hidden font-poppins">
      <div className={` ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Kalamkari" element={<Kalamkaari/>}/>
        <Route exact path="/Enunsify" element={<Enuncify/>}/>
        <Route exact path="/Speakwise" element={<Speakwise/>}/>
      </Routes>
      <div className={`bg-Tomato w-[100%] ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;

