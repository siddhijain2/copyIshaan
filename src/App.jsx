import './App.css'
import styles from './style'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
  Home,
  Enuncify,
  EnuncifyResult,
  EnuncifyTheme,
  Kalamkaari,
  KalamkaariResult,
  KalamkaariLevel,
  Speakwise,
  SpeakwiseResult,
  SpeakwiseTheme,
  LogIn,
  SignIn,
  Profile,
} from './pages'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/enunsify" element={<Enuncify />} />
          <Route exact path="/enunsify/result" element={<EnuncifyResult />} />
          <Route exact path="/enunsify/theme" element={<EnuncifyTheme />} />
          <Route exact path="/kalamkaari" element={<Kalamkaari />} />
          <Route
            exact
            path="/kalamkaari/result"
            element={<KalamkaariResult />}
          />
          <Route exact path="/kalamkaari/level" element={<KalamkaariLevel />} />
          <Route exact path="/speakwise" element={<Speakwise />} />
          <Route exact path="/speakwise/result" element={<SpeakwiseResult />} />
          <Route exact path="/speakwise/theme" element={<SpeakwiseTheme />} />
          <Route exact path="/logIn" element={<LogIn />} />
          <Route exact path="/signIn" element={<SignIn />} />
          <Route exact path="/user" element={<Profile />} />
        </Routes>
        <div className={`bg-Tomato w-[100%] ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
