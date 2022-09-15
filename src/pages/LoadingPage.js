import React from 'react'
import '../loading.css';
export default function LoadingPage({name}) {
  return (
    <div className="container my-12 mx-auto">
      <div className='ring'></div>
      <div className='ring'></div>
      <div className='ring'></div>
      <p>{name}</p>
    </div>
  )
}
