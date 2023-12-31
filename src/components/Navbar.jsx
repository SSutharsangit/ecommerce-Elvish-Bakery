import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between bg-slate-200 items-center h-16 sticky top-0 z-50 '>
        <div className='px-4 text-white bg-green-900 h-16 flex items-center justify-center  text-2xl font-serif font-bold rounded-tl-lg'>Elvish</div>
        <div className='flex gap-6 px-4 text-green-900 font-serif font-bold'>
        <div>PRODUCTS</div>
        <div>LOACATIONS</div>
        <div>ABOUT</div>
        <button>SIGNUP</button>
        </div>
        
    </div>
  )
}

export default  Navbar;
