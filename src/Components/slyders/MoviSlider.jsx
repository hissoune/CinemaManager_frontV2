import Swiper from "swiper"
import { Autoplay, Navigation } from "swiper/modules"
import { SwiperSlide } from "swiper/react"

function MoviSlider() {


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
            {movies.map((movie, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 ease-in-out">
                  <div className="relative h-[80%]">
                    <img
                      className="w-full h-96 object-cover"
                      src={movie.posterImage}
                      alt={movie.title}
                    />
                    <div className="absolute bottom-3 left-2 bg-yellow-500 text-white text-lg font-bold px-2 py-1 rounded-full shadow-md">
                      {movie.rating}/10
                    </div>
                  </div>

                  <div className="p-4">
                    <h2 className="text-xl font-bold text-white truncate">{movie.title}</h2>
                    <div className="flex justify-between items-center text-gray-400 mt-1">
                      <span className="text-sm">{new Date(movie.releaseDate).toLocaleDateString()}</span>
                      <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-lg text-sm">
                        {movie.genre.join(", ")}
                      </span>
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
  )
}

export default MoviSlider
