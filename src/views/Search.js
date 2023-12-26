import React, { useEffect, useRef, useState } from 'react'
import categories from 'data/categories'
import Title from 'components/Title'
import favoriteCategories from 'data/favorite-categories'
import ScrollContainer from 'react-indiana-drag-scroll'
import { Icon } from 'Icons'
import Category from 'components/CategoryItem'
import WideCategory from 'components/WideCategoryItem'



export default function Search() {

  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(false)

  const favoritesRef = useRef()

  const scrollHandle = () => {
    const isEnd = favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth === favoritesRef.current.scrollWidth
    const isBegin = favoritesRef.current.scrollLeft === 0
    setPrev(!isBegin)
    setNext(!isEnd)
  }

  useEffect(() => {
    if(favoritesRef.current) {

      scrollHandle()

      favoritesRef.current.addEventListener('scroll', scrollHandle)

      return () => {
        favoritesRef?.current?.removeEventListener('scroll', scrollHandle)
      }
  }

  }, [favoritesRef])

  const slideFavoritesNext = () => {
		favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 300
	}

	const slideFavoritesPrev = () => {
		favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 300
	}

  return (
    <>
    <section className='mb-8'>
    <Title title="Most Favorite"/>
    <div className='relative'>
      {prev && 
        <button 
          onClick={slideFavoritesPrev}
          className='w-12 h-12 shadow-spotify absolute -left-6 top-1/2 -translate-y-1/2 hover:scale-[1.06] z-10 rounded-full bg-white flex items-center justify-center text-black'
        >
          <Icon name="prev" size={24}/>
        </button>
        }
      {next && 
        <button 
          onClick={slideFavoritesNext}
          className='w-12 h-12 shadow-spotify absolute -right-6 top-1/2 -translate-y-1/2 hover:scale-[1.06] z-10 rounded-full bg-white flex items-center justify-center text-black'
        >
          <Icon name="next" size={24}/>
        </button>
      }
      <ScrollContainer
        innerRef={favoritesRef} 
        className='flex gap-x-6 scrollable overflow-x-auto'>
        {favoriteCategories.map((category, index) => <WideCategory category={category} key={index}/>)}
      </ScrollContainer>
    </div>
    </section>

      <section>
        <Title title="Browse all"/>
        <div className='grid grid-cols-5 gap-6'>
          {categories.map((category, index) => <Category category={category} key={index}/>)}
        </div>
      </section>
    </>
  )
}
