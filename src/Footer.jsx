import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ayande from './assets/img/ayande.png'
import web from './assets/img/web.png'
import bazar from './assets/img/bazar.png'
import myket from './assets/img/myket.png'
import Acc from './Acc-Footer.jsx'

function Footer() {

    return (
        <>
            <section className='w-full bg-bgGray lg:bg-white pt-12 lg:pt-24 pb-20 lg:px-32 px-4'>

                {/* Footer  */}

                <div className="w-full hidden lg:block">
                    <div className='w-full bg-blueL py-8 rounded-2xl px-16 mb-10'>
                        <div className="flex flex-wrap text-white">
                            <p className=' font-prBold text-white me-8'>لندو در شبکه های اجتماعی</p>
                            <a href="http://instagram.com/dev.aria.agk"><InstagramIcon sx={{ fontSize: '30px' }} className='me-4' /></a>
                            <a href="http://linkedin.com/in/aria-aghakhani/"><LinkedInIcon sx={{ fontSize: '30px' }} className='me-4' /></a>
                            <a href="https://github.com/Ariaaghakhani"><GitHubIcon sx={{ fontSize: '30px' }} className='me-4' /></a>
                            <a href="https://dev-aria.com"><LanguageIcon sx={{ fontSize: '30px' }} className='me-4' /></a>
                        </div>
                    </div>
                    <div className="w-full flex justify-between">
                        <div className="grow flex flex-nowrap ">
                            <ul className='font-primary text-blueT me-12'>
                                <span className='font-prBold'>
                                    راهنمای مشتریان
                                </span>
                                <li className='text-[14px] mt-3 mb-3'><a href="">آموزش تصویری دریافت وام</a></li>
                                <li className='text-[14px] mb-3'><a href="">راهنما</a></li>
                                <li className='text-[14px] mb-3'><a href="">مدارک لازم</a></li>
                                <li className='text-[14px] mb-3'><a href="">محاسبه اقساط</a></li>
                                <li className='text-[14px] mb-3'><a href="">راهنمای امضای الکترونیکی</a></li>
                                <li className='text-[14px]'><a href="">راهنمای سفته الکترونیکی</a></li>
                            </ul>
                            <ul className='font-primary text-blueT me-8'>
                                <span className='font-prBold'>
                                    لندو
                                </span>
                                <li className='text-[14px] mt-3 mb-3'>
                                    <a href="">
                                        درباره ما
                                    </a>
                                </li>
                                <li className='text-[14px] mb-3'>
                                    <a href="">
                                        تماس با ما
                                    </a>
                                </li>
                                <li className='text-[14px] mb-3'>
                                    <a href="">
                                        داستان لندو!
                                    </a>
                                </li>
                                <li className='text-[14px] mb-3'>
                                    <a href="">
                                        از ایران رنتر تا لندو
                                    </a>
                                </li>
                                <li className='text-[14px] mb-3'>
                                    <a href="">
                                        فرهنگ ما
                                    </a>
                                </li>
                                <li className='text-[14px] mb-3'>
                                    <a href="">
                                        مزایای شغلی ما
                                    </a>
                                </li>
                                <li className='text-[14px]'>
                                    <a href="">
                                        بلاگ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-wrap justify-end items-start '>
                            <div className='flex w-full justify-end h-[100px]'>
                                <figure >
                                    <img className='w-[257px] object-contain' src={ayande} alt="" />
                                </figure>
                                <figure className='w-[100px] h-[100px] border rounded-lg ms-4'>
                                    <img src={web} alt="" />
                                </figure>
                            </div>
                            <div className='bg-blueL py-8 px-8 rounded-lg flex flex-nowrap items-center'>
                                <p className='font-prBold text-white me-8 '>دانلود اپلیکیشن لندو</p>
                                <figure className='w-[150px] me-4'><img src={myket} alt="" /></figure>
                                <figure className='w-[135px]'><img src={bazar} alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Footer Mobile  */}

                <div className='w-full flex lg:hidden text-blueL'>
                    <div className="w-full flex flex-wrap justify-center">
                        <p className='w-fit text-center font-primary mb-8'>لندو در شبکه های اجتماعی</p>
                        <div className='flex w-full justify-center mx-auto border'>
                            <a href="http://instagram.com/dev.aria.agk" className='border me-8 p-1 w-[36px] h-[36px] flex justify-center items-center rounded-full bg-slate-200'><InstagramIcon sx={{ fontSize: '20px' }} /></a>
                            <a href="http://linkedin.com/in/aria-aghakhani/" className='border me-8 p-1 w-[36px] h-[36px] flex justify-center items-center rounded-full bg-slate-200'><LinkedInIcon sx={{ fontSize: '20px' }} /></a>
                            <a href="https://github.com/Ariaaghakhani" className='border me-8 p-1 w-[36px] h-[36px] flex justify-center items-center rounded-full bg-slate-200'><GitHubIcon sx={{ fontSize: '20px' }} /></a>
                            <a href="https://dev-aria.com" className='border p-1 w-[36px] h-[36px] flex justify-center items-center rounded-full bg-slate-200'><LanguageIcon sx={{ fontSize: '20px' }} /></a>
                        </div>
                        <Acc classNamew='w-full' />
                        <div className="w-full bg-white px-4 py-4 rounded-xl flex mb-8">
                            <div className="w-1/2">
                                <p className='font-prBold text-[14px]'>دانلود اپلیکیشن لندو</p>
                            </div>
                            <div className="w-1/2 flex flex-wrap">
                                <figure className='w-full flex justify-end mb-4'>
                                    <a href=""><img className='w-[150px]' src={bazar} alt="" /></a>
                                </figure>
                                <figure className='w-full flex justify-end'>
                                    <a href=""><img className='w-[150px] border rounded-md' src={myket} alt="" /></a>
                                </figure>
                            </div>
                        </div>
                        <div className="w-full flex flex-wrap bg-white px-4 py-4 rounded-xl justify-between items-center">
                            <figure><img className='w-[200px]' src={ayande} alt="" /></figure>
                            <figure><img className='w-[80px] border rounded-md' src={web} alt="" /></figure>
                        </div>
                    </div>
                </div>

            </section>
            <div className='w-full bg-bgGray py-4 font-prThin text-blueL flex justify-center flex-wrap'>
                <p className='text-[14px] me-8'>
                کلیه حقوق این سایت متعلق به <a className='font-primary underline' href="https://www.dev-aria.com">آریا آقاخانی</a> است
                </p>
                <p className='text-[14px]'>
                    Copyrights - <a className='font-primary underline' href="https://www.dev-aria.com">Aria AG.</a> - ۱۴۰۲
                </p>
            </div>
        </>
    )
}

export default Footer