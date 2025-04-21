import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const {id} =useParams()

    const bookId = parseInt(id)
    
    const data = useLoaderData()
    const singleBook = data.find(book=> book.bookId == bookId);
    
    const {bookName, author, image, review,  category, tags, } = singleBook;

    return (
        <div>
            

           <div className='w-7/12 py-10 mx-auto items-center   grid grid-cols-2'>
            <div><img className='p-10 bg-gray-200 w-[400px]  rounded-3xl h-[500px]' src={image} alt={bookName} /></div>
            <div>
                <h1 className='text-4xl font-bold playfair my-4'>{bookName}</h1>
                <h4 className='text-xl text-[#131313CC] border-b-2 mb-4 border-gray-200 pb-3  '>By : {author}</h4>
                <h4 className='text-xl border-b-2 mb-4 border-gray-200 pb-3'>{category}</h4>

                <p className=' my-4 text-[#131313CC]'> <span className='font-bold'>Review</span> : {review}</p>
                 
                <div className='flex gap-4 items-center'>
                    <span className='font-bold'>Tag</span> <p  className='bg-green-50 text-green-500 p-2 rounded-xl text-sm '> #{tags[0]} </p> <p  className='bg-green-50 text-green-500 p-2 rounded-xl text-sm '> #{tags[1]}</p>
                </div>

                <div className=' space-x-3 my-4'>
                    <button className='btn' >Read</button>
                    <button className='btn btn-primary'>Wishlist</button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default BookDetails;