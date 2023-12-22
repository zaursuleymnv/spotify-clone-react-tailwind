import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'Icons'


export default function Section({title, more=false, items}) {

    const imageStyle = item => {
        switch (item.type) {
            case 'artist':
                return 'rounded-full';

            case 'artist':
                return 'rounded-xl';
        
            default:
                return 'rounded'
        }
    }

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
                {items.map(item => (
                    <NavLink 
                        key={item.id} 
                        to="/"
                        className={"p-4 bg-footer rounded hover:bg-active group"}
                    >
                        <div className='relative pt-[100%] mb-4'>
                            <img 
                                src={item.image} 
                                className={`absolute inset-0 object-cover w-full h-full ${imageStyle(item)}`} alt="" 
                            />
                            <button className='w-12 h-12 bg-primary absolute bottom-2 right-2 opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-center justify-center rounded-full'>
                                <Icon name="play" size={22}/>
                            </button>
                        </div>
                        <h6 className='overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold'>
                            {item.title}
                        </h6>
                        <p className='line-clamp-2 text-link text-sm mt-1'>
                            {item.description}
                        </p>
                    </NavLink>
                ))}
        </div>
    </section>
  )
}
