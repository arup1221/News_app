import React from 'react'
import { TbWorldSearch } from 'react-icons/tb';
function explore() {
    return (
        <>
            <div className="sticky bottom-16 drop-shadow-2xl">
                <button className="flex justify-center mx-auto p-3 bg-pink-300 hover:bg-pink-400 rounded-full w-36 font-bold text-white text-xl border border-hidden drop-shadow-2xl">
                    <TbWorldSearch className="mt-1 text-xl" /> Explore
                </button>
            </div>
        </>
    )
}

export default explore