import React from 'react'
import docs from '../src/assets/img/docs.webp'
import card from '../src/assets/img/card.webp'
import faq from './assets/img/faq.webp'
import Accordion from './Accordion'


const FAQ = () => {
    return (
        <>
            <section className='w-full bg-bgGray md:bg-white pt-4 pb-8 md:pt-12 md:pb-24 md:px-24 lg:px-32 px-4'>

                {/* First Banner  */}

                <div className='w-full rounded-[3rem] hidden py-2 items-center bg-[#d4f4e1] cursor-pointer md:flex justify-between'>
                    <div className='flex ps-12 flex-wrap font-prBlack'>
                        <h4 className='w-full text-[#13274f] text-[2.4vw] mb-4'>برای وام چه مدارکی لازمه؟</h4>
                        <div className='w-fit md:px-4 md:py-2 border bg-[#13274f] text-white flex items-center rounded-3xl text-[1.5vw] font-prBold'>مدارک مورد نیاز<i className="bi bi-chevron-left ms-2 my-1 font-extrabold translate-y-[0.125rem]"></i></div>
                    </div>
                    <div className='px-12 flex justify-end'>
                        <figure className='md:w-[250px] lg:w-[400px] ld:w-4/5 object-cover'>
                            <img src={docs} alt="" />
                        </figure>
                    </div>
                </div>

                {/* First Banner Mobile */}

                <div className='w-full rounded-[3rem] flex py-4 items-center bg-[#d4f4e1] cursor-pointer md:hidden'>
                    <div className='w-full flex flex-wrap font-prBlack ps-4'>
                        <h4 className='w-fit text-[#13274f] text-[2.8vw] mb-4 border'>برای وام چه مدارکی لازمه؟</h4>
                        <div className='w-fit px-4 py-1 border bg-[#13274f] text-white flex items-center rounded-3xl text-[1.5vw] font-prBold'>مدارک مورد نیاز<i className="bi bi-chevron-left ms-2 my-1 font-extrabold translate-y-[0.125rem]"></i></div>
                    </div>
                    <div className=' flex justify-center'>
                        <figure className='w-4/5 object-cover border'>
                            <img src={docs} alt="" />
                        </figure>
                    </div>
                </div>

                {/* Second Banner  */}

                <div className='w-full py-12 flex-wrap hidden md:flex items-center'>
                    <div className="w-1/2  pt-8">
                        <h3 className='w-full font-prBlack text-[48px] text-blueT mb-4'>لندو کارت</h3>
                        <h3 className='w-full font-prBlack text-[48px] text-blueT mb-4'>خدمت جدید لندو!</h3>
                        <p className='w-[82%] font-primary text-[20px] text-blueT mb-8'>با لندو کارت، وامت رو می‌تونی از طریق همه دستگاه‌های کارتخوان و درگاه‌های آنلاین خرج کنی!</p>
                        <div className='px-16 py-3 w-fit text-greenL font-primary border border-greenL rounded-xl hover:text-white hover:bg-greenL hover:duration-200 duration-200 cursor-pointer'>اطلاعات بیشتر</div>
                    </div>
                    <div className="w-1/2">
                        <figure className='w-[620px]'>
                            <img src={card} alt="" />
                        </figure>
                    </div>
                </div>


                {/* Second Banner Mobile  */}

                <div className='w-full py-4 mt-8 flex-wrap flex md:hidden items-center bg-white px-4 rounded-3xl'>
                    <div className="w-full pt-8 mb-8">
                        <h3 className='w-full font-prBlack text-[24px] text-blueT mb-4'>لندو کارت</h3>
                        <h3 className='w-full font-prBlack text-[24px] text-blueT mb-4'>خدمت جدید لندو!</h3>
                        <p className=' font-primary text-[13px] text-blueT mb-8'>با لندو کارت، وامت رو می‌تونی از طریق همه دستگاه‌های کارتخوان و درگاه‌های آنلاین خرج کنی!</p>
                        <div className='px-16 py-3 w-fit text-greenL text-[14px] font-primary border border-greenL rounded-xl hover:text-white hover:bg-greenL hover:duration-200 duration-200 cursor-pointer'>اطلاعات بیشتر</div>
                    </div>
                    <div className="w-full flex justify-center">
                        <figure className=''>
                            <img src={card} alt="" />
                        </figure>
                    </div>
                </div>

                {/* FAQ  */}

                <div className='flex flex-wrap h-full'>
                    <div className="w-1/2 justify-center items-center hidden md:flex">
                        <figure >
                            <img className='w-3/4' src={faq} alt="" />
                        </figure>
                    </div>
                    <div className="w-full md:w-1/2 justify-start content-between">
                        <h2 className='font-prBlack hidden md:flex text-[20px] md:text-[48px] text-blueT pt-12 px-4 md:px-0'>سوالات پرتکرار</h2>
                        <Accordion />
                        <div className='hidden items-center text-[#0082FD] mt-4 md:flex px-6'>
                            <a href="" className='w-fit font-prBold flex items-center justify-between ml-4'> مشاهده سوالات بیشتر <i className="bi bi-arrow-left text-[20px] mr-4 flex items-center"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FAQ