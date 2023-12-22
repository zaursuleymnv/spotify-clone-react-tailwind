import React from 'react'
import Section from 'components/Section'

export default function Home() {

  const items = [
    {
      id: 1,
      title: 'Intouchables - Soundtracks OST',
      description: 'Original Soundtrack',
      image: 'https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146',
      type: 'album'
    },
    {
      id: 2,
      title: 'Peaceful Piano',
      artist: 'Murat Abi',
      description: 'Relax and indulge with beautiful piano pieces',
      image: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6',
      type: 'album'
    },
    {
      id: 3,
      title: 'Hang Massive',
      artist: 'Mert Abi',
      description: 'Artist',
      image: 'https://i.scdn.co/image/ab67616100005174802686196d39eb0b7b5cd8b1',
      type: 'artist'
    },
    {
      id: 4,
      title: 'Intouchables - Soundtracks OST',
      description: 'Original Soundtrack',
      image: 'https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146',
      type: 'podcast'
    },
    {
      id: 5,
      title: 'Intouchables - Soundtracks OST',
      description: 'Original Soundtrack',
      image: 'https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146',
      type: 'album'
    },
  ]

  return (
    <div className='grid gap-y-8'>
      <Section
        title="Recently played"
        more="/"
        items={items}
      />
      <Section
        title="Shows to try"
        more="/"
        items={items}
      />
      <Section
        title="Made for Zaur"
        more="/"
        items={items}
      />
    </div>
  )
}
