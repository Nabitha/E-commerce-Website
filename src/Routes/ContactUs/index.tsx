import React from 'react'
import threedots from '../../../src/Assets/dots.svg'

export const ContactUs = () => {
  return (
    <div>
        <div className='font-semibold text-slate-400 text-base w-96 bg-white h-80'>
            <div className='font-medium text-black text-4xl'><p>Information About Us</p> </div> 
            is simply dummy text of the printing and typesetting industry. 
            <img src={threedots}/>

            <div className='w-96 h-96'></div>

        </div>
    </div>
  )
}
