import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LevelPage = () => {

    const [type, setType] = useState('');

    const navigate = useNavigate();
  
    // Handling the form submission
    const handleTraceSubmit = (e) => {
        setType('trace')
    }

    const handleDictationSubmit = (e) => {
        setType('dictation')
    }

    const handleBeginnerSubmit = (e) => {
      navigate(`/kalamkaari/${type}/beginner`)
    }

    const handleAdvanceSubmit = (e) => {
        navigate(`/kalamkaari/${type}/advance`)
    }
  
    return (
    <div class="flex items-center justify-center  absolute z-50 mt-40">
        <div class="w-5/5 py-20  ">
            {type == '' ? 
            <div>
                <h1>Select the theme for the game</h1>
                <button class="mt-5 w-full border p-2 shadow:md bg-gradient-to-r from-Tomato to-ChiliRed text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" onClick={handleTraceSubmit} type="submit">Trace</button>
                <button class="mt-5 w-full border p-2 shadow:md bg-gradient-to-r from-Tomato to-ChiliRed text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" onClick={handleDictationSubmit} type="submit">Dictation</button>
            </div>
            :
            null}
            {type ? 
            <div>
                <h1>Select the difficulty for the game</h1>
                <button class="mt-5 w-full border p-2 shadow:md bg-gradient-to-r from-Tomato to-ChiliRed text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" onClick={handleBeginnerSubmit} type="submit">Beginner</button>
                <button class="mt-5 w-full border p-2 shadow:md bg-gradient-to-r from-Tomato to-ChiliRed text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" onClick={handleAdvanceSubmit} type="submit">Advanced</button>
            </div>
            :
            null}
        </div>
    </div>)
};

export default LevelPage;