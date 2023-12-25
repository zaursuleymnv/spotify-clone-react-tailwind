import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'Icons'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent } from 'stores/player';

export default function SongItem({item}) {

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

    const dispatch = useDispatch()

    const {current, playing, controls} = useSelector(state => state.player)

    const updateCurrent = () => {
        if(current.id == item.id) {
            if(playing) {
                controls.pause()
            }
            else {
                controls.play()
            }
        }
        else {
            dispatch(setCurrent(item))
        }
    }

    const isCurrentItem = (current?.id === item.id && playing)

  return (
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
            <button
                onClick={updateCurrent} 
                className={`w-12 h-12 rounded-full bg-primary text-black absolute group-hover:flex group-focus:flex bottom-2 right-2 items-center justify-center ${!isCurrentItem ? 'hidden' : 'flex'}`}>
                <Icon name={isCurrentItem ? 'pause' : 'play'} size={22}/>
            </button>
        </div>
        <h6 className='overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold'>
             {item.title}
         </h6>
        <p className='line-clamp-2 text-link text-sm mt-1'>
            {item.description}
        </p>
    </NavLink>
  )
}
