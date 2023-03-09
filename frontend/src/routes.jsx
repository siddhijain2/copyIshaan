import './App.css'
import React from 'react'
import styles from './style'
import { Route, Routes } from 'react-router-dom'
import {
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
        <Route exact path="/enuncify" element={<Enuncify />} />
        <Route exact path="/enuncify/result" element={<EnuncifyResult />} />
        <Route exact path="/enuncify/theme" element={<EnuncifyTheme />} />
        <Route exact path="/kalamkaari/dictation/beginner" element={<Kalamkaari theme={'dictation'} level={'beginner'} />} />
        <Route exact path="/kalamkaari/dictation/advance" element={<Kalamkaari theme={'dictation'} level={'advance'} />} />
        <Route exact path="/kalamkaari/trace/beginner" element={<Kalamkaari theme={'trace'} level={'beginner'} />} />
        <Route exact path="/kalamkaari/trace/advance" element={<Kalamkaari theme={'trace'} level={'advance'} />} />
        <Route exact path="/kalamkaari/result" element={<KalamkaariResult />} />
        <Route exact path="/kalamkaari" element={<KalamkaariLevel />} />
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
