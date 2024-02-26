import React from 'react'
import { Link } from 'react-router-dom';

interface Props{
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  linkLabel?: string;
  
  link?:string;
}

export const HomePageScreen = ({title,subtitle,children,link,linkLabel}:Props) => {
  return (
    
    <div className='grid place-items-center text-center '>
        <div className='min-w-96 p-4 border-2 '>
        <div className='font-medium text-2xl place-content-center'>{title}</div>
        <div className='font-normal text-xs text-slate-400'>{subtitle}</div>
        {children}
       <div className='font-normal grid place-items-center text-md text-slate-400'>
         <Link to={link ||  ""}>{linkLabel}</Link>
         </div>
        </div>
  </div>
  )
}
