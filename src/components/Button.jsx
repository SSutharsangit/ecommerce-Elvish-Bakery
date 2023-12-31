import React from 'react'

function Button({label}) {
  return (
    <div>
        <button className='border border-green-900 border-12 px-6 py-1 text-green-900 font-semibold mt-2 '>{label}</button>
    </div>
  )
}

export default Button