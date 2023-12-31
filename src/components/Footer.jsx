import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <div>
        <div className='top flex  justify-around'>
        <div className="right" style={{width:"440px"}}>
      <div className='text-green-900 font-serif font-extrabold text-4xl'>Elvish</div>
      <div className='text-gray-400 mt-5'>A holly jolly good time for all filled with homemade graham crackers ,honey almond sperad,milk choclate,sugared candies,frsh fruits and more.</div>
      <button className='py-1 px-4 text-white  font-serif font-medium bg-orange-600 mt-4'>SHOP NOW</button>
    <div className="media mt-3 flex gap-3">
<FacebookOutlinedIcon className='text-orange-600'/>
<TwitterIcon className='text-orange-600'/>
<InstagramIcon className='text-orange-600'/>
    </div>
        </div>
        <div class=" left grid grid-cols-3 gap-20">
   <div>
    <h6 className=' text-green-900 font-bold mb-3'>FOODS</h6>
    <div>Cookies</div>
    <div>Cakes</div>
    <div>Cheescakes</div>
    <div>Cupcakes</div>
    <div>Pastries</div>
   </div>
   <div>
    <h6 className=' text-green-900 font-bold mb-3'>DRINKS</h6>
    <div>Coffee</div>
    <div>Tea</div>
    <div>Hot Cocoa</div>
    <div>Juices</div>
   </div>
   <div>
    <h6 className=' text-green-900 font-bold mb-3'>DRINKWARE</h6>
    <div>Cups</div>
    <div>Mugs</div>
    <div>Tumblers</div>
    <div>Glasees</div>
   </div>
         </div>
    </div>
    <div className="bottom">
        <div className='bg-slate-200 text-center'>© 2023 All rights reserved</div>
    </div>
    </div>
    
  )
}

export default Footer