import { Alert, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../services/userAuthApi'
import { storeToken } from '../services/LocalStorageService';

const SigninForm = () => {
    
    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [server_error, setServerError] = useState({})
    const navigate = useNavigate();
    const [registerUser, { isLoading }] = useRegisterUserMutation()
    
    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
    };
    
    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    
    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    
    // Handling the password2 change
    const handlePassword2 = (e) => {
        setPassword2(e.target.value);
    };
    
    // Handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const actualData = {
            name: name,
            email: email,
            password: password,
            password2: password2,
        }
        console.log(actualData)
        const res = await registerUser(actualData)
        if (res.error) {
            // console.log(typeof (res.error.data.errors))
            // console.log(res.error.data.errors)
            setServerError(res.error.data.errors)
        }
        if (res.data) {
            console.log(typeof (res.data))
            console.log(res.data)
       
            storeToken(res.data.token)
            navigate('/')
        }
    }

    return <div class="flex items-center justify-center  absolute z-50 mt-40"> 
    {/* <!-- Sign in Container --> */}
    <div class="w-5/5 py-20  ">
        <div class=" flex flex-col text-sm rounded-md">
            <input class="mt-2 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500" onChange={handleName} value={name} type="text" placeholder="Name"/> 
            {server_error.name ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.name[0]}</Typography> : ""}
            <input class="mt-2 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500" onChange={handleEmail} value={email} type="email" placeholder="Email id"/>
            {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
            <input class="mt-2 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500" onChange={handlePassword} value={password} type="password" placeholder="Password"/>
            {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
            <input class="mt-2 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500" onChange={handlePassword2} value={password2} type="password" placeholder="Re-enter password"/>
            {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password2[0]}</Typography> : ""}

        </div>
        <button class="mt-3 w-full border p-2 shadow:md bg-gradient-to-r from-Tomato to-ChiliRed text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" onClick={handleSubmit} type="submit">Register</button>
        {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
        <div class="mt-3 flex justify-between text-sm text-gray-600">
            <a href="/login">Already a User? Click here</a>
        </div>
    </div>
  </div>
};
  
export default SigninForm;