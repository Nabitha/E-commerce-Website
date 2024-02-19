import React from 'react'

interface Props {
    image:string;
    content:string;

}

export const ContactWay = ({image,content}:Props) => {
  return (
    <div className='flex p-8 gap-4 w-96 '>
      <img src={image}/>
      <p className=''>{content}</p>
       

    </div>
  )
}
