import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainRoutes from './routes'
import { LogIn, SignIn, Enuncify,Home } from './pages'

function App() {
  return (
    <Router>
      <div className="bg-primary w-full overflow-hidden font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<MainRoutes />} />
        <Route path="/enuncify" element={<Enuncify/>}/>
      </Routes>
      </div>
    </Router>
  )
}

export default App
