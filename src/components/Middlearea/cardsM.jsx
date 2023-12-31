
import { BsDot } from 'react-icons/bs';
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { ThreeDots } from "react-loader-spinner";
import { Link } from 'react-router-dom';
import { calculateHoursAgo } from '../../constant/constants';
import { APIus } from '../../constant/constants';


function cardsM() {
  const [news, setNews] = useState([]);
  const [isError, setIsError] = useState("");
  const [loading, setLoading] = useState(true);



  const getNewsData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${APIus}`);
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
      <div className='grid grid-flow-col overflow-x-auto w-full md:w-full gap-x-4 '>
        {isError !== "" && <h1 className='font-bold text-2xl'>{isError}</h1>}
        {loading ? <div className="w-full flex justify-center items-center h-96"><ThreeDots height={40} color="black" /></div> :
          news?.map((val, e) => {
            return (
              <div key={e} className='w-[35rem] h-[24rem] relative mt-6 gap-x-2 max-w-[16rem] items-end justify-start rounded-lg '>
                <Link to={val.url}>
                  <div>

                    <img
                      src={val.urlToImage}
                      alt="No Image"
                      className='w-full h-full object-cover absolute top-0 left-0 rounded-2xl '
                    />
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-2xl'></div>
                  </div>
                  <div className='absolute flex flex-row justify-between gap-x-32'>
                    <button className=' ml-4 mt-2 bg-gray-300 rounded-3xl w-auto p-1'>{val.source.id}</button>
                    {/* <PiBookmarkSimpleDuotone className='mt-3 text-2xl' /> */}
                  </div>
                  <div className='inset-0 flex flex-col justify-end p-4 bg-opacity-50 text-white w-full rounded-2xl absolute'>
                    <div className='text-pink-400'><h1>{calculateHoursAgo(val.publishedAt) + " Hours ago"}</h1></div>


                    <h1 className='font-bold text-md'>{val.title} </h1>
                    <h1 className='overflow-hidden truncate text-sm text-gray-400' style={{ WebkitLineClamp: 3 }}>
                      {val.description}
                    </h1>
                    <div className='flex items-center text-sm text-gray-400 font-bold mt-2'>
                      <h1>{val.author}</h1>
                      <BsDot className='mt-1' />
                      <h1>{val.source.name}</h1>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })
        }

      </div>
    </>
  );
}

export default cardsM