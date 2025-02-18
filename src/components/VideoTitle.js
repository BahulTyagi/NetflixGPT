import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' bg-gradient-to-r from-black w-screen aspect-video pt-[20%] px-12 absolute text-white'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='w-1/4 text-lg py-6'>{overview}</p>
        <div>
            <button className='rounded-md px-6 font-bold py-1 text-xl bg-white text-black hover:bg-opacity-50'>Play</button>
            <button className='bg-gray-900 mx-5 text-white rounded-md px-4 py-1 bg-opacity-50 text-xl'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle