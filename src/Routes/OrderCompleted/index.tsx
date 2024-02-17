import React from 'react'
import checkin from '../../../src/Assets/check.svg'


export const OrderCompleted = () => {
  return (
    <div className='p-64'>
    <div className='grid justify-items-center'>
         <img src={checkin}/>
        <div className='min-h-14 font-medium text-4xl'>Your Order Is Completed!</div>
        <div className='p-4 font-semibold text-base text-gray-400 flex text-center'>ThankYou for your order! Your order has being processed and will be completed within 3-6 <br/> hours. You will recieve an email confirmation when your order is completed.</div>
      <div className='pt-4'> <button className='bg-pink-500 text-white rounded-md p-2'>Continue Shopping</button></div>
   
    </div>
    </div>
  )
}
