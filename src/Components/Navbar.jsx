import React from 'react'

const Navbar = () => {
  const handleclick = () =>{
    window.open('https://www.instagram.com/chaudhary_sachin7351/', '_blank'); // '_blank' opens in new tab
  }

  const handleLoginClick = () => {
    // Use a proper path from your React routing setup
    window.open('./login', '_self'); // opens the login page in same tab
  };
  return (
   <nav className='flex justify-between bg-slate-800 items-center px-4 h-11   '>
    <div className='text-4xl font-bold'>
      <span className='text-green-700'>&lt;</span>
      <span className='text-white'>पास</span>
      <span className='text-green-700'>word/&gt;</span>
      </div>
    <ul className=''>
      <li className=' flex gap-7 text-sky-300 font-bold'>
        <a className='hover:font-black' href="/">Home</a>
        <a className='hover:font-black' href="/about">about</a>
        <a className='hover:font-black' href="/contact">contact-us</a>
      </li>
    </ul>
    <button className='hover: font-bold'>
      <img onClick={handleclick} className='invert p-5 w-16' src="/icons/instagram.png"  alt=""  />
    </button>
    <button className='text-white font-bold hover:text-green-600' onClick={handleLoginClick}>
      Log-in
    </button>
   </nav> 
      
    
  )   
}

export default Navbar
