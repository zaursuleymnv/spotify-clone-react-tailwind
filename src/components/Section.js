import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'Icons'
import SongItem from './SongItem'


export default function Section({title, more=false, items}) {

  return (
    <section>
        <header className='flex items-center justify-between mb-4'>
            <NavLink to={more ?? '#'}>
                <h3 className='text-white text-2xl font-semibold tracking-tight hover:underline'>{title}</h3>
            </NavLink>
            {more && (
                <NavLink
                    className={"text-link text-sm font-semibold hover:underline tracking-wider"} 
                    to={more}>
                    Show all
                </NavLink>
            )}
        </header>
        <div className='grid grid-cols-5 gap-x-6'>
                {items.map(item => <SongItem key={item.id} item={item}/>)}
        </div>
    </section>
  )
}
