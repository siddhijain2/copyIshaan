import { Typography, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
// import { setUserToken } from '../../features/authSlice';
import { getToken, storeToken } from '../services/LocalStorageService';
import { useLoginUserMutation } from '../services/userAuthApi';

const LoginForm = () => {
  
  // States for registration
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { isLoading }] = useLoginUserMutation()
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // const dispatch = useDispatch()
  // let { access_token } = getToken()
  // useEffect(() => {
  //   dispatch(setUserToken({ access_token: access_token }))
  // }, [access_token, dispatch])
  
  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const actualData = {
      email: email,
      password: password,
    }
    console.log(actualData)
    const res = await loginUser(actualData)
    if (res.error) {
      // console.log(typeof (res.error.data.errors))
      // console.log(res.error.data.errors)
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      // console.log(typeof (res.data))
      // console.log(res.data)
      storeToken(res.data.token)
      // let { access_token } = getToken()
      // dispatch(setUserToken({ access_token: access_token }))
      navigate('/')
    }
  }
  
  return (<div class="flex items-center justify-center  absolute z-50 mt-40">
  {/* <!-- Login Container --> */}
  <div class="w-5/5 py-20  ">
    <div class=" flex flex-col text-sm rounded-md">
      <input class="rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " onChange={handleEmail} value={email} type="text" placeholder="Email id" />
      {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
      <input class="mt-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" onChange={handlePassword} value={password} type="password" placeholder="Password" />
      {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
    </div>
    {isLoading ? <CircularProgress /> : <button class="mt-5 w-full border p-2 shadow:md bg-gradient-to-r from-Tomato to-ChiliRed text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" onClick={handleSubmit} type="submit">Log in</button>}
    <div class="mt-5 flex justify-between text-sm text-gray-600">
      <a href="/signin">Not registered? Click to register</a>
    </div>
  </div>
</div>)
};

export default LoginForm;