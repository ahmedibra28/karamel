import React from 'react'
import BlurImage from './BlurImage'

interface ItemProp {
  category: string
  item: string
  price: number | string
  image: string
}
const Item = ({ item }: { item: ItemProp }) => {
  const noImageAvailable =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'

  return (
    <div className='card shadow-xl mx-auto bg-white text-gray-700 h-72'>
      <figure>
        <BlurImage
          src={item.image || noImageAvailable}
          alt={item.item}
          width={500}
          height={500}
          className='rounded-xl w-full h-full object-contain'
        />
      </figure>
      <div className='card-body items-center text-center py-3 px-2'>
        <h3 className='md:text-lg text-sm uppercase font-bold leading-nones'>
          {item.item}
        </h3>
        <div className='card-actions'>
          <button className='btn btn-ghost bottom-1 outline-dotted btn-sm text-xs sm:text-md outline-secondary font-bold'>
            {typeof item.price === 'number'
              ? `$${item.price?.toFixed(2)}`
              : item.price}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
