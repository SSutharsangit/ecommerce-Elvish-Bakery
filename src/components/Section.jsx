import React from 'react'

function Section() {
  return (
    <div className='flex justify-between '>
         <div className='z-10 relative left-20 top-40'>
        <p className='text-green-900 font-serif font-extrabold text-6xl '>Elvish specials <br/> baked fresh <br/>every morning</p>
        <p className='text-gray-400 mt-5'>Satisfy your winter cravings and endulge yourself at <br/> Antartica's only bakery guranteed to have of your favourite <br/> holiday desserts in stack ,and baked fresg every moring.</p>
        <button className='text-red-500 border border-red-500 border-2 p-2 mt-5 font-semibold'>GET ME SOME COOKIES</button>
        </div>
        
        <img
          src="https://images.pexels.com/photos/5618031/pexels-photo-5618031.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Description of your image"
          style={{ width: '60%', height: '100vh' }}
          className='rounded'
        />
        
       
        
    </div>
  )
}

export default Section