import React from 'react'
import BlurImage from './BlurImage'

const Category = ({ label }: { label: string }) => {
  const image =
    'https://farshaxan.blr1.cdn.digitaloceanspaces.com/karamel/283A2707.JPG'

  return (
    <div className='card h-38 image-full relative shadow-2xl'>
      <figure>
        <BlurImage
          src={image}
          alt={label}
          width={500}
          height={500}
          className='rounded-xl w-full h-38 shadow-xl'
        />
      </figure>
      <div className='card-body flex justify-center items-center bg-black/50 z-50 rounded-xl'>
        <h2 className='card-title text-white font-bold uppercase'>{label}</h2>
      </div>
    </div>
  )
}

export default Category
