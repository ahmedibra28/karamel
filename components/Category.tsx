import React from 'react'

const Category = ({ label }: { label: string }) => {
  return (
    <div className='text-red-800 uppercase bg-gradient-to-r from-yellow-500 via-yellow-200 to-red-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-500 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-bold rounded-lg text-sm md:text-lg px-5 py-2.5 text-center mx-auto w-40 h-32 flex justify-center items-center'>
      <span> {label}</span>
    </div>
  )
}

export default Category
