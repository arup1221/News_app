import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { useState, useEffect, useMemo } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThreeDots } from "react-loader-spinner";
import { calculateHoursAgo } from '../../constant/constants';
import { APIin } from '../../constant/constants';


function news() {
  const [news, setNews] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);


  const getNewsData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${APIin}`);
      console.log(res.data.articles)
      setNews(res.data.articles);
      setLoading(false);
    } catch (error) {
      setIsError(error.message);
    }
  };
  const memoizedGetNewsData = useMemo(() =>
    getNewsData, []
  )
  useEffect(() => {
    memoizedGetNewsData();
  }, [memoizedGetNewsData])

  if (loading) {
    return <div><div><div className="w-full flex justify-center items-center h-96"><ThreeDots height={40} color="black" /></div></div>;</div>;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }
  return (
    <>
      <div className='flex flex-col justify-center items-center '>
        {isError !== "" && <h1 className='font-bold text-2xl'>{isError}</h1>}

        {loading ? <div className="w-full flex justify-center items-center h-96"><ThreeDots height={40} color="black" /></div> :
          news?.map((val, e) => {
            return (

              <div key={e} className='w-screen h-screen md:w-1/2 relative'>
                <img
                  src={val.urlToImage}
                  alt="No image"
                  className='w-full h-full object-cover absolute top-0 left-0'
                />
                <div>
                  <div className='absolute text-white flex flex-row mt-2 '>

                    <Link to="/">
                      <IoMdArrowRoundBack className='text-4xl gap-x-4' />
                    </Link>

                    <button className='ml-4 text-black bg-white hover:bg-black p-2 rounded-2xl '>{val.source.name}</button>

                  </div>



                </div>
                <div className='absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 text-white'>
                  <h1>{calculateHoursAgo(val.publishedAt) + " Hours ago"}</h1>
                  <h1 className='font-bold text-xl'>{val.title}</h1>
                  <h1 className='mt-2 text-gray-300'>
                    {val.description}
                  </h1>
                  <div className='flex items-center mt-4'>
                    <h1 className='text-pink-200 font-bold '>{val.author}</h1>
                    <BsDot className='mt-1 text-gray-300 font-bold' />
                    <h1 className='text-gray-300'>{val.source.name}</h1>
                  </div>
                </div>
              </div>

            )
          })
        }

      </div>
    </>
  )
}

export default news