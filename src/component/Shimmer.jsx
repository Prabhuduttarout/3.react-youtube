import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-col gap-2 w-full h-full animate-pulse p-3'>
      <div className='h-70 bg-zinc-200 rounded-xl'>

      </div>
      <div className='flex gap-1.5 w-full'>
        <div className='w-11 h-11 shrink-0 rounded-3xl bg-zinc-200'>
        </div>
        <div className='flex w-full gap-1.5 flex-col'>
          <p className='w-full h-4 rounded bg-zinc-200'></p>
          <p className='w-2/3 h-4 rounded bg-zinc-200'></p>
        </div>
      </div>
    </div>
  )
}

export default Shimmer
