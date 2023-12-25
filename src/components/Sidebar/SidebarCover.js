import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from 'Icons'
import { setSidebar } from 'stores/player'

export default function SidebarCover() {

    const dispatch = useDispatch()
    const current = useSelector(state => state.player.current)

  return (
    <div className='relative pt-[100%] bg-black group'>
      <img src={current.image} className='w-full h-full absolute top-0 left-0 object-cover' alt="" />
      <button
            onClick={() => dispatch(setSidebar(false))} 
            className='h-6 w-6 bg-black absolute top-1 right-1 opacity-0 group-hover:opacity-70 hover:!opacity-100 hover:scale-[1.06] bg-opacity-80 rounded-full -rotate-90 flex items-center justify-center'>
        <Icon name="arrowLeft" size={16}/>
    </button>
    </div>
  )
}
