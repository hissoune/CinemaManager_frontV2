import MoviesSlider from "../../Components/slyders/MoveisSlider";
import SessionsSlyder from "../../Components/slyders/SessionsSlyder";

function Home() {
  return (
    <div className="bg-[#181823] min-h-screen">
      <>
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(/cinema-movie-night-3d-vector-clapper-board-director-s-megaphone-ticket-3d-glasses-movie-tape_606402-430.jpg)',
            }}
          >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-60">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide uppercase text-center px-4">
                Experience the Magic of Cinema
              </h1>
            </div>
          </div>
        </div>

    
        <div className="min-h-[80vh] flex flex-col items-center justify-center py-16">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-white font-serif font-bold mb-12">
            This Week's Sessions
          </h1>
          <div className="w-full ">
            <SessionsSlyder />
          </div>
        </div>

        <div className="h-auto flex flex-col items-center justify-center py-16">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-white font-serif font-bold mb-12">
            Latest Movies
          </h1>
          <div className="w-full">
            <MoviesSlider />
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;
