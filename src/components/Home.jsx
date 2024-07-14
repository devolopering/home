import React from 'react';
import IconColor from '/icon-color.svg';
import LogoColor from '/Logo-color.svg';
import Iconwhite from '/icon-white.svg';
import Logowhite from '/Logo-white.svg';
import Hero from '/hero.svg'
import img1 from '/imag_1.png'
import img2 from '/imag_2.png'
import img3 from '/imag_3.png'

function Home() {
  const links = ['Home', 'About', 'Services', 'Systems'];
  return (
    <div>
      <header>
        <div className='max-w-[1280px] mx-auto flex items-center justify-between py-8 px-4'>
          <a href='#' className="flex">
            <img src={IconColor} alt="icon" />
            <img src={LogoColor} alt="logo" />
          </a>
          <nav className='hidden md-800:block'>
            <ul className='flex items-center gap-12'>
              {links.map((link, index) => (
                <li key={index}>
                  <a className='font-semibold' href="#">{link}</a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className='duration-[.3s] border-[#6610F2] border-2 font-semibold py-4 px-8 rounded-full text-[#6610F2] hover:bg-[#6610F2] hover:text-white'
                >
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className='px-4'>
        <section className='max-w-[618px] m-auto flex flex-col items-center justify-center mt-28'>
            <h1  className='text-[64px] leading-[77px] font-bold text-center m-auto '>Become a better business with us.</h1>
            <p className='max-w-[573px] text-[21px] text-center m-auto mt-[16px] leading-[36px] 
    font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam turpis tortor, ultricies ut justo eu.</p>
            <button className='duration-[.3s] bg-[#6610F2] hover:bg-white hover:text-[#6610F2] border-[#6610F2] border-2 px-[67px] py-[17px] rounded-full text-white font-semibold  mt-[48px] '>Our Business</button>
        </section>

        <section className='mt-[132px] mb-[190px] max-w-[1440px] mx-auto'>
             <img src={Hero} alt="hero" />
        </section>

        <section className='max-w-[1070px] m-auto'>
            <h3 className='text-[58px] leading-[77px] font-bold max-w-[859px] m-auto'>Here is what’s happening in the world of talk business.</h3>

            <div className='flex flex-col gap-[68px] mt-[197px] mb-[38px]'>
            <div className='flex gap-24'>
                <div>
                <p className='font-bold text-[#6610F2] mb-[12px] '>MAY 2021</p>
                <h4 className='font-bold text-[24px]'>Agile focused business services and more.</h4>
                </div>
               <img src={img1} alt="img" />
            </div>

            <div className='flex gap-24' >
                <div>
                <p className='font-bold text-[#6610F2] mb-[12px]  '>JUN 2021</p>
                <h4 className='font-bold text-[24px]'>Agile focused business services and more.</h4>
                </div>
               <img src={img2} alt="img" />
            </div>

            <div className='flex gap-24 ' >
                <div>
                <p className='font-bold text-[#6610F2] mb-[12px]  '>JUN 2021</p>
                <h4 className='font-bold text-[24px]'>Agile focused business services and more.</h4>
                </div>
               <img src={img3} alt="img" />
            </div>

            </div>
            <div className='flex ml-[299px] overflow-x-hidden mb-[137px]   max-w-[365px] border h-[60px] justify-between rounded-md items-center'>
        <button className=' border-r px-[27px] hover:text-[white] hover:bg-[#7749F8] py-[17px]'>Prev</button>
        <div className='hover:text-[white] hover:bg-[#7749F8] border-r px-[27px] py-[17px]'>1</div>
        <div className=' hover:text-[white] hover:bg-[#7749F8]  border-r px-[27px] py-[17px]'>2</div>
        <div className=' hover:text-[white] hover:bg-[#7749F8] border-r px-[27px] py-[17px]'>3</div>
        <button className=' hover:text-[white] hover:bg-[#7749F8] px-[27px] py-[17px]'>Next</button>
      </div>
        </section>
      </main>
      <footer className='bg-[#160530]  px-4 pb-[46px]'>
        <div className='max-w-[1280px] m-auto'>
            <h2 className=' text-[#F2F2F2] text-[58px] font-semibold '>Let’s start working to build a brighter future.</h2>
            <div className='max-w-[597px] ml-auto w-[100%] flex items-center justify-between mt-[11px] px-[26px] py-[25px] border border-[#E0CFFC] mb-[67px] '>
                <input className='w-[80%] bg-transparent border-none outline-none text-white'  type="text"placeholder='Join our mailing list' />
                <button type='submit' className='text-white'>Submit</button>
            </div>
          
                <p className='max-w-[456px] mr-auto text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Elementum posuere eget elementum
                 vulputate elementum viverra sapien tellus aenean.</p>
                 <div className='max-w-[184px] mr-auto flex items-center justify-between text-white mt-[37px]'>
                 <a href='#' className='font-bold'>Fb</a>
                 <a href='#' className='font-bold'>In</a>
                 <a href='#' className='font-bold'>Tw</a>
                 <a href='#'className='font-bold'>Ln</a>
            </div>
            <div className='mt-[120px] flex items-center justify-between'>
               <div className='flex items-center '>
                <img src={Iconwhite} alt="logo" />
                <img src={Logowhite} alt="icon" />
               </div>
               <p className='text-[#F2F2F2] '>Copyright 2021. All rights reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
