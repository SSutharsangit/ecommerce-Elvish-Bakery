import React from 'react'
import Button from '../components/Button';
function Cards({img,name,desc}) {
  return (
    <div className='bg-white w-5/6 border relative mt-10  '>
   
    <div>
    <img src={img} className="w-full h-60 object-cover"srcset="" />

    </div>
    <div className=' ms-5  mt-5 mb-5'>
    <div className='text-green-900 text-3xl font-mono  font-bold '>{name}</div>
     <div className='text-green-900 font-semibold  '>{desc}</div>
     <Button label={"VIEW"}  />
    </div>
 </div> 
  )
}

export default Cards