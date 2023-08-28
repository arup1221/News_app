import React from 'react'
import CardsB from '../Footerarea/cardsB'
function areaB() {
  return (
    <>
      <div className='m-4 w-full'>
        <h1 className='text-2xl'>Top Stories for you</h1>
        <div className='flex flex-row gap-x-3 mt-2 overflow-x-auto'>
          <button className='bg-gray-200 hover:bg-pink-300 hover:text-white p-1 w-8 rounded-lg'>All</button>
          <button className='bg-gray-200 p-1 rounded-lg hover:bg-pink-300 hover:text-white '>Android</button>
          <button className='bg-gray-200 p-1 rounded-lg hover:bg-pink-300 hover:text-white '>Cricket</button>
          <button className='bg-gray-200 p-1 rounded-lg hover:bg-pink-300 hover:text-white '>iPhone</button>
          <button className='bg-gray-200 p-1 rounded-lg hover:bg-pink-300 hover:text-white '>Google</button>
        </div>
        <div className='mt-4 max-w-full'>
          <CardsB />
        </div>
      </div>

    </>
  )
}

export default areaB