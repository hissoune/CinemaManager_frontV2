import React from 'react';

function PokemonsCard({img, name, hp, type}) {
    return (
        <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded p-[20px] w-[300px] shadow shadow-xl shadow-black/30 text-center font-serif hover:scale-105">
            <img className="w-[100px] h-[100px] bg-cover mb-[10px] rounded-md" src={img} alt="pokemon"/>
            <h2 className="text-xl">{name}</h2>
            <div className='flex justify-center justify-between'>
                <span className="poke-hp">HP: {hp}</span>
                <span className="poke-type">Type: {type}</span>
            </div>
        </div>

    );
}

export default PokemonsCard;