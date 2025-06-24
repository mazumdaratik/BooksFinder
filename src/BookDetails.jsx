import React from 'react'

const BookDetails = ({title, author}) => {
  return (
    <div className='m-4 rounded-sm p-1 shadow-green-950'>
        <h2 className='text-xl font-bold mb-1'>{title}</h2>
        <p className='text-xl text-gray-600'>{author}</p>
    </div>
  )
}

export default BookDetails