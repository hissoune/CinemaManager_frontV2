import React from 'react'
import { useFormData } from '../../Hooks/useFormData'

export default function AddingPopUp() {

    const { onChange, formData, handlSubmit } = useFormData()
    
    return (
        <div className='h-screen fixed top-0 left-0 right-0 bg-black/70'>
            <div className='relative left-1/3 w-1/3 top-1/2 bg-black p-4 rounded-lg'>
                <h1 className='text-white text-center mb-4'>Adding Countrie</h1>
                <div className='flex flex-col gap-y-4 w-[85%] mx-auto'>
                    <input type="text" placeholder='name in Arabic' name='arabName' onChange={(e) => onChange(e.target)} value={formData.arabName} />
                    <input type="text" placeholder='name in English' name='englishName' onChange={(e) => onChange(e.target)} value={formData.englishName} />
                    <input type="file" placeholder='' name='media' onChange={(e) => onChange(e.target)} value={formData.media} />
                </div>
                <button className='bg-gray-200' onClick={handlSubmit}   >Submit</button>

            </div>
        </div>
    )
}
