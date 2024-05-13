import React from 'react'

const Stories = () => {
  
  return (
    <div className='flex flex-col container rounded-sm bg-red-50 my-10 justify-center items-center w-[350px] h-[300px] md:w-[60%] md:h-[500px]'
    style={{backgroundImage: "url('/images/post_ellegiacally_rotten.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}
    >


        <h3 className='text-3xl text-text-[#bab6b6]'>Cooming soon</h3>
        <p className='text-md text-[#bab6b6]'>Explore other categories in this blog or check back later.</p>
    </div>
  )
}

export default Stories