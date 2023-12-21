import React from 'react'
import { Icon } from 'Icons'
import { useNavigate } from 'react-router-dom'

export default function Navigation() {

    const navigate = useNavigate()

  return (
    <nav className='flex gap-x-4'>
        <button onClick={() => navigate(-1)} className='w-8 h-8 rounded-full flex items-center justify-center bg-black bg-opacity-70'>
            <Icon name="prev" size={22}/>
        </button>
        <button onClick={() => navigate(1)} className='w-8 h-8 rounded-full flex items-center justify-center bg-black bg-opacity-70'>
            <Icon name="next" size={22}/>
        </button>
    </nav>
  )
}
