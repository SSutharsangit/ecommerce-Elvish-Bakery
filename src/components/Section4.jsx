import React from 'react'
import Button from '../components/Button';
import Cards from './Cards'
const cardsitems=[
  {
    img:"https://images.pexels.com/photos/15504509/pexels-photo-15504509/free-photo-of-blooming-flowers-and-a-plate-of-macaroon-cookies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name:"Elvsih Macaroon",
    desc:" French strawberry and mint macroons Basked with raspberry-mint marmalade filling."
  }, {
    img:"https://images.pexels.com/photos/9810299/pexels-photo-9810299.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"Nutty brittles",
    desc:"Hershey's dark chocolate brittles filled with walunt and peanut crunch surprises inside."
  }, {
    img:"https://images.pexels.com/photos/3551717/pexels-photo-3551717.png?auto=compress&cs=tinysrgb&w=600",
    name:"Hot Cocoa",
    desc:"Our traditional hot coca topped with creme freche and served with freshly baked chocolate chip cookies."
  }, {
    img:"https://images.pexels.com/photos/6210916/pexels-photo-6210916.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"Merry Berry Drinks",
    desc:"The traditional italian-style holiday cookie,Cranberry ,orange,lime and pomegranate merry punch drinks garnished with florals."
  }, {
    img:"https://images.pexels.com/photos/4819717/pexels-photo-4819717.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"Orange Slice Muffin",
    desc:"Corn muffins baked with chunks of refreshing ornage and topped with caramelized orange slices."
  }, {
    img:"https://images.pexels.com/photos/6062020/pexels-photo-6062020.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"Blitzen Platter",
    desc:"The traditional italian-style holiday cookie platter with cannolis,eclaries,and traditional italian cookies."
  }
  
]
function Section4() {
  return (
    <div className='bg-gray-100 mt-10  mb-5'>
 <div className='flex gap-20  justify-center '  >
    
    <div className='bg-white w-3/6 border relative mt-10'>
   
       <div>
       <img src="https://images.pexels.com/photos/1546892/pexels-photo-1546892.jpeg?a uto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="photo" className="w-full h-60 object-cover"srcset="" />

       </div>
       <div className=' ms-10   mt-5 mb-5'>
       <div className='text-green-900 text-3xl font-mono  font-bold '>Rudolph's Cupcake Suprise</div>
        <div className='text-green-900 font-semibold  '>Nutella-drizzled vanilla buttercream frosting a perfectly baked choclate <br/> godvia cupcake</div>
        <Button label={"VIEW"} />
       </div>
    </div>
    <div className='bg-white w-2/6 border relative mt-10  '>
   
       <div>
       <img src="https://images.pexels.com/photos/301972/pexels-photo-301972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full h-60 object-fit"srcset="" />

       </div>
       <div className=' ms-10   mt-5 mb-5'>
       <div className='text-green-900 text-3xl font-mono  font-bold '>Sea Salt Cookies</div>
        <div className='text-green-900 font-semibold  '>Sea salt sprinked chocolate chip cokies<br/> drizzed with organic-honey <br/>glaze </div>
        <Button label={"VIEW"} />
       </div>
    </div> 
</div>
<div className="grid grid-cols-3 gap-1 ms-16">
        {cardsitems.map((item, index) => (
          <Cards
            key={index}
            img={item.img}
            name={item.name}
            desc={item.desc}
          />
        ))}
      </div>
</div>

   
  )
}

export default Section4