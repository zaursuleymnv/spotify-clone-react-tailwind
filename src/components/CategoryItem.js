export default function Category({category}) {
    return (
      <div
        style={{"background": category.color}}
        className='relative rounded-md before:pt-[100%] before:block'
      >
        <div className='absolute inset-0 overflow-hidden'>
          <h3 className='text-2xl tracking-tighter font-semibold p-4'>
            {category.title}
          </h3>
          <img 
            src={category.cover} 
            className='w-[6.25rem] h-[6.25rem] absolute bottom-0 right-0 rotate-[25deg] translate-x-[18%] translate-y-[-2%] shadow-spotify' alt="" />
        </div>
      </div>
    )
}