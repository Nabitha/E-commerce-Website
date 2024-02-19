import React from 'react'
import threedots from '../../../src/Assets/dots.svg'
import bluedot from '../../../src/Assets/dotblue.svg'
import reddot from '../../../src/Assets/dotred.svg'
import yellowdot from '../../../src/Assets/dotyellow.svg'
import greendot from '../../../src/Assets/dotgreen.svg'
import { ContactWay } from '../../Components/ContactWay'


export const ContactUs = () => {
  
  return (
    <div>

     <div className='flex justify-center pt-14 gap-14'>
      
      <div className='font-medium w-96 text-4xl'>Information About us
      
      <p className='text-base pt-2 font-semibold text-gray-600'>Contrary to looked up one of the more obscure of the more obscure Latin  to  looked Latin  to  looked up one of the more obscure L words, consectetur,</p> 
     <img className='pt-2' src={threedots}/>
      </div> 
      <div className='font-medium  text-4xl '>Contact Way
      <div className=' grid grid-cols-2 text-base pt-2 font-semibold text-gray-600'>
      <ContactWay image={bluedot} content="Tel: 877-67-88-99
E-Mail: shop@store.com"/>
<ContactWay image={reddot} content='Support Forum For over 24hr '/>
<ContactWay image={yellowdot} content='20 Margaret st, London
Great britain, 3NM98-LK'/>
<ContactWay image={greendot} content='Free standard shipping
on all orders.'/></div>
</div>





     
     

    
</div>

</div>


      
    
  )
}
