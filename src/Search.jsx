import React from 'react'

const Search = ({searchTerm, onSearchBook}) => {

  return (
    <div className='m-4'>
        <form action="">
            <input 
            type="text" 
            name="" id=""
            value={searchTerm} 
            onChange={(e) => onSearchBook(e.target.value)}
            placeholder='Enter books name...'
            className='bg-teal-100 w-[100%] p-1 rounded-sm border'
            />
        </form>
    </div>
  )
}

export default Search