// import React, { useEffect, useState } from 'react';

import { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({data}) => {

    

    

    // const [allBooks, setAllBooks] = useState([])

    // useEffect(()=>{
    //     fetch('booksData.json')
    //     .then(res=> res.json())
    //     .then(data => setAllBooks(data) )

    // },[])
    return (
        <div>
            <h1 className='text-center font-bold p-4 text-4xl '> Books</h1>
            
            <Suspense fallback= {<span>loading...</span>} >
            <div className=' grid grid-cols-1 md:grid-cols-2 pl-5 lg:grid-cols-3 w-9/12 mx-auto   '>
            {
               data.map((book)=> <Book key={book.bookId} book={book} ></Book>)
            }
            </div>
            </Suspense>

        </div>
    );
};

export default Books;