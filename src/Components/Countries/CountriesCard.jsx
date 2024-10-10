import React from 'react';

function CountriesCard({img, arabicName, englishName, currency, deleteHandler}) {
    return (
        <div onClick={() => {deleteHandler(englishName)}} className="bg-[#f5f5f5] border border-2 border-[#dcdcdc] rounded shadow shadow-xl shadow-black/50 p-[20px] w-[300px] text-center transition duration-300 ease-in-out hover:shadow-black/70">
            <img className="w-[80%] rounded mb-[15px]" src={img} alt="flag"/>
            <h2 className='text-lg text-green-400 mb-[10px] font-serif'>{arabicName}</h2>
            <h2 className='text-md text-green-600 mb-[8px]'>{englishName}</h2>
            <h2 className='text-md text-orange-400 font-bold'>{currency}</h2>
        </div>
    );
}

export default CountriesCard;