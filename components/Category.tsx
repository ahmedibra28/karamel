import React from 'react'

const Category = ({ label }: { label: string }) => {
  return (
    <div className='text-my-primary uppercase bg-gradient-to-r from-my-primary via-my-secondary to-my-primary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-my-primary dark:focus:ring-my-primary shadow-lg shadow-my-primary/50 dark:shadow-lg dark:shadow-my-primary/80 font-bold rounded-lg text-sm md:text-lg px-5 py-2.5 text-center mx-auto w-40 h-32 flex justify-center items-center'>
      <span className='text-black'> {label}</span>
    </div>
  )
}

export default Category
