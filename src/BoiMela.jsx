import React from 'react'
import Header from './Header'
import Search from './Search'
import BookList from './BookList'
import { useState } from 'react'

const BoiMela = () => {


    const BOOKS = [
            {
                id: 1,
                title: "Atomic Habits",
                author: "James Clear",
                featured: false
            },
            {
                id: 2,
                title: "The Alchemist",
                author: "Paulo Coelho",
                featured: false
            },
            {
                id: 3,
                title: "Clean Code",
                author: "Robert C. Martin",
                featured: false
            },
            {
                id: 4,
                title: "Sapiens: A Brief History of Humankind",
                author: "Yuval Noah Harari",
                featured: false
            },
            {
                id: 5,
                title: "Deep Work",
                author: "Cal Newport",
                featured: false
            },
            {   
                id: 6,
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                featured: false
            },
            {
                id: 7,
                title: "1984",
                author: "George Orwell",
                featured: false
            },
            {
                id: 8,
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                featured: false
            }
    ];

    const [books, setBooks] = useState(BOOKS)
    const[searchTerm, setSearchTerm] = useState("");

    const featureBook = (id) => {
        const featurebook = books.map( (book) => 
            book.id === id ? {...book, featured: !book.featured} : book
        )

        setBooks(featurebook)
    }
    

  return (
    <div className='m-4 p-2'>
        <header className='flex justify-center items-center '>
            <Header />
        </header>
        <Search searchTerm={searchTerm} onSearchBook={setSearchTerm}/>
        <BookList searchTerm={searchTerm} books ={books} onFeatureBook={featureBook}/>    
    </div>
  )
}

export default BoiMela