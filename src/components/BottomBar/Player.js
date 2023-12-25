import React from 'react'
import { Icon } from "Icons";
import { useAudio } from 'react-use';
import { secondsToTime } from 'utils';
import CustomRange from '../CustomRange';


export default function Player() {


    const [audio, state, controls, ref] = useAudio({
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    });

  return (
    <div className='flex justify-between items-center h-full px-4'>
      <div className='min-w-[11.25rem] w-[30%]'>
        sol
      </div>
      <div className='max-w-[45.125rem] w-[40%] flex flex-col items-center'>
        <div className='flex items-center gap-x-2'>
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                <Icon name="shuffle" size={16}/>
            </button>
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                <Icon name="playerPrev" size={16}/>
            </button>
            <button
                onClick={controls[state?.playing ? 'pause' : 'play']}
                className='w-8 h-8 flex items-center justify-center bg-white rounded-full text-black hover:scale-[1.06]'>
                <Icon name={state?.playing ? 'pause' : 'play'} size={16}/>
            </button>
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                <Icon name="playerNext" size={16}/>
            </button>
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                <Icon name="loop" size={16}/>
            </button>
        </div>
        <div className='w-full flex items-center gap-x-2'>
            {audio}
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
      </div>
      <div className='min-w-[11.25rem] w-[30%]'>
        right
      </div>
    </div>
  )
}
