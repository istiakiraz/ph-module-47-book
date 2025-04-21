import React from 'react';

const Book = ({book}) => {


    const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;


    
    return (
        <div>
            <div className="card m-11 bg-base-100 w-96 shadow-sm">
  <figure className="p-5 bg-gray-100 m-10">
    <img
      src={image}
      alt={bookName}
      className="rounded-xl h-72 " />
  </figure>

  <div className="px-5 pb-6">
    <div className=' flex space-x-4 '>
        <p className='bg-green-50 text-green-500 p-2 rounded-xl text-sm '>{tags[0]}</p> 
        <p className='bg-green-50 text-green-500 p-2 rounded-xl text-sm '>{tags[1]}</p>
       
    </div>
    <div>
    <h2 className="text-xl font-bold my-4 ">{bookName}</h2>
    <p className=' border-b-2 mb-4 border-gray-200 border-dashed pb-3 ' >By:   {author}</p>
    <div className="flex justify-between">
      <p>{category}</p>
      <p>{rating} ⭐</p>
    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Book;