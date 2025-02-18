import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='w-1/4 text-lg py-6'>{overview}</p>
        <div>
            <button className='bg-gray-900 text-white rounded-md px-4 py-1 bg-opacity-50 text-xl'>Play</button>
            <button className='bg-gray-900 mx-5 text-white rounded-md px-4 py-1 bg-opacity-50 text-xl'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle