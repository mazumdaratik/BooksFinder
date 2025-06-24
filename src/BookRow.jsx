import React from 'react'
import BookDetails from './BookDetails'
import FeatureBook from './FeatureBook'

const BookRow = ({book, onFeatureBook}) => {

  return (
    <div className='flex items-center justify-between p-4 bg-teal-50 shadow rounded-lg hover:bg-gray-100 cursor-pointer'>
        <BookDetails title={book.title} author={book.author} />

        <FeatureBook book={book} onFeatureBook={onFeatureBook} />

    </div>
  )
}

export default BookRow