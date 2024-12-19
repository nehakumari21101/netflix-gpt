import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div>
        <h1 className='font-bold text-2xl'>{title}</h1>
        <p className='w-1/4'>{overview}</p>
        <button className='bg-gray-500 text-white px-5 py-2 bg-opacity-70 mx-1 rounded-sm font-bold my-1'>▶Video</button>
        <button className='bg-gray-500 text-white px-5 py-2 bg-opacity-70 mx-1 rounded-sm font-bold my-1'>Info</button>
      <h2>VideoTitle</h2>
    </div>
  )
}

export default VideoTitle
