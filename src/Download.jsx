import React from 'react'
import download from './assets/img/download.webp'
import qr from './assets/img/qr.png'
import bazar from './assets/img/bazar.png'
import myket from './assets/img/myket.png'


function Download() {
    return (
        <section className='w-full bg-blueL lg:py-44 lg:px-32 px-4 pt-12 ' >

            {/* Download application Banner */}

            <div className='w-full bg-blueT py-16 rounded-[4rem] relative hidden lg:flex'>
                <div className="w-[70%] flex flex-wrap ps-52 ">
                    <h2 className='w-full font-prBlack text-white text-[40px] mb-4'>
                        با اپلیکیشن لندو راحت‌تر وام بگیر
                    </h2>
                    <div className="w-full flex flex-nowrap">
                        <div className='w-[130px] h-[130px] bg-white p-2 flex justify-center items-center me-8'>
                            <figure className='w-[110px]'>
                                <img src={qr} alt="" />
                            </figure>
                        </div>
                        <h4 className='w-fit font-prBold text-white text-[21px] leading-10 xl:pe-24 lg:pe-12 '>
                            با اسکن این کد کیوآر، می‌توانید به راحتی اپلیکیشن لندو را دانلود کنید و راحت‌تر وام بگیرید
                        </h4>
                    </div>
                </div>
                <div className='w-1/3 bg-blueT'></div>
                <figure className='absolute w-[360px] left-20 -top-20'>
                    <img src={download} alt="" />
                </figure>
            </div>


            {/* Banner for Mobile  */}

            <div className='w-full flex flex-wrap lg:hidden'>
                <h2 className='w-[70%] font-prBlack text-white text-[24px] mb-12'>
                    با اپلیکیشن لندو، راحت‌تر وام بگیر
                </h2>
                <div className='w-full flex mb-4'>
                    <img className='w-[120px] me-2 ' src={bazar} alt="" />
                    <img className='w-[120px]' src={myket} alt="" />
                </div>
                <div className='w-[120px] border rounded-md py-1 px-2 flex justify-center bg-bgGray font-primary items-center text-blueL'>
                    <i className="bi bi-arrow-down"></i>
                    <p className='text-[14px]'>دانلود مستقیم</p>
                </div>
                <figure className='w-full flex justify-center translate-y-12'>
                    <img className='w-[300px]' src={download} alt="" />
                </figure>
            </div>
        </section>
    )
}

export default Download