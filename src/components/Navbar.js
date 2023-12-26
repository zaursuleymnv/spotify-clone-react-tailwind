import React from 'react'
import Navigation from './Navbar/Navigation'
import Auth from './Navbar/Auth'
import { useMatch } from 'react-router-dom'
import Search from './Navbar/Search'

export default function Navbar() {

  const searchRoute = useMatch('/search')

  return (
    <nav className='h-[3.75rem] flex items-center justify-between px-8'>
        <Navigation/>
        {searchRoute && <Search/>}
        <Auth/>
    </nav>
  )
}
