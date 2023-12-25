import React, { useEffect, useMemo } from 'react'
import { Icon } from "Icons";
import { useAudio } from 'react-use';
import { secondsToTime } from 'utils';
import CustomRange from '../CustomRange';
import { useDispatch, useSelector } from 'react-redux';
import { setControls, setPlaying, setSidebar } from 'stores/player';


export default function Player() {

  const dispatch = useDispatch()
  const {current, sidebar} = useSelector(state => state.player)


    const [audio, state, controls, ref] = useAudio({
        src: current?.src
    });

    useEffect(() => {
      dispatch(setControls(controls))
    }, [])

    useEffect(() => {
      controls.play()
    }, [current])

    const volumeIcon = useMemo(() => {

      if(state.volume == 0 || state.muted) 
        return 'volumeMuted'

      if(state.volume > 0 && state.volume < 0.33)
        return 'volumeLow'

      if(state.volume >= 0.33 && state.volume < 0.66)
        return 'volumeNormal'

      return 'volumeFull'

    }, [state.volume, state.muted])
    
    useEffect(() => {
      dispatch(setPlaying(state.playing))
    }, [state.playing])

  return (
    <div className='flex justify-between items-center h-full px-4'>
      <div className='min-w-[11.25rem] w-[30%]'>
        {current && (
          <div className='flex items-center'>
              <div className='flex items-center mr-3'>
                {!sidebar && (
                  <div className='w-14 h-14 relative mr-3 flex-shrink-0 group'>
                    <img src={current.image} alt="" />
                    <button
                      onClick={() => dispatch(setSidebar(true))} 
                      className='h-6 w-6 bg-black absolute top-1 right-1 opacity-0 group-hover:opacity-70 hover:!opacity-100 hover:scale-[1.06] bg-opacity-80 rounded-full rotate-90 flex items-center justify-center'>
                      <Icon name="arrowLeft" size={16}/>
                    </button>
                  </div>
                )}
                <div>
                  <h6 className='text-sm line-clamp-1'>{current.title}</h6>
                  <p className='text-[0.688rem] text-white text-opacity-70'>{current.artist}</p>
                </div>
              </div>
              <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                <Icon name="heart" size={16}/>
              </button>
              <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                <Icon name="pictureInPicture" size={16}/>
              </button>
          </div>
        )}
      </div>
      <div className='max-w-[45.125rem] w-[40%] flex flex-col items-center px-4 pt-2'>
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
        <div className='w-full flex items-center gap-x-2 mt-1.5'>
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
      <div className='min-w-[11.25rem] w-[30%] flex items-center justify-end'>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
          <Icon name="lyrics" size={16}/>
        </button>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
          <Icon name="queue" size={16}/>
        </button>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
          <Icon name="device" size={16}/>
        </button>
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
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
          <Icon name="fullScreen" size={16}/>
        </button>
      </div>
    </div>
  )
}
