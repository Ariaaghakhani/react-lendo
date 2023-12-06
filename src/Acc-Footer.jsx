import { React, useEffect, useRef, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




function Accordion() {
    const [m1, setM1] = useState(true)
    const [m2, setM2] = useState(true)

    const menu1 = useRef()
    const menu2 = useRef()

    const reset = () => {
        setM1(true); setM2(true);
    }
    return (

        <ul className='w-full flex flex-wrap font-primary pt-4 lg:hidden '>

            <li className='w-full py-6 bg-bgGray flex-wrap cursor-pointer mb-4 border-b border-t' onClick={() => { reset(); setM1(!m1) }} >
                <div className='w-full flex justify-between'>
                    <p className='font-prBold'>
                        راهنمای مشتریان
                    </p>
                    <span className={`${m1 ? '' : '-rotate-180'} duration-200`}><ExpandMoreIcon /></span>
                </div>
                <span className={`${m1 ? 'hidden h-0' : ' h-full'} px-8 py-4 text-blueT text-[14px] duration-200`} ref={menu1} >
                    <ul className='w-full px-8'>
                        <li className='text-[14px] mt-3 mb-3'><a href="">آموزش تصویری دریافت وام</a></li>
                        <li className='text-[14px] mb-3'><a href="">راهنما</a></li>
                        <li className='text-[14px] mb-3'><a href="">مدارک لازم</a></li>
                        <li className='text-[14px] mb-3'><a href="">محاسبه اقساط</a></li>
                        <li className='text-[14px] mb-3'><a href="">راهنمای امضای الکترونیکی</a></li>
                        <li className='text-[14px]'><a href="">راهنمای سفته الکترونیکی</a></li>
                    </ul>
                </span>
            </li>

            <li className='w-full py-4 bg-bgGray flex-wrap cursor-pointer mb-4 border-b ' onClick={() => { reset(); setM2(!m2) }} >
                <div className='w-full flex justify-between'>
                    <p className='font-prBold'>لندو</p>
                    <span className={`${m2 ? '' : 'rotate-180'} duration-200`}><ExpandMoreIcon /></span>
                </div>
                <span className={`${m2 ? 'hidden h-0' : 'h-full'} px-8 py-4 text-blueT text-[14px]`} ref={menu2} >
                    <ul className='w-full px-8'>
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
                </span>
            </li>


        </ul>
    )
}

export default Accordion