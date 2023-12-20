import React from 'react'
import { Icon } from 'Icons'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'


export default function Menu({isActive = false}) {


  return (
    <nav className='px-2'>
        <ul className='flex flex-col'>
            <li>
                <NavLink
                    className={(active) => 
                        active.isActive 
                            ? "h-10 flex items-center gap-x-4 text-sm font-semibold px-4 text-white bg-active rounded hover:text-white" 
                            : "h-10 flex items-center gap-x-4 text-sm font-semibold px-4 text-link rounded hover:text-white" 
                    }
                    exact
                    to="/"   
                    >
                    <span>
                        <Icon name="home"/>
                    </span>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/search" 
                    className={(active) => 
                        active.isActive 
                            ? "h-10 flex items-center gap-x-4 text-sm font-semibold px-4 text-white bg-active rounded hover:text-white" 
                            : "h-10 flex items-center gap-x-4 text-sm font-semibold px-4 text-link rounded hover:text-white" 
                    }
                    >
                    <span>
                        <Icon name="search"/>
                    </span>
                    Search
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/collection" 
                    className={(active) => 
                        active.isActive 
                            ? "h-10 flex items-center gap-x-4 text-sm font-semibold px-4 text-white bg-active rounded hover:text-white" 
                            : "h-10 flex items-center gap-x-4 text-sm font-semibold px-4 text-link rounded hover:text-white" 
                    }
                    >
                    <span>
                        <Icon name="collection"/>
                    </span>
                    Your Library
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}
