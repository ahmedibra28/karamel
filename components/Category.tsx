import React from 'react'
import BlurImage from './BlurImage'

const Category = ({ label }: { label: string }) => {
  const baseUrl = 'https://farshaxan.blr1.cdn.digitaloceanspaces.com/karamel/'

  const categories = [
    { label: 'Hot Drinks', image: baseUrl + 'hot drink.jpg' },
    { label: 'Cold Drinks', image: baseUrl + 'cold drinks.jpg' },
    { label: 'Karmel Hot Drinks', image: baseUrl + 'karnel hot drinks.jpg' },
    { label: 'Iced Cold Drinks', image: baseUrl + 'iced cold drinks.jpg' },
    {
      label: 'Desert and pastries',
      image: baseUrl + 'desserts and pastries.jpg',
    },
    { label: 'Breakfast', image: baseUrl + 'Breakfast.jpg' },
    { label: 'Chicken', image: baseUrl + 'Chicken.jpg' },
    { label: 'Meat', image: baseUrl + 'meat.jpg' },
    { label: 'Fish', image: baseUrl + 'Fish.jpg' },
    { label: 'Karmel Grill', image: baseUrl + 'Grill.jpg' },
    { label: 'Main course', image: baseUrl + 'main course.jpg' },
    { label: 'Side Orders', image: baseUrl + 'side orders.jpg' },
    { label: 'Pizza', image: baseUrl + 'pizza.jpg' },
    { label: 'Pasta', image: baseUrl + 'pasta.jpg' },
    { label: 'Ice Cream', image: baseUrl + 'Ice cream.jpg' },
  ]

  const item = categories?.find(
    (item) => item.label?.toLowerCase() === label?.toLowerCase()
  )

  return (
    <div className='card h-44 image-full relative shadow-2xl'>
      <figure>
        <BlurImage
          src={item?.image!}
          alt={label}
          width={500}
          height={500}
          className='rounded-xl w-full h-44  shadow-xl'
          objectFit='cover'
        />
      </figure>
      <div className='card-body flex justify-center items-center bg-black/50 z-50 rounded-xl'>
        <h2 className='card-title text-white font-bold uppercase'>
          {item?.label}
        </h2>
      </div>
    </div>
  )
}

export default Category
