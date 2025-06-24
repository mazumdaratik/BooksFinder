import React from 'react'
import { Star } from 'lucide-react'

const FeatureBook = ({book , onFeatureBook}) => {
  return (
    <button 
    onClick={() => onFeatureBook(book.id)}
    className='bg-gray-200 rounded cursor-pointer p-1'
    >
        <Star color={book.featured ? "Teal" : "Black"} />
    </button>
  )
}

export default FeatureBook