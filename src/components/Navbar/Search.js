import React from 'react'
import { Icon } from 'Icons'

export default function Search() {
  return (
    <div className='relative mr-auto ml-4'>
        <label htmlFor="search-input" className='w-12 h-12 text-white/70 flex items-center justify-center absolute top-0 left-0'>
            <Icon name="search" size={24}/>
        </label>
      <input
        autoFocus={true} 
        type="text"
        id='search-input'
        className='w-[22.75rem] max-w-full h-12 text-white outline-none bg-[#242424] border border-transparent hover:border-white/10 focus:border-2 focus:border-white font-medium placeholder:font-normal pl-12 text-sm rounded-3xl placeholder-white/50' 
        placeholder='What do you want to listen to?'
        />
    </div>
  )
}
