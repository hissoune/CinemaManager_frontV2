import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { useEffect } from 'react';
import useSessionsClient from '../../Hooks/useSessionsClient';


export default function SessionsSlyder() {
  const { sessions, loading ,getAllSessions} = useSessionsClient();
  useEffect(()=>{
    getAllSessions();
    
  },[])

  if (loading) return <>loading . . .</>;

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden">
        <div className="w-[80%] my-10 rounded-2xl bg-gray-800 p-4">
          <div className="relative w-full py-10">
            <Swiper
              modules={[Navigation, Autoplay]}
              loop={true}
              slidesPerView={1}
              spaceBetween={10}
              autoplay={{
                delay: 4000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".button-next-movie-slide",
                prevEl: ".button-prev-movie-slide",
              }}
              speed={600}
              breakpoints={{
                1440: { slidesPerView: 3, spaceBetween: 30 },
                1024: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 10 },
                480: { slidesPerView: 1, spaceBetween: 5 },
              }}
            >
              {sessions.map((session, index) => (
                <SwiperSlide key={index}>
                  <div
          
            className="col-span-4 relative bg-cover bg-center bg-no-repeat w-full h-96 p-6 cursor-pointer transition-transform transform hover:scale-105 shadow-2xl rounded-lg group"
            style={{
              backgroundImage: `url('${session.movie.posterImage || '/2405f5d1220d45fef53df0bfe804e104.jpg'}')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div>
                <h2 className="text-lg text-white text-center font-bold">
                  {session.movie.title || `Movie Title ${index + 1}`}
                </h2>
                <p className="text-white text-center">
                  Short description of the movie goes here.
                </p>
              </div>

              
            </div>
          </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute top-1/2 left-5 transform -translate-y-1/2 button-prev-movie-slide z-10">
              <button className="bg-yellow-500 text-white rounded-full p-3 hover:bg-yellow-400 transition">
                Prev
              </button>
            </div>
            <div className="absolute top-1/2 right-5 transform -translate-y-1/2 button-next-movie-slide z-10">
              <button className="bg-yellow-500 text-white rounded-full p-3 hover:bg-yellow-400 transition">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
