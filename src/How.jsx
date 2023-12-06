import React, { useEffect, useRef, useState } from 'react'
import how1 from './assets/img/how1.webp'
import how2 from './assets/img/how2.webp'
import how3 from './assets/img/how3.webp'
import how4 from './assets/img/how4.webp'
import how5 from './assets/img/how5.webp'
import how6 from './assets/img/how6.webp'


function How() {
    const tab = useRef()
    const text = useRef()
    const pic = useRef()
    const bullet = useRef()
    const tabMobile = useRef()
    const textMobile = useRef()
    const [num, setNum] = useState(0)
    let index = 0

    useEffect(() => {
        let _li = tab.current.children
        let _img = pic.current.children
        let _bul = bullet.current.children
        let _mob = tabMobile.current.children

        _li = Object.entries(_li)
        _img = Object.entries(_img)
        _bul = Object.entries(_bul)
        _mob = Object.entries(_mob)

        _li.forEach((val, ind) => {

            val[1].addEventListener('click', () => {
                setNum(ind)
                index = ind
                for (let i = 0; i < _li.length; i++) {
                    _li[i][1].classList.remove('bg-white')
                    _li[i][1].classList.remove('font-prBlack')
                    _img[i][1].classList.add('opacity-0')
                    _bul[i + 1][1].classList.add('grayscale-[1]')
                }
                _li[index][1].classList.add('bg-white')
                _li[index][1].classList.add('font-prBlack')
                text.current.style.transform = `translateX(${index * 40}vw)`
                _img[index][1].classList.remove('opacity-0')
                _bul[index + 1][1].classList.remove('grayscale-[1]')
                console.log(index);

            })
            // _bul[0][1].addEventListener('click',()=>{
            //     if (index!=0 && index<5) {
            //         index-=1
            //     }
            // })
        })

        _mob.forEach((val,i) =>{
            val[1].addEventListener('click', ()=>{
                // console.log(_mob);
                for (let j=0;j<6;j++){
                    _mob[j][1].classList.remove('text-greenL')
                    _mob[j][1].classList.add('text-darkGray')
                }
                val[1].classList.add('text-greenL')
                textMobile.current.style.right=`-${i*85}vw`
            })
        })
    }, [])

    // console.log(_bul[0][1]);

    return (
        <>
            <section className='h-fit md:w-full grow flex flex-wrap md:mt-0 pt-6 mx-4 md:pt-32 md:px-32 bg-white mt-6 mb-6 md:m-0 rounded-3xl md:rounded-none md:pb-32'>
                <div className="w-full md:w-1/2 flex grow px-6 md:px-0 items-start flex-wrap relative">

                    <div className="howTitle flex items-center w-full ">
                        <span className='hidden md:block [clip-path:polygon(0%_0%,50%_0,50%_50%,100%_50%,100%_100%,0_100%);] w-[24px] h-[24px] bg-greenL ml-5'></span>
                        <h3 className='font-prBlack md:font-prBold text-blueL text-[20px] md:text-[28px]'>مراحل دریافت وام از لندو</h3>
                    </div>

                    {/* Tab for Large Screen */}

                    <div className="howTab w-full md:my-8 overflow-hidden">
                        <ul className='hidden w-[90%] md:flex bg-bgGray px-4 justify-between py-2 font-primary text-blueT text-sm rounded-xl flex-wrap mb-52' ref={tab}>
                            <li className='cursor-pointer px-3 py-1 rounded-xl bg-white font-prBlack'>مرحله ۱</li>
                            <li className='cursor-pointer px-3 py-1 rounded-xl'>مرحله ۲</li>
                            <li className='cursor-pointer px-3 py-1 rounded-xl'>مرحله ۳</li>
                            <li className='cursor-pointer px-3 py-1 rounded-xl'>مرحله ۴</li>
                            <li className='cursor-pointer px-3 py-1 rounded-xl'>مرحله ۵</li>
                            <li className='cursor-pointer px-3 py-1 rounded-xl'>مرحله ۶</li>
                        </ul>

                        <div className='hidden md:flex text-blueT md:absolute top-[40%] w-[40vw] h-full overflow-hidden' >

                            <div className={`w-[240vw] h-full duration-300 relative`} ref={text}>

                                {/* Option 1 */}

                                <div className='w-[40vw] absolute right-0'>
                                    <h3 className='font-prBlack text-[20px] mb-4'>درخواست وام</h3>
                                    <p className='w-[90%] font-primary text-[15px] text-blueT text-justify mb-4 leading-loose'>مبلغ وام و مدت بازپرداخت را انتخاب و درخواست وام خود را ثبت کنید. اگر در بانک آینده حساب ندارید، به‌ صورت آنلاین (با نرم‌افزار <a className='text-[#0082FD] mx-1' href=''>آبانک</a>) یا حضوری مراحل افتتاح حساب را انجام دهید.</p>
                                    <div className='flex items-center text-[#0082FD]'>
                                        <a href="" className='w-fit font-prBold flex items-center justify-between ml-4'>ثبت درخواست <i className="bi bi-arrow-left text-[20px] mr-4 flex items-center"></i></a>
                                    </div>
                                </div>

                                {/* Option 2 */}

                                <div className='w-[40vw] absolute right-[40vw]'>
                                    <h3 className='font-prBlack text-[20px] mb-4'>پرداخت هزینه عملیات و بارگذاری مدارک</h3>
                                    <p className='w-[90%] font-primary text-[15px] text-blueT text-justify mb-4 leading-loose'>حالا باید از طریق حساب کاربری خود، کارمزد و هزینه عملیات لندو را پرداخت کنید و بعد از آن هم مدارک را بارگذاری کنید تا وارد مرحله اعتبارسنجی اولیه شوید.
                                    </p>
                                    <div className='flex items-center text-[#0082FD]'>
                                        <a href="" className='w-fit font-prBold flex items-center justify-between ml-4'>بارگذاری مدارک<i className="bi bi-arrow-left text-[20px] mr-4 flex items-center"></i></a>
                                    </div>
                                </div>

                                {/* Option 3 */}

                                <div className='w-[40vw] absolute right-[80vw]'>
                                    <h3 className='font-prBlack text-[20px] mb-4'>ثبت امضای الکترونیکی</h3>
                                    <p className='w-[90%] font-primary text-[15px] text-blueT text-justify mb-4 leading-loose'>

                                        از طریق نرم‌افزار اختصاصی بانک آینده، امضای الکترونیکی خود را ثبت کنید. با این امضا می‌توانید سفته الکترونیکی و قراردادهای لندو و بانک آینده را به‌صورت آنلاین امضا کنید.


                                    </p>
                                    <div className='flex items-center text-[#0082FD]'>
                                        <a href="" className='w-fit font-prBold flex items-center justify-between ml-4'>آموزش ثبت امضا<i className="bi bi-arrow-left text-[20px] mr-4 flex items-center"></i></a>
                                    </div>
                                </div>

                                {/* Option 4 */}

                                <div className='w-[40vw] absolute right-[120vw]'>
                                    <h3 className='font-prBlack text-[20px] mb-4'>
                                        خرید سفته الکترونیکی
                                    </h3>
                                    <p className='w-[90%] font-primary text-[15px] text-blueT text-justify mb-4 leading-loose'>

                                        حالا باید از طریق سامانه اختصاصی بانک آینده، یک سفته الکترونیکی تهیه و آن را با امضای الکترونیکی خود امضا کنید. فایل سفته خریداری‌شده را هم در حساب کاربری خود بارگذاری کنید.


                                    </p>
                                    <div className='flex items-center text-[#0082FD]'>
                                        <a href="" className='w-fit font-prBold flex items-center justify-between ml-4'>
                                            آموزش خرید سفته
                                            <i className="bi bi-arrow-left text-[20px] mr-4 flex items-center"></i></a>
                                    </div>
                                </div>

                                {/* Option 5 */}

                                <div className='w-[40vw] absolute right-[160vw]'>
                                    <h3 className='font-prBlack text-[20px] mb-4'>
                                        امضای قراردادها

                                    </h3>
                                    <p className='w-[90%] font-primary text-[15px] text-blueT text-justify mb-4 leading-loose'>

                                        بعد از اینکه سفته شما توسط لندو بررسی و تأیید شد، نوبت به مرحله امضای قرارداد می‌رسد. شما باید با امضای الکترونیکی خود، قراردادهای لندو و بانک آینده را به‌شکل آنلاین امضا کنید.


                                    </p>
                                    <div className='flex items-center text-[#0082FD]'>
                                        <a href="" className='w-fit font-prBold flex items-center justify-between ml-4'>
                                            آموزش امضای قرارداد
                                            <i className="bi bi-arrow-left text-[20px] mr-4 flex items-center"></i></a>
                                    </div>
                                </div>

                                {/* Option 6 */}

                                <div className='w-[40vw] absolute right-[200vw]'>
                                    <h3 className='font-prBlack text-[20px] mb-4'>
                                        تایید نهایی بانک و دریافت وام

                                    </h3>
                                    <p className='w-[90%] font-primary text-[15px] text-blueT text-justify mb-4 leading-loose'>

                                        در این مرحله درخواست وام شما توسط بانک نهایی می‌شود و وام لندو در قالب لندو کارت در اختیارتان قرار می‌گیرد. حالا می‌توانید با وام خود خرید انواع کالا یا خدمات را انجام دهید و سپس اقساط آن را به لندو پرداخت کنید.

                                    </p>
                                    <div className='flex items-center text-[#0082FD]'>
                                        <a href="" className='w-fit font-prBold flex items-center justify-between ml-4'>
                                            ورود به حساب کاربری
                                            <i className="bi bi-arrow-left text-[20px] mr-4 flex items-center"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tab for Mobile */}

                    <ul className='w-[100vw] flex md:hidden px-2 py-8 justify-between items-start' ref={tabMobile}>
                        <li className='flex flex-wrap justify-center font-prBold text-greenL text-[0.8125rem] cursor-pointer'>
                            <span className='w-full flex justify-center mb-3'>
                                <i className="bi bi-circle-fill text-[16px] relative flex justify-center items-center">
                                    <i className="w-full h-full absolute bi bi-circle-fill text-[10px] text-white top-[1.5px] left-[-3px]"></i>
                                </i>
                            </span>
                            مرحله ۱
                        </li>
                        <li className='flex flex-wrap justify-center font-prBold text-darkGray text-[0.8125rem] cursor-pointer'>
                            <span className='w-full flex justify-center mb-3'>
                                <i className="bi bi-circle-fill text-[16px] relative flex justify-center items-center">
                                    <i className="w-full h-full absolute bi bi-circle-fill text-[10px] text-white top-[1.5px] left-[-3px]"></i>
                                </i>
                            </span>
                            مرحله ۲
                        </li>
                        <li className='flex flex-wrap justify-center font-prBold text-darkGray text-[0.8125rem] cursor-pointer'>
                            <span className='w-full flex justify-center mb-3'>
                                <i className="bi bi-circle-fill text-[16px] relative flex justify-center items-center">
                                    <i className="w-full h-full absolute bi bi-circle-fill text-[10px] text-white top-[1.5px] left-[-3px]"></i>
                                </i>
                            </span>
                            مرحله ۳
                        </li>
                        <li className='flex flex-wrap justify-center font-prBold text-darkGray text-[0.8125rem] cursor-pointer'>
                            <span className='w-full flex justify-center mb-3'>
                                <i className="bi bi-circle-fill text-[16px] relative flex justify-center items-center">
                                    <i className="w-full h-full absolute bi bi-circle-fill text-[10px] text-white top-[1.5px] left-[-3px]"></i>
                                </i>
                            </span>
                            مرحله ۴
                        </li>
                        <li className='flex flex-wrap justify-center font-prBold text-darkGray text-[0.8125rem] cursor-pointer'>
                            <span className='w-full flex justify-center mb-3'>
                                <i className="bi bi-circle-fill text-[16px] relative flex justify-center items-center">
                                    <i className="w-full h-full absolute bi bi-circle-fill text-[10px] text-white top-[1.5px] left-[-3px]"></i>
                                </i>
                            </span>
                            مرحله ۵
                        </li>
                        <li className='flex flex-wrap justify-center font-prBold text-darkGray text-[0.8125rem] cursor-pointer'>
                            <span className='w-full flex justify-center mb-3'>
                                <i className="bi bi-circle-fill text-[16px] relative flex justify-center items-center">
                                    <i className="w-full h-full absolute bi bi-circle-fill text-[10px] text-white top-[1.5px] left-[-3px]"></i>
                                </i>
                            </span>
                            مرحله ۶
                        </li>
                    </ul>
                    <div className='md:hidden flex text-blueT w-[100vw] overflow-hidden justify-center' >

                        <div className={`w-[600vw] h-full duration-300 relative right-[]`} ref={textMobile}> 


                            <div className='w-[85vw] top-0 flex flex-wrap px-2 mb-10 translate-x-[100%]'>
                                <h3 className='font-prBlack text-[20px] mb-4'>درخواست وام</h3>
                                <p className='w-full font-primary text-[15px] text-blueT mb-4 leading-loose '>مبلغ وام و مدت بازپرداخت را انتخاب و درخواست وام خود را ثبت کنید. اگر در بانک آینده حساب ندارید، به‌ صورت آنلاین (با نرم‌افزار <a className='text-[#0082FD] mx-1' href=''>آبانک</a>) یا حضوری مراحل افتتاح حساب را انجام دهید.</p>
                                <figure className='w-[90%] duration-200 mt-2 mx-auto'>
                                    <img className='' src={how1} alt="" />
                                </figure>
                            </div>

                            {/* Option 1 */}

                            <div className='w-[85vw] absolute top-0 right-0 px-2'>
                                <h3 className='font-prBold text-[0.875rem] mb-4'>درخواست وام</h3>
                                <p className='w-full font-primary text-[15px] text-blueT mb-8 leading-loose '>مبلغ وام و مدت بازپرداخت را انتخاب و درخواست وام خود را ثبت کنید. اگر در بانک آینده حساب ندارید، به‌ صورت آنلاین (با نرم‌افزار <a className='text-[#0082FD] mx-1' href=''>آبانک</a>) یا حضوری مراحل افتتاح حساب را انجام دهید.</p>
                                <figure className='w-[90%] duration-200 mt-2 mx-auto'>
                                    <img className='' src={how1} alt="" />
                                </figure>
                            </div>

                            {/* Option 2 */}

                            <div className='w-[85vw] absolute top-0 right-[85vw] px-2'>
                                <h3 className='font-prBold text-[0.875rem] mb-4'>پرداخت هزینه عملیات و بارگذاری مدارک</h3>
                                <p className='w-[90%] font-primary text-[15px] text-blueT text-justify mb-8 leading-loose'>حالا باید از طریق حساب کاربری خود، کارمزد و هزینه عملیات لندو را پرداخت کنید و بعد از آن هم مدارک را بارگذاری کنید تا وارد مرحله اعتبارسنجی اولیه شوید.
                                </p>
                                <figure className='w-[90%] duration-200 mt-2 mx-auto'>
                                    <img className='' src={how2} alt="" />
                                </figure>
                            </div>

                            {/* Option 3 */}

                            <div className='w-[85vw] absolute top-0 right-[170vw] px-2'>
                                <h3 className='font-prBold text-[0.875rem] mb-4'>ثبت امضای الکترونیکی</h3>
                                <p className='w-[90%] font-primary text-[15px] text-blueT text-justify mb-8 leading-loose'>
                                    از طریق نرم‌افزار اختصاصی بانک آینده، امضای الکترونیکی خود را ثبت کنید. با این امضا می‌توانید سفته الکترونیکی و قراردادهای لندو و بانک آینده را به‌صورت آنلاین امضا کنید.
                                </p>
                                <figure className='w-[90%] duration-200 mt-2 mx-auto'>
                                    <img className='' src={how3} alt="" />
                                </figure>
                            </div>

                            {/* Option 4 */}

                            <div className='w-[85vw] absolute top-0 right-[255vw] px-2'>
                                <h3 className='font-prBold text-[0.875rem] mb-4'>
                                    خرید سفته الکترونیکی
                                </h3>
                                <p className='w-[90%] font-primary text-[15px] text-blueT text-justify mb-8 leading-loose'>
                                    حالا باید از طریق سامانه اختصاصی بانک آینده، یک سفته الکترونیکی تهیه و آن را با امضای الکترونیکی خود امضا کنید. فایل سفته خریداری‌شده را هم در حساب کاربری خود بارگذاری کنید.
                                </p>
                                <figure className='w-[90%] duration-200 mt-2 mx-auto'>
                                    <img className='' src={how4} alt="" />
                                </figure>
                            </div>

                            {/* Option 5 */}

                            <div className='w-[85vw] absolute top-0 right-[340vw] px-2'>
                                <h3 className='font-prBold text-[0.875rem] mb-4'>
                                    امضای قراردادها
                                </h3>
                                <p className='w-[90%] font-primary text-[15px] text-blueT text-justify mb-8 leading-loose'>
                                    بعد از اینکه سفته شما توسط لندو بررسی و تأیید شد، نوبت به مرحله امضای قرارداد می‌رسد. شما باید با امضای الکترونیکی خود، قراردادهای لندو و بانک آینده را به‌شکل آنلاین امضا کنید.
                                </p>
                                <figure className='w-[90%] duration-200 mt-2 mx-auto'>
                                    <img className='' src={how5} alt="" />
                                </figure>
                            </div>

                            {/* Option 6 */}

                            <div className='w-[85vw] absolute top-0 right-[425vw] px-2'>
                                <h3 className='font-prBold text-[0.875rem] mb-4'>
                                    تایید نهایی بانک و دریافت وام

                                </h3>
                                <p className='w-[90%] font-primary text-[15px] text-blueT text-justify mb-8 leading-loose'>
                                    در این مرحله درخواست وام شما توسط بانک نهایی می‌شود و وام لندو در قالب لندو کارت در اختیارتان قرار می‌گیرد. حالا می‌توانید با وام خود خرید انواع کالا یا خدمات را انجام دهید و سپس اقساط آن را به لندو پرداخت کنید.
                                </p>
                                <figure className='w-[90%] duration-200 mt-2 mx-auto'>
                                    <img className='' src={how6} alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="hidden sliderImg w-full md:w-1/2 md:flex grow flex-wrap justify-end items-center relative pb-52" ref={pic}>
                    <figure className='w-3/4 absolute top-0 duration-200'>
                        <img className='w-[90%]' src={how1} alt="" />
                    </figure>
                    <figure className='w-3/4 absolute top-0 opacity-0 duration-200'>
                        <img className='w-[90%]' src={how2} alt="" />
                    </figure>
                    <figure className='w-3/4 absolute top-0 opacity-0 duration-200'>
                        <img className='w-[90%]' src={how3} alt="" />
                    </figure>
                    <figure className='w-3/4 absolute top-0 opacity-0 duration-200'>
                        <img className='w-[90%]' src={how4} alt="" />
                    </figure>
                    <figure className='w-3/4 absolute top-0 opacity-0 duration-200'>
                        <img className='w-[90%]' src={how5} alt="" />
                    </figure>
                    <figure className='w-3/4 absolute top-0 opacity-0 duration-200'>
                        <img className='w-[90%]' src={how6} alt="" />
                    </figure>

                    <div className='hidden md:flex w-[220px] border z-[1] absolute bottom-0 right-8 p-2 rounded-lg  flex-wrap items-center justify-between bg-white' ref={bullet}>
                        <i className={`bi bi-chevron-right font-black text-[28px] flex justify-center items-center text-blueL opacity-50 duration-200 w-[36px] h-[36px] rounded-[50%] ${num != 0 ? 'cursor-pointer hover:bg-slate-100 hover:opacity-100 hover:duration-200' : 'cursor-default'}`}></i>
                        <span className='w-[12px] h-[12px] bg-greenL rounded-[50%] duration-200'></span>
                        <span className='w-[12px] h-[12px] bg-greenL grayscale-[1] rounded-[50%] duration-200'></span>
                        <span className='w-[12px] h-[12px] bg-greenL grayscale-[1] rounded-[50%] duration-200'></span>
                        <span className='w-[12px] h-[12px] bg-greenL grayscale-[1] rounded-[50%] duration-200'></span>
                        <span className='w-[12px] h-[12px] bg-greenL grayscale-[1] rounded-[50%] duration-200'></span>
                        <span className='w-[12px] h-[12px] bg-greenL grayscale-[1] rounded-[50%] duration-200'></span>
                        <i className={`bi bi-chevron-left font-black text-[28px] flex justify-center items-center text-blueL opacity-50 duration-200 w-[36px] h-[36px] rounded-[50%] ${num != 5 ? 'cursor-pointer hover:bg-slate-100 hover:opacity-100 hover:duration-200' : 'cursor-default'}`}></i>
                    </div>
                </div>
            </section>
            <br />
        </>
    )
}

export default How