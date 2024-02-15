import React from 'react'

interface Props{
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const HomePageScreen = ({title,subtitle,children}:Props) => {
  return (
    
    <div className='grid place-items-center h-screen text-center'>
        <div className='w-96  h-96  border-2 '>
        <div className='font-medium pt-8  text-2xl place-content-center'>{title}</div>
        <div className='font-normal text-xs text-slate-400'>{subtitle}</div>
        
        {children}

        </div>
  
      
    </div>
  )
}
