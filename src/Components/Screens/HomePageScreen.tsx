import React from 'react'
import Button from '../Button';
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
    
    <div className='grid place-items-center h-screen text-center '>
        <div className='w-96 border-2 '>
        <div className='font-medium pt-8 text-2xl place-content-center'>{title}</div>
        <div className='font-normal text-xs text-slate-400'>{subtitle}</div>
        {children}

       <div className='font-normal text-md pb-12 text-slate-400'>
         <Link to={link ||  ""}>{linkLabel}</Link>
         </div>
        </div>
  
      
    </div>
  )
}
