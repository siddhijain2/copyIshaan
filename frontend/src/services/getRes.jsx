import axios from 'axios'
import { getToken } from './LocalStorageService'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import KalamkaariResult from '../pages/kalamkaari/resultPage';

async function getWord({ theme, level }) {
  const access_token = getToken().access_token
  const url = `http://127.0.0.1:8000/kalamkaari/word/${theme}/${level}/`
  console.log(getToken().access_token)
  try{
  const res = await axios.get(url, { headers: { Authorization: `Bearer ${access_token}` }})
  console.log("api")
  console.log(res.data)
   return res.data
  }catch(err)
  {
    console.log(err)
  }
 
}

const GetKalamkaariResult=async({fd})=>{
  // const [word,setWord]=useState('')
  // const access_token = getToken().access_token
  // const url = `http://127.0.0.1:8000/kalamkaari/`
  // console.log(getToken().access_token)
  // const navigate=useNavigate();
  // console.log('+++++++++++')
  // const response = 
  //     return (
  //       <>
  //         <KalamkaariResult data={response.data}/>
  //       </>
  //     )

}

export  {GetKalamkaariResult,getWord}

