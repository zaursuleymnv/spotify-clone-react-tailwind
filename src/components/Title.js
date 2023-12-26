import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Title({title, more = false}) {
  return (
    <header 
        className='flex items-center justify-between mb-4'>
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
  )
}
