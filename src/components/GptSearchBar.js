import React from 'react'
import { useSelector } from 'react-redux'
import { lang } from '../utils/languageConstants';

const GptSearchBar = () => {
    const language=useSelector(store=>store.config.lang);
    
    const currentLang = lang[language] || lang.English; // fallback to English if language is not found

    return (
        <div className='pt-[10%] flex justify-center'>
            <form className=' bg-black grid grid-cols-12 w-1/2'>
                <input type="text" className='font-bold p-4 m-4 rounded-md col-span-9' placeholder={currentLang.placeholder} />
                <button onClick={(e)=>e.preventDefault()} className='bg-red-900 text-white rounded-md mx-2 px-4 col-span-3'>{currentLang.search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar