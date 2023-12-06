

import React from 'react'
import banner from "./assets/img/banner.webp"
import icon1 from "./assets/img/icon1.svg"
import icon2 from "./assets/img/icon2.png"
import icon3 from "./assets/img/icon3.png"
import icon4 from "./assets/img/icon4.png"

function Intro() {

    return (
        <>
            <section className='w-full bg-bgGray h-fit'>

                {/* Main Intro */}

                <section className='w-fit md:w-full hidden md:flex flex-wrap md:px-20 md:pt-24 md:pb-12 py-6 [background:linear-gradient(275.17deg,#12563D_0%,#0C9E5D_100%)] justify-between md:mx-0 mt-4 mx-4 rounded-3xl md:rounded-none translate-y-[3.5rem] md:transalte-y-8'>
                    <div className='w-1/2 md:px-12 ps-8 flex flex-wrap justify-start'>
                        <h1 className='w-full font-prBlack text-[16px] md:text-[3.25rem] text-white mb-7 md:mb-20 leading-loose'>بدون چک و ضامن <br />از لندو وام بگیر</h1>
                        <div className={`w-full h-full `}>
                            <a href="" className={`items-center w-full h-full py-3 md:px-24 px-3 text-[14px] font-primary text-white bg-greenL rounded-xl hover:bg-greenD  duration-300 hover:duration-300`}>درخواست وام</a>
                        </div>
                    </div>
                    <div className='w-1/2 pe-12'>
                        <figure className='w-full mt-12 md:mt-0'>
                            <img src={banner} alt="" />
                        </figure>
                    </div>

                    <div className=' w-full md:flex grow hidden bg-[#2f805f] rounded-3xl font-prBold text-white'>

                        <div className='w-1/4 flex justify-center items-center py-10'>
                            <div className='w-1/4 flex justify-center'>
                                <img className='w-2/5' src={icon1} alt="" />
                            </div>
                            <p className='w-fit text-[16px] flex justify-center'>بدون چک و ضامن</p>
                        </div>

                        <div className='w-1/4 flex justify-center items-center py-10'>
                            <div className='w-1/4 flex justify-center'>
                                <img className='w-2/5' src={icon2} alt="" />
                            </div>
                            <p className='w-fit text-[16px] flex justify-center'>ارائه وام در یک کارت خرید</p>
                        </div>

                        <div className='w-1/4 flex justify-center items-center py-10'>
                            <div className='w-1/4 flex justify-center'>
                                <img className='w-2/5' src={icon3} alt="" />
                            </div>
                            <p className='w-fit text-[16px] flex justify-center'>فرایند تماماً آنلاین</p>
                        </div>

                        <div className='w-1/4 flex justify-center items-center py-10'>
                            <div className='w-1/4 flex justify-center'>
                                <img className='w-2/5' src={icon4} alt="" />
                            </div>
                            <p className='w-fit text-[16px] flex justify-center'>پوشش کل کشور </p>
                        </div>

                    </div>
                </section>

                {/* Intro 1 Mobile */}

                <section className='w-fit md:w-full flex md:hidden flex-wrap md:px-24 md:py-24 py-6 [background:linear-gradient(275.17deg,#12563D_0%,#0C9E5D_100%)] justify-between md:mx-0 mt-4 mx-4 rounded-3xl md:rounded-none translate-y-20 md:transalte-y-8'>
                    <div className='w-1/2 md:px-12 ps-8 flex flex-wrap justify-start'>
                        <h1 className='w-full font-prBlack text-[16px] md:text-[3.25rem] text-white mb-7 md:mb-20 leading-loose'>بدون چک و ضامن <br />از لندو وام بگیر</h1>
                        <div className={`w-full h-full `}>
                            <a href="" className={`items-center w-full h-full py-3 md:px-24 px-3 text-[14px] font-primary text-white bg-greenL rounded-xl hover:bg-greenD  duration-300 hover:duration-300`}>درخواست وام</a>
                        </div>
                    </div>
                    <div className='w-1/2 pe-12'>
                        <figure className='w-full mt-12 md:mt-0'>
                            <img src={banner} alt="" />
                        </figure>
                    </div>

                </section>

                {/* Intro 2 Mobile */}

                <section>
                    <div className='md:hidden h-[100px] relative flex flex-wrap [background:linear-gradient(274.71deg,#0B2C6E_10%,#325FB9_90%)] rounded-3xl font-prBold text-white md:mx-0 mt-24 ms-4 me-4 items-start overflow-hidden'>

                        <div className='w-full h-full absolute top-0 right-0'>

                            <div className="relative top-0 animation-intro">

                                <div className='w-full flex flex-wrap absolute top-0 right-0 justify-between items-center py-6 px-12'>
                                    <img className='w-[7.5%]' src={icon1} alt="" />
                                    <p className='w-fit text-[14px] flex justify-center'>بدون چک و ضامن</p>
                                    <i className="bi bi-chevron-left text-xl "></i>
                                    <div className='w-full flex justify-center mx-auto gap-x-1 translate-y-2'>
                                        <span className='w-[8px] h-[8px] bg-white rounded-[50%] opacity-100'></span>
                                        <span className='w-[8px] h-[8px] bg-white rounded-[50%] opacity-50'></span>
                                        <span className='w-[8px] h-[8px] bg-white rounded-[50%] opacity-50'></span>
                                        <span className='w-[8px] h-[8px] bg-white rounded-[50%] opacity-50'></span>
                                    </div>
                                </div>

                                <div className='w-full flex flex-wrap absolute top-0 right-[100%] justify-between items-center py-6 px-12'>
                                    <img className='w-[7.5%]' src={icon2} alt="" />
                                    <p className='w-fit text-[14px] flex justify-center'>ارائه وام در یک کارت خرید</p>
                                    <i className="bi bi-chevron-left text-xl "></i>
                                    <div className='w-full flex justify-center mx-auto gap-x-1 translate-y-2'>
                                        <span className='w-[8px] h-[8px] bg-white rounded-[50%] opacity-50'></span>
                                        <span className='w-[8px] h-[8px] bg-white rounded-[50%] opacity-100'></span>
                                        <span className='w-[8px] h-[8px] bg-white rounded-[50%] opacity-50'></span>
                                        <span className='w-[8px] h-[8px] bg-white rounded-[50%] opacity-50'></span>
                                    </div>
                                </div>

                                <div className='w-full flex flex-wrap absolute top-0 right-[200%] justify-between items-center py-6 px-12 translate-y-[-200%] translate-x-[100%]'>
                                    <img className='w-[7.5%]' src={icon3} alt="" />
                                    <p className='w-fit text-[14px] flex justify-center'>فرایند تماماً آنلاین</p>
                                    <i className="bi bi-chevron-left text-xl "></i>
                                    <div className='w-full flex justify-center mx-auto gap-x-1 translate-y-2'>
                                        <span className='w-[8px] h-[8px] bg-white rounded-[50%] opacity-50'></span>
                                        <span className='w-[8px] h-[8px] bg-white rounded-[50%] opacity-50'></span>
                                        <span className='w-[8px] h-[8px] bg-white rounded-[50%] opacity-100'></span>
                                        <span className='w-[8px] h-[8px] bg-white rounded-[50%] opacity-50'></span>
                                    </div>
                                </div>

                                <div className='w-full flex flex-wrap absolute top-0 right-[300%] justify-between items-center py-6 px-12'>
                                    <img className='w-[7.5%]' src={icon1} alt="" />
                                    <p className='w-fit text-[14px] flex justify-center'>پوشش کل کشور</p>
                                    <i className="bi bi-chevron-left text-xl "></i>
                                    <div className='w-full flex justify-center mx-auto gap-x-1 translate-y-2'>
                                        <span className='w-[8px] h-[8px] bg-white rounded-[50%] opacity-50'></span>
                                        <span className='w-[8px] h-[8px] bg-white rounded-[50%] opacity-50'></span>
                                        <span className='w-[8px] h-[8px] bg-white rounded-[50%] opacity-50'></span>
                                        <span className='w-[8px] h-[8px] bg-white rounded-[50%] opacity-100'></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Intro