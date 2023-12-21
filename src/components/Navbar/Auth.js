import React from 'react'
import { Menu } from '@headlessui/react'
import { Icon } from 'Icons'

export default function Auth() {

    const user = {
        name: 'Zaur Suleymanov',
        avatar: "https://avatars.githubusercontent.com/u/58635805?v=4"
    }

  return (
    <Menu as="nav" className={"relative"}>
      {({open}) => (
        <>
            <Menu.Button className={`h-8 flex items-center ${open ? 'bg-active' : 'bg-black'} rounded-3xl pr-2 hover:bg-active`}>
                <img className={'w-8 h-8 rounded-full p-0.5 mr-2'} src={user.avatar} alt="" />
                <span className={'text-sm font-semibold mr-2'}>{user.name}</span>
                <span className={open && 'rotate-180'}>
                    <Icon name="downDir" size={16}/>
                </span>
            </Menu.Button>
            <Menu.Items className={"absolute top-full right-0 translate-y-2 p-1 w-48 bg-active rounded"}>
                <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`h-10 flex items-center justify-between px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                        href="#"
                        >
                        Account
                        <Icon name="external" size={16}/>
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                        href="#"
                        >
                        Profile
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                        href="#"
                        >
                        Log out
                        </a>
                    )}
                </Menu.Item>
            </Menu.Items>
        </>
      )}
    </Menu>
  )
}
