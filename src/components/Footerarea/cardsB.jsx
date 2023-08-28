import React from 'react'
import { BsDot } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { ThreeDots } from "react-loader-spinner";
import axios from 'axios';
// const apiKey = import.meta.env.VITE_REACT_APP_NewsApi;
const apiKey = '404ddb67366240cf8005e18c52c7fc1b';
const API = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
function cardsB() {
  const [news, setNews] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);



  const getNewsData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API}`);
      console.log(res.data.articles)
      setNews(res.data.articles);
      setLoading(false);
    } catch (error) {
      setIsError(error.message);
    }
  };
  useEffect(() => {
    getNewsData();
  }, [])

  return (
    <>
      <div className='flex flex-wrap gap-2'>
        {isError !== "" && <h1 className='font-bold text-2xl'>{isError}</h1>}

        {loading ? <div className="w-full flex justify-center items-center h-96"><ThreeDots height={40} color="black" /></div> :
          news?.map((val, e) => {
            return (
              < div key={e} className='bg-white rounded-xl p-2 w-full md:w-[29rem] h-48 md:h-48'>
                <div className='flex flew-col'>
                  <div className='flex flex-col'>
                    <h1 className='font-bold text-md'>{val.title}</h1>

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
                <div className='flex flex-row mt-1 gap-x-1 text-sm text-gray-500 items-end'>
                  <h1 className='text-pink-200'>{val.author} </h1>
                  <BsDot className='mt-1' />
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