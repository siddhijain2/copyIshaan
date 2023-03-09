import { useState } from 'react'
import { close, Logo, menu, profileIcon } from '../assets'
import { navLinks } from '../constants'
import { getToken } from '../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../services/userAuthApi';

const NavbarHome = () => {
  const [active, setActive] = useState('Home')
  const [toggle, setToggle] = useState(false)

  const { access_token } = getToken();
  const user = useGetLoggedUserQuery(access_token)

  return (
    <nav className="fixed top-0 z-50 bg-primary w-full flex pb-2 p-4 justify-between shadow-sm items-center navbar">
      <img src={Logo} alt="logo" className=" h-[80px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`mr-10 font-poppins font-normal cursor-pointer text-[16px] transition duration-150 border-b-2 border-transparent hover:border-Tomato ${
              active === nav.title ? 'text-Tomato' : 'text-BlackOlive'}`}
            onClick={() => setActive(nav.title)}
            >
            <a href={nav.link}>{nav.title}</a>
          </li>
        ))}
        {user.data ?
          <li
            key = 'profile'
            className={`mr-5 font-poppins font-normal cursor-pointer text-[16px] transition duration-150 border-b-2 border-transparent hover:border-Tomato ${
            active === 'Profile' ? 'text-Tomato' : 'text-BlackOlive'
          }`}
          onClick={() => setActive('Profile')}
          >
          <div className='flex'>
          <img src={profileIcon} alt="logo" className=" h-8 w-8" />
          <a href='/' className="mt-1">Hi, { user.data.name }</a>
          </div>
          </li>
          :
          <li
            key = 'login'
            className={`mr-5 font-poppins font-normal cursor-pointer text-[16px] transition duration-150 border-b-2 border-transparent hover:border-Tomato ${
            active === 'Login' ? 'text-Tomato' : 'text-BlackOlive'
          }`}
          onClick={() => setActive('Login')}
          >
          <a href='/login'>Login</a>
        </li>}
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
                className={`mb-4 font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? 'text-white' : 'text-dimWhite'
                }`}
                onClick={() => setActive(nav.title)}>
                <a href={nav.link}>{nav.title}</a>
              </li>
            ))}
            {user.data ?
              <li
                key = 'profile'
                className={`mb-2 font-poppins font-medium cursor-pointer text-[16px] ${
                  active === 'Profile' ? 'text-white' : 'text-dimWhite'
                }`}
                onClick={() => setActive('Profile')}>
              <a href='/'> { user.data.name }</a>
              </li>
              :
              <li
                key = 'login'
                className={`mb-2 font-poppins font-medium cursor-pointer text-[16px] ${
                  active === 'Login' ? 'text-white' : 'text-dimWhite'
                }`}
                onClick={() => setActive('Login')}>
                <a href='/login'>Login</a>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarHome