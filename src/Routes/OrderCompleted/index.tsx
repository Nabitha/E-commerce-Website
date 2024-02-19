import React from 'react'
import checkin from '../../../src/Assets/check.svg'
import Button from '../../Components/Button'


export const OrderCompleted = () => {
  return (
    <div className='h-screen grid place-items-center'>
    <div className='grid justify-items-center'>
         <img src={checkin}/>
        <div className='font-medium text-4xl'>Your Order Is Completed!</div>
        <div className='p-4 font-semibold text-base text-gray-400 flex text-center'>ThankYou for your order! Your order has being processed and will be completed within 3-6 <br/> hours. You will recieve an email confirmation when your order is completed.</div>
      <div className='pt-4'> 
      <Button label="Continue shopping" type='Primary'/>   </div>
   
    </div>
    </div>
  )
}
