import React from 'react'
import { Icon } from 'Icons'

export default function Menu() {
  return (
    <nav className='px-2'>
        <ul className='flex flex-col'>
            <li>
                <a href="" className='h-10 flex items-center gap-x-4 text-sm font-semibold px-4 text-link rounded hover:text-white bg-active'>
                    <span>
                        <Icon name="home"/>
                    </span>
                    Home
                </a>
            </li>
            <li>
                <a href="" className='h-10 flex items-center gap-x-4 text-sm font-semibold px-4 text-link'>
                    <span>
                        <Icon name="search"/>
                    </span>
                    Search
                </a>
            </li>
            <li>
                <a href="" className='h-10 flex items-center gap-x-4 text-sm font-semibold px-4 text-link'>
                    <span>
                        <Icon name="collection"/>
                    </span>
                    Your Library
                </a>
            </li>
        </ul>
    </nav>
  )
}
