import React from 'react'
import logo from 'img/logo.svg'
import Menu from './Sidebar/Menu'
import { Icon } from 'Icons'
import PlayLists from './Sidebar/PlayLists'
import DownloadApp from './Sidebar/DownloadApp'

export default function Sidebar() {
  return (
    <aside className='w-60 pt-6 bg-black flex flex-col'>
        <a href="#" className='mb-7 px-6'>
          <img src={logo} className='h-10' alt="" />
        </a>
        <Menu/>

        <nav className='mt-6'>
          <ul>
            <li>
              <a href="#" className='py-2 px-6 flex items-center gap-x-4 text-link group text-sm font-semibold hover:text-white'>
                <span className='w-6 h-6 flex items-center justify-center bg-white bg-opacity-70 group-hover:bg-opacity-100 text-black rounded-sm'>
                  <Icon name="plus" size={12}/>
                </span>
                Create playlist
              </a>
            </li>
            <li>
              <a href="#" className='py-2 px-6 flex items-center gap-x-4 text-link group text-sm font-semibold hover:text-white'>
                <span className='w-6 h-6 flex items-center justify-center rounded-sm text-white bg-gradient-to-br from-purple-700 to-blue-300 opacity-70 group-hover:opacity-100'>
                  <Icon name="heartFilled" size={12}/>
                </span>
                Liked Songs
              </a>
            </li>
          </ul>
        </nav>

        <PlayLists/>
        <DownloadApp/>
    </aside>
  )
}
