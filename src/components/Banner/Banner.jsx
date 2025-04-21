import React from 'react';
import bannerimg from '../../assets/bannnerimg.png'

const Banner = () => {

   

    return (
        <div className='w-9/12 mx-auto my-14 '>
            <div className="hero bg-base-200 p-28 rounded-3xl">
  <div className="hero-content lg:flex-row flex flex-col-reverse lg:gap-72">
    
    <div className=' space-y-14'>
      <h1 className="text-5xl font-bold leading-16 ">Books to freshen up <br /> your bookshelf</h1>
      <button className="btn bg-[#23BE0A] text-white hover:bg-green-700 p-6 ">Get Started</button>
    </div>

    <img
      src={bannerimg}
      className="max-w-sm "
    />
  </div>
</div>
        </div>
    );
};

export default Banner;