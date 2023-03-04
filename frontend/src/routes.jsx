import './App.css'
import React from 'react'
import styles from './style'
import { Route, Routes } from 'react-router-dom'
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
  Profile,
} from './pages'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function MainRoutes() {
  return (
    <div>
      <React.Fragment />
      <div className={` ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/enuncify" element={<Enuncify />} />
        <Route exact path="/enuncify/result" element={<EnuncifyResult />} />
        <Route exact path="/enuncify/theme" element={<EnuncifyTheme />} />
        <Route exact path="/kalamkaari" element={<Kalamkaari />} />
        <Route exact path="/kalamkaari/result" element={<KalamkaariResult />} />
        <Route exact path="/kalamkaari/level" element={<KalamkaariLevel />} />
        <Route exact path="/speakwise" element={<Speakwise />} />
        <Route exact path="/speakwise/result" element={<SpeakwiseResult />} />
        <Route exact path="/speakwise/theme" element={<SpeakwiseTheme />} />
        <Route exact path="/user" element={<Profile />} />
      </Routes>
      <div className={`bg-Tomato w-[100%] ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
      <React.Fragment />
    </div>
  )
}

export default MainRoutes
