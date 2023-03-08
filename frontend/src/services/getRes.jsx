import axios from 'axios'
import { getToken } from './LocalStorageService'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import KalamkaariResult from '../pages/kalamkaari/resultPage';

async function getWord({ theme, level }) {
 
 
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

