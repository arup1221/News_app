import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi'
function header() {
  return (
    <>
      <div className='static header top-0 text-4xl flex justify-between text-slate-900 font-black p-3 border-b-2 border-grey-500 '>
        <GiHamburgerMenu />
        <h1 className='font-bacasime'>Zintlr News</h1>
        <BiSearch />
      </div>
    </>
  )
}

export default header