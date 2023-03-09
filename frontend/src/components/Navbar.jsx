import React, { useState } from 'react'
import { MenuItem, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom'
import { close, Logo, menu, profileIcon } from '../assets'
import { navLinksGames } from '../constants'
import { getToken } from '../services/LocalStorageService'
import { useGetLoggedUserQuery } from '../services/userAuthApi';

const useStyles = makeStyles({
  root: {
    width: 100,
    '& .MuiOutlinedInput-input': {
      color: '#fef9f8',
    },
    '& .MuiInputLabel-root': {
      color: '#EF846B',
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fef9f8',
    },
    '&:hover .MuiOutlinedInput-input': {
      color: '#fef9f8',
    },
    '&:hover .MuiInputLabel-root': {
      color: '#EF846B',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fef9f8',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: '#EF846B',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#EF846B',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#EF846B',
    },
  },
})

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [game, setGame] = React.useState('')
  const classes = useStyles()
  const navigate = useNavigate()

  const handleChange = (event) => {
    navigate(event)
  }

  const { access_token } = getToken()
  const user = useGetLoggedUserQuery(access_token)

  return (
    <nav className="fixed top-0 z-50 bg-primary w-full flex pb-2 p-4 justify-between shadow-sm items-center navbar">
      <img src={Logo} alt="logo" className=" h-[80px]" />


      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li
          key="home"
          className={`font-poppins font-normal cursor-pointer text-[16px] transition duration-150 border-b-2 border-transparent hover:border-Tomato mr-10 `}
        >
          <a href="/">Home</a>
        </li>
        <li
          key="game"
          className={`font-poppins font-normal cursor-pointer text-[16px] transition duration-150 border-b-2 border-transparent hover:border-Tomato mr-10 `}
        >
          <TextField
            className={classes.root}
            value={game}
            onChange={(e) => handleChange(e.target.value)}
            label="Games"
            select
          >
            <MenuItem value={'./kalamkaari'}>Kalamkaari</MenuItem>
            <MenuItem value={'./Enuncify'}>Enuncify</MenuItem>
            <MenuItem value={'./speakwise'}>Speakwise</MenuItem>
          </TextField>
        </li>
        {user.data ?
          <li
            key = 'profile'
            className={`mr-5 font-poppins font-normal cursor-pointer text-[16px] transition duration-150 border-b-2 border-transparent hover:border-Tomato`}>
            <div className='flex'>
              <img src={profileIcon} alt="logo" className=" h-8 w-8" />
              <a href='/' className="mt-1">Hi, { user.data.name }</a>
            </div>
          </li>
          :
          <li
            key = 'login'
            className={`mr-5 font-poppins font-normal cursor-pointer text-[16px] transition duration-150 border-b-2 border-transparent hover:border-Tomato`}
          >
          <a href='/login'>Login</a>
        </li>}
        {/* <li
          key="profile"
          className={`font-poppins font-normal cursor-pointer text-[16px] transition duration-150 border-b-2 border-transparent hover:border-Tomato mr-0 `}
        >
          Name
        </li> */}
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
            {navLinksGames.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px]
                 ${index === navLinksGames.length - 1 ? 'mb-0' : 'mb-4'}`}
              >
                <a href={nav.link}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navbar