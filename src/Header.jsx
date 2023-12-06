import React, { useState } from 'react'
import logo from './assets/img/logo.png'
import './assets/css/master.css'


export default function Header() {
    const [vis,setVis]=useState(true)
    return (
        <>
            <section className={'navBar fixed top-0 left-0 w-full flex flex-wrap justify-between items-center px-12 md:px-32 border font-primary font-[400] text-blueL shadow-md bg-white z-50'}>
                <div className=' flex flex-wrap justify-start items-center py-6'>
                    <div className=" flex items-center">
                        <a href="" className=''>
                            <img src={logo} alt="" className=' w-[110px]' />
                        </a>

                    </div>
                    <ul className={`md:flex flex-wrap text-[14px] items-center justify-start hidden`}>
                        <li><a href="" className='ms-20 h-[25px]'>لندو</a></li>
                        <li><a href="" className='ms-7 h-[25px]'>چطور وام بگیرم؟</a></li>
                        <li><a href="" className='ms-7 h-[25px]'>راهنما</a></li>
                    </ul>
                </div>

                <div className='text-[16px] flex items-center justify-center relative'>

                    <div className={`w-full h-full me-5 sm:me-10 md:me-0 `}>
                        <a href="" className={`border  items-center w-full h-full  py-2 px-3 md:py-3 md:px-6 [border:1px_solid] border-blueL rounded-xl hover:text-white hover:bg-blueL duration-300 hover:duration-300`}>ورود / ثبت نام</a>
                    </div>
                    <div className="hamMenu flex flex-wrap md:hidden w-[20px] h-[15px] items-center justify-center cursor-pointer" onClick={()=>{
                        setVis(!vis)
                    }}>
                        <span className='w-[20px] bg-blueL h-[2px] '></span>
                        <span className='w-[20px] bg-blueL h-[2px] '></span>
                        <span className='w-[20px] bg-blueL h-[2px] '></span>
                    </div>
                    <div className={`dropMenu absolute bg-white border w-[150px] h-[150px] top-[100%] left-0 rounded-md drop-shadow p-4 flex md:hidden ${vis?"invisible":"visible"} ${vis?"opacity-0":"opacity-100"} duration-300`} >
                        <ul className={`droped flex flex-wrap content-between w-full h-full `}>
                            <li className='w-full h-1/3 items-center flex'><a className='w-full h-full flex items-center opacity-70 hover:opacity-100 duration-300 hover:duration-300' href="">لندو</a></li>
                            <li className='w-full h-1/3 items-center flex'><a className='w-full h-full flex items-center opacity-70 hover:opacity-100 duration-300 hover:duration-300' href="">چطور وام بگیرم؟</a></li>
                            <li className='w-full h-1/3 items-center flex'><a className='w-full h-full flex items-center opacity-70 hover:opacity-100 duration-300 hover:duration-300' href="">راهنما</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

