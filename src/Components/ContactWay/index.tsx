import React from 'react'

interface Props {
    image:string;
    content:string;

}

export const ContactWay = ({image,content}:Props) => {
  return (
    <div className='flex p-8 gap-4 '>
      <img src={image}/>
      <p>{content}</p>
       

    </div>
  )
}
