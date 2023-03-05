import { useState } from 'react'


import { close, Logo, menu } from '../assets'
import { navLinks } from '../constants'
import { getToken } from '../services/LocalStorageService';
// import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [active, setActive] = useState('Home')
  const [toggle, setToggle] = useState(false)


  const { access_token } = getToken()


  return (
    <nav className="fixed top-0 z-50 bg-primary w-full flex pb-2 p-4 justify-between shadow-sm items-center navbar">
      <img src={Logo} alt="logo" className=" h-[80px]" />


      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] transition duration-150 border-b-2 border-transparent hover:border-Tomato ${
              active === nav.title ? 'text-Tomato' : 'text-BlackOlive'
            } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={nav.link}>{nav.title}</a>
          </li>
        ))}
      </ul>


      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className=" h-[40px] object-contain"
          onClick={() => setToggle(!toggle)}
        />


        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 bg-Tomato text-black absolute top-20 right-0 mx-4 mt-6 min-w-[90%] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? 'text-white' : 'text-dimWhite'
                } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={nav.link}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    // {access_token ? <Button component={NavLink} to='/dashboard' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Dashboard</Button> : <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Login/Registration</Button>}
  )
}


export default Navbar


//           <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Home</Button>
//           <Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Contact</Button>





