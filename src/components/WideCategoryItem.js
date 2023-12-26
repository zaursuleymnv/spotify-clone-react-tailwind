export default function WideCategory({category}) {
    return (
      <div
        style={{"background": category.color}}
        className='relative flex-shrink-0 w-[27.375rem] h-[13.75rem] rounded-lg'
      >
        <div className='absolute inset-0 overflow-hidden'>
          <h3 className='text-2xl text-[2.5rem] tracking-tighter font-semibold p-4'>
            {category.title}
          </h3>
          <img 
            src={category.cover} 
            className='w-32 h-32 absolute bottom-0 right-0 rotate-[25deg] translate-x-[18%] translate-y-[-2%] shadow-spotify' alt="" />
        </div>
      </div>
    )
  }
  