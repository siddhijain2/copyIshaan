import './App.css';
import styles from "./style";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
  
      <div className="bg-primary w-full overflow-hidden">
      <div className={` ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      <div className={`bg-primary w-[100%] ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;

