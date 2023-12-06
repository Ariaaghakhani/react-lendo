import { Slide, Slider } from '@mui/material';
// import { createTheme } from '@mui/material/styles';

import React, { useEffect, useRef, useState } from 'react'


function Calc() {
  const price = useRef()
  const month = useRef()
  const [val, setVal] = useState(8)
  const [ind,setInd] = useState(0)
  const [mort,setMort] = useState('')
  const [total,setTotal] = useState('') 
  const [fee,setFee] = useState('')
  const [info,setInfo] = useState(false)
  useEffect(() => {
    let _month = month.current.children
    _month = Object.entries(_month)

    _month.forEach((e,index) => {
      e[1].addEventListener('click', () => {
        for (let i = 0; i <= 2; i++) {
          _month[i][1].classList.remove('text-greenL')
          _month[i][1].classList.remove('bg-[#0ac97327]')
          _month[i][1].style.border = '1px solid #0b2c64'
          _month[i][1].setAttribute('data-index', i)
        }
        e[1].classList.add('text-greenL')
        e[1].classList.add('bg-[#0ac97327]')
        e[1].style.border = '1px solid #0AC974'
      })
    })
    switch (val) {
      case 0:
        price.current.innerText = '۵،۰۰۰،۰۰۰';
        setFee('۷۷۴،۰۰۰')
        if (ind==0){
          setMort('۴۷۰،۵۰۰')
          setTotal('۵،۶۴۶،۰۰۰')
        }
        if (ind==1){
          setMort('۶۱۰،۵۰۰')
          setTotal('۵،۴۹۴،۵۰۰')
        }
        if (ind==2){
          setMort('۸۹۰،۵۰۰')
          setTotal('۵،۳۴۳،۰۰۰')
        }
        break;
      case 1:
        price.current.innerText = '۶،۰۰۰،۰۰۰';
        setFee('۹۲۸،۸۰۰')
        if (ind==0){
          setMort('۵۶۵،۰۰۰')
          setTotal('۶،۷۸۰،۰۰۰')
        }
        if (ind==1){
          setMort('۷۳۲،۵۰۰')
          setTotal('۶،۵۹۲،۵۰۰')
        }
        if (ind==2){
          setMort('۱،۰۶۸،۵۰۰')
          setTotal('۶،۴۱۱،۰۰۰')
        }
        break;

      case 2:
        price.current.innerText = '۷،۰۰۰،۰۰۰';
        setFee('۱،۰۸۳،۶۰۰')
        if (ind==0){
          setMort('۶۵۹،۰۰۰')
          setTotal('۷،۹۰۸،۰۰۰')
        }
        if (ind==1){
          setMort('۸۵۴،۵۰۰')
          setTotal('۷،۶۹۰،۵۰۰')
        }
        if (ind==2){
          setMort('۱،۲۴۶،۵۰۰')
          setTotal('۷،۴۷۹،۰۰۰')
        }
        break;

      case 3:
        price.current.innerText = '۸،۰۰۰،۰۰۰';
        setFee('۱،۲۸۳،۴۰۰')
        if (ind==0){
          setMort('۷۵۳،۰۰۰')
          setTotal('۹،۰۳۶،۰۰۰')
        }
        if (ind==1){
          setMort('۹۷۶،۵۰۰')
          setTotal('۸،۷۸۸،۵۰۰')
        }
        if (ind==2){
          setMort('۱،۴۲۴،۵۰۰')
          setTotal('۸،۵۴۷،۰۰۰')
        }
        break;

      case 4:
        price.current.innerText = '۹،۰۰۰،۰۰۰';
        setFee('۱،۳۹۳،۲۰۰')
        if (ind==0){
          setMort('۸۴۷،۰۰۰')
          setTotal('۱۰،۱۶۴،۰۰۰')
        }
        if (ind==1){
          setMort('۱،۰۹۸،۵۰۰')
          setTotal('۹،۸۸۶،۵۰۰')
        }
        if (ind==2){
          setMort('۱،۶۰۲،۵۰۰')
          setTotal('۹،۶۱۵،۰۰۰')
        }
        break;

      case 5:
        price.current.innerText = '۱۰،۰۰۰،۰۰۰';
        setFee('۱،۵۴۸،۰۰۰')
        if (ind==0){
          setMort('۹۴۱،۰۰۰')
          setTotal('۱۱،۲۹۲،۰۰۰')
        }
        if (ind==1){
          setMort('۱،۲۲۰،۵۰۰')
          setTotal('۱۰،۹۸۴،۵۰۰')
        }
        if (ind==2){
          setMort('۱،۷۸۰،۵۰۰')
          setTotal('۱۰،۶۸۳،۰۰۰')
        }
        break;

      case 6:
        price.current.innerText = '۱۲،۰۰۰،۰۰۰';
        setFee('۱،۸۵۷،۶۰۰')
        if (ind==0){
          setMort('۱،۱۲۹،۵۰۰')
          setTotal('۱۳،۵۵۴،۰۰۰')
        }
        if (ind==1){
          setMort('۱،۴۶۵،۰۰۰')
          setTotal('۱۳،۱۸۵،۰۰۰')
        }
        if (ind==2){
          setMort('۲،۱۳۷،۰۰۰')
          setTotal('۱۲،۸۲۲،۰۰۰')
        }
        break;

      case 7:
        price.current.innerText = '۱۵،۰۰۰،۰۰۰';
        setFee('۲،۳۳۲،۰۰۰')
        if (ind==0){
          setMort('۱،۴۱۱،۵۰۰')
          setTotal('۱۶،۹۳۸،۰۰۰')
        }
        if (ind==1){
          setMort('۱،۸۳۱،۰۰۰')
          setTotal('۱۶،۴۷۹،۰۰۰')
        }
        if (ind==2){
          setMort('۲،۶۷۱،۰۰۰')
          setTotal('۱۶،۰۲۶،۰۰۰')
        }
        break;

      case 8:
        price.current.innerText = '۲۰،۰۰۰،۰۰۰';
        setFee('۳،۰۹۶،۰۰۰')
        if (ind==0){
          setMort('۱،۸۸۲،۰۰۰')
          setTotal('۲۲،۵۸۴،۰۰۰')
        }
        if (ind==1){
          setMort('۲،۴۴۱،۰۰۰')
          setTotal('۲۱،۹۶۹،۰۰۰')
        }
        if (ind==2){
          setMort('۳،۵۶۱،۰۰۰')
          setTotal('۲۱،۳۶۶،۰۰۰')
        }

        break;
    }
  }, [val,ind])

 


  return (
    <>
      <section className=' bg-bgGray flex flex-wrap justify-center md:pb-24 md:pt-12 ms-4 me-4 mb-12 relative'>
        <h2 className='w-full font-prBlack text-blueL text-[1.5rem] md:text-[1.75rem] mb-8 flex justify-center'>
          محاسبه اقساط و ثبت درخواست وام
        </h2>

        {/* Calculator Box */}

        <div className='w-full sm:w-3/4 lg:w-[37.5%] rounded-3xl flex flex-wrap overflow-hidden [box-shadow:0px_100px_80px_rgba(0,0,0,0.07),0px_41.7776px_33.4221px_rgba(0,0,0,0.0503198),0px_22.3363px_17.869px_rgba(0,0,0,0.0417275),0px_12.5216px_10.0172px_rgba(0,0,0,0.035),0px_6.6501px_5.32008px_rgba(0,0,0,0.0282725),0px_2.76726px_2.21381px_rgba(0,0,0,0.0196802)]'>

          {/* Calculator Header */}

          <div className='w-full bg-[#08a15d] h-fit px-2 py-4 text-white'>
            <h3 className='font-prBold text-[16px] mb-4'>دریافت لندو کارت</h3>
            <p className='font-primary text-[14px]'>امکان خرید از تمامی دستگاه‌های کارتخوان و فروشگاه‌های آنلاین</p>
          </div>

          <div className="w-full h-full bg-white flex flex-wrap md:p-4 content-start font-primary text-blueL">

            {/* Calculator 1st Box */}

            <div className='w-full rounded-lg border border-blueL border-opacity-50 my-4 mx-4 p-4'>
              <div className="w-full flex justify-between">
                <p>مبلغ درخواستی (تومان) </p>
                <p className='text-[14px]'><span className='font-prBold text-[20px]' ref={price}> ۲۰،۰۰۰،۰۰۰ </span> تومان </p>
              </div>
              <div className='w-full py-4 mb-4'>
                <Slider
                  defaultValue={8}
                  step={1}
                  min={0}
                  max={8}
                  color='success'
                  onChange={(e) => {
                    setVal(e.target.value)
                  }}
                  sx={{
                    height: '8px',
                    color: '#0Ac974',
                    '& .MuiSlider-thumb': {
                      width: '24px',
                      height: '24px',
                      color: 'white',
                      border: '8px solid #0AC974',
                      '&:hover, &.Mui-focusVisible': {
                        boxShadow: `0px 0px 0px 8px alpha(#0Ac974, 0.16)`,
                      },
                      '&.Mui-active': {
                        boxShadow: `0px 0px 0px 14px alpha(#0Ac974, 0.16)`,
                      },
                    }
                  }}
                />
                <div className='flex justify-between'>
                  <p className='text-[11px] opacity-40'>۲۰ میلیون تومان</p>
                  <p className='text-[11px] opacity-40'>۵ میلیون تومان</p>
                </div>
              </div>
              <div className='w-full flex flex-wrap'>
                <p className='text-[14px] w-full mb-4'>
                  مدت بازپرداخت
                </p>
                <div className='flex text-blueL w-full ' ref={month}>
                  <div className='cursor-pointer [border:1px_solid_#0AC974] bg-[#0ac97327] text-greenL rounded-md  px-9 py-2 text-[12px] lg:text-[15px] me-2 ' onClick={(e)=>{setInd(e.target.getAttribute('data-index'))}}><span className='font-prBold'>۱۲</span> ماهه </div>
                  <div className='cursor-pointer [border:1px_solid_#0b2c64] rounded-md  px-9 py-2 text-[12px] lg:text-[15px] me-2' onClick={(e)=>{setInd(e.target.getAttribute('data-index'))}}><span className='font-prBold' >۹</span> ماهه </div>
                  <div className='cursor-pointer [border:1px_solid_#0b2c64] rounded-md  px-9 py-2 text-[12px] lg:text-[15px] me-2' onClick={(e)=>{setInd(e.target.getAttribute('data-index'))}}><span className='font-prBold' >۶</span> ماهه </div>
                </div>
              </div>
            </div>

            {/* Calculator 2nd Box */}

            <div className='w-full rounded-lg border border-[#0b2c64] border-opacity-50 mx-4 p-4 text-[14px] mb-4 md:mb-0'>
              <div className="w-full flex justify-between mb-4">
                <p>
                  قسط ماهیانه :
                </p>
                <p className='text-[14px]'> <span> {mort} </span> <span className='opacity-50 text-[12px] ms-1'> تومان </span> </p>
              </div>

              <div className="w-full flex justify-between mb-4">
                <p>
                  مجموع بازپرداخت اقساط:
                </p>
                <p className='text-[14px]'> <span> {total} </span> <span className='opacity-50 text-[12px] ms-1'> تومان </span> </p>
              </div>
              <hr />
              <div className="w-full flex justify-between mt-4">
                <p className='flex items-center'>کارمزد و هزینه عملیات:
                  <i className="bi bi-info-circle ms-1" onMouseEnter={()=>{setInfo(true)}} onMouseLeave={()=>{setInfo(false)}}></i>
                </p>
                <p className='text-[14px]'> <span> {fee} </span> <span className='opacity-50 text-[12px] ms-1'> تومان </span> </p>
              </div>
              <div className={`absolute rounded-lg bg-blueL bg-opacity-80 w-[300px] h-[60px]  p-2 text-[11px] text-white ${(info)?'scale-1':'scale-0'} duration-200`}>
                کارمزد و هزینه عملیات را باید بعد از تایید اعتبارسنجی اولیه پرداخت کنید.
              </div>
            </div>
            <div className='w-full hidden md:flex py-4 mx-4 justify-between items-center'>
              <a href="" className='text-[#026ed7] hover:text-[#0082fd] duration-200 hover:duration-200 flex items-center'><i className="bi bi-info-circle me-2 "></i> اطلاعات بیشتر </a>
              <div className='border py-3 px-20 flex justify-center rounded-xl bg-greenL text-white cursor-pointer'>درخواست وام</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Calc




