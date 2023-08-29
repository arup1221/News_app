import React from 'react'
import { BsDot } from 'react-icons/bs';
import { useState, useEffect, useMemo } from 'react';
import { ThreeDots } from "react-loader-spinner";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { calculateDaysAgo } from '../../constant/constants';
import { APIin } from '../../constant/constants';



function cardsB() {
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
    return <div><div className="w-full flex justify-center items-center h-96"><ThreeDots height={40} color="black" /></div></div>;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  return (
    <>
      <div className='flex flex-wrap gap-2'>
        {isError !== "" && <h1 className='font-bold text-2xl'>{isError}</h1>}

        {
          news?.map((val, e) => {
            return (
              < div key={e} className='bg-white rounded-xl p-2 w-full md:w-[29rem] h-full md:h-52'>
                <div><h1>{calculateDaysAgo(val.publishedAt) + " Day ago"}</h1></div>
                <div className='flex flew-col'>
                  <div className='flex flex-col'>
                    <Link to={val.url}>
                      <h1 className='font-bold text-md'>{val.title}</h1>
                    </Link>
                    <div className="w-48 h-[4rem] overflow-hidden">
                      <div className="text-sm text-gray-500" style={{ WebkitLineClamp: 3 }}>
                        {val.description}
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={val.urlToImage} alt="No Image" className='w-72 h-36 md:w-56 md:h-32 rounded-md ' />
                  </div>
                </div>
                <div className='flex flex-row gap-x-1 text-sm text-gray-500 items-end'>
                  <h1 className='text-pink-200'>{val.author} </h1>
                  <BsDot />
                  <h1>{val.source.name}</h1>
                </div>
              </div>
            )
          })
        }

      </div>
    </>

  )
}

export default cardsB