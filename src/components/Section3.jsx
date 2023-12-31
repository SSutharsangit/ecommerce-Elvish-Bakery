import React from 'react'

function Section3() {
  return (
    <div className='flex justify-center items-center gap-16 mt-8'>
        <button className='border py-1 px-4 text-white font-mono font-semibold bg-orange-600'>VIEW ALL</button>
        <button className='text-green-900 font-semibold'>CUPCAKES</button>
        <button className='text-green-900 font-semibold'>COOKIES</button>
        <button className='text-green-900 font-semibold'>PASTRIES</button>
        <button className='text-green-900 font-semibold'>LARGE CAKES</button>
    </div>
  )
}

export default Section3
// style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}