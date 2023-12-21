import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Section({title, more=false, items}) {
  return (
    <section>
        <header className='flex items-center justify-between mb-4'>
            <h3 className='text-white text-2xl font-semibold tracking-tight'>{title}</h3>
            {more && (
                <NavLink
                    className={"text-link text-sm font-semibold hover:underline"} 
                    to={more}>
                    Show all
                </NavLink>
            )}
        </header>
        <div className='grid grid-cols-5 gap-x-6'>
                {items.map(item => (
                    <NavLink 
                        key={item.id} 
                        to="/"
                        className={"p-4 bg-footer rounded"}
                    >
                        <div className='relative pt-[100%] mb-4'>
                            <img 
                                src={item.image} 
                                className='absolute inset-0 object-cover w-full h-full' alt="" 
                            />
                        </div>
                        <div className='overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold'>
                            {item.title}
                        </div>
                    </NavLink>
                ))}
        </div>
    </section>
  )
}
