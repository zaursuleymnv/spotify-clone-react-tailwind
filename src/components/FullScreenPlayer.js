import React from 'react'
import { useSelector } from 'react-redux'
import { Icon } from 'Icons'
import { secondsToTime } from 'utils'
import CustomRange from './CustomRange'

export default function FullScreenPlayer({toggle, state, controls, volumeIcon}) {

    const {current} = useSelector(state => state.player)

  return (
    <div className='relative h-full'>
        <div className='absolute inset-0 object-cover bg-center bg-cover blur-md opacity-25' style={{backgroundImage: `url(${current.image})`}}/>
        <div className='absolute top-10 left-8 text-white flex items-center gap-x-4 opacity-60'>
            <Icon name="logo" size={34}/>
            <div className='text-xs'>
                <p style={{fontSize: 11}}>PLAYING FROM PLAYLIST</p>
                <h6 className='font-semibold mt-0.5 uppercase'>{current.title}</h6>
            </div>
        </div>
        <div className='absolute left-8 bottom-36 flex items-center gap-x-5'>
            <img src={current.image} className='w-24 h-24 object-cover' alt="" />
            <div className='self-end'>
                <h3 className='text-3xl font-bold opacity-70'>{current.title}</h3>
                <p className='text-sm font-medium opacity-50'>{current.description}</p>
            </div>
        </div>
      <div
        onClick={e => {
            e.stopPropagation()
        }} 
        className='w-full absolute bottom-4 flex flex-col items-center px-8'>
        <div className='w-full flex items-center gap-x-2 mb-1.5'>
            <div className='text-[0.688rem] text-white text-opacity-70'>
            {secondsToTime(state?.time)}
            </div>
            <CustomRange
                step={0.1}
                min={0}
                max={state?.duration || 1}
                value={state?.time}
                onChange={value => controls.seek(value)}
            />
            <div className='text-[0.688rem] text-white text-opacity-70'>
                {secondsToTime(state?.duration)}
            </div>
        </div>
            <div className='flex items-center gap-x-5'>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="shuffle" size={24}/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="playerPrev" size={24}/>
                </button>
                <button
                    onClick={controls[state?.playing ? 'pause' : 'play']}
                    className='w-16 h-16 flex items-center justify-center bg-white rounded-full text-black hover:scale-[1.06]'>
                    <Icon name={state?.playing ? 'pause' : 'play'} size={24}/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="playerNext" size={24}/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="loop" size={24}/>
                </button>
            </div>
            <div className='flex items-center gap-x-3 absolute bottom-2 right-6'>
                <button
                    onClick={controls[state.muted ? 'unmute' : 'mute']} 
                    className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'
                >
                <Icon name={volumeIcon} size={16}/>
                </button>
                <div className='w-[5.813rem] max-w-full'>
                <CustomRange
                    step={0.01}
                    min={0}
                    max={1}
                    value={state.muted ? 0 : state?.volume}
                    onChange={value => {
                        controls.unmute()
                        controls.volume(value)
                    }}
                />
                </div>
                <button
                    onClick={toggle} 
                    className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'
                >
                <Icon name="fullScreenOff" size={24}/>
                </button>
            </div>
      </div>
    </div>
  )
}
