import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toogleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
  const gptSearch=useSelector(store=>store.gpt.showGptSearch)
  const handleGptSearchClick=()=>{
    dispatch(toogleGptSearchView());
  }

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }

  const handleLogoClick=()=>{
    if(user)
      navigate('/browse');
    else
      navigate('/');
  }

  
  useEffect(()=>{

    const unSubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            const {uid, email, displayName, photoURL}=user;
            dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
            navigate('/browse');
        } else {
            // User is signed out
            dispatch(removeUser());
            navigate('/');
        }
        });

        return ()=>unSubscribe(); // to remove the listener when the component unmounts
    },[])

  return (
    <>
    <div className="w-screen absolute py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img onClick={handleLogoClick} className="h-18 w-44" src={LOGO} alt="logo" srcset="" />
       
        {user &&<div className='flex'>
          {gptSearch && 
          <select onChange={handleLanguageChange} className='h-10 rounded-lg p-2 bg-gray-900 m-2 text-white'>
             {SUPPORTED_LANGUAGES.map(x=><option key={x.identifier} value={x.name}>{x.name}</option>)}
          </select>
          }
          
        <button onClick={handleGptSearchClick} className='bg-purple-900 rounded h-8 my-2 mx-2 font-bold text-white px-1'>{gptSearch?"Exit GPT":"GPT Here"}</button>
    
        <img className='w-10 h-10 mx-2 my-2 rounded' src={user.photoURL} alt="imagehere"/>
        <button onClick={handleSignOut} className='bg-red-700 rounded h-8 my-2 mx-2 font-bold text-white px-1'>SignOut</button>
        </div>}
    </div>
    </>
    
  )
}

export default Header