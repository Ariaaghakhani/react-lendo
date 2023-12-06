import { React, useEffect, useRef, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




function Accordion() {
  const [m1, setM1] = useState(true)
  const [m2, setM2] = useState(true)
  const [m3, setM3] = useState(true)
  const [m4, setM4] = useState(true)
  const [m5, setM5] = useState(true)
  const [m6, setM6] = useState(true)
  const [m7, setM7] = useState(true)
  const menu1 = useRef()
  const menu2 = useRef()
  const menu3 = useRef()
  const menu4 = useRef()
  const menu5 = useRef()
  const menu6 = useRef()
  const menu7 = useRef()
  const reset = () => {
    setM1(true); setM2(true); setM3(true); setM4(true); setM5(true); setM6(true); setM7(true)
  }
  return (
    <ul className='w-full flex flex-wrap bg-white font-primary pt-4 py-4 mt-4 rounded-3xl md:rounded-none px-4'>
      <h2 className='font-prBlack text-[20px] md:hidden text-blueT pt-12 md:px-0 mb-4'>سوالات پرتکرار</h2>

      <li className='w-full py-6 md:rounded-xl flex md:bg-bgGray flex-wrap cursor-pointer mb-4 border-b md:border-none md:px-6' onClick={() => { reset(); setM1(!m1) }} >
        <div className='w-full flex justify-between'>
          <p className=''>برای دریافت وام لندو چه مدارکی باید داشته باشم؟</p>
          <span className={`${m1 ? '' : '-rotate-180'} duration-200`}><ExpandMoreIcon /></span>
        </div>
        <span className={`${m1 ? 'hidden h-0' : ' h-full'} px-8 py-4 text-blueT text-[14px] duration-200`} ref={menu1} >
          برای دریافت وام تصویر این مدارک مورد نیاز است:
          <ol className='list-decimal'>
            <li>
              تصویر پشت و روی کارت ملی جدید یا رسید تعویض کارت ملی قدیمی
            </li>
            <li>تصویر تمامی صفحات شناسنامه</li>
            <li>تصویر یکی از این مدارک (با مهر و تاریخ به‌روز):
              <ul className='list-disc -translate-x-4'>
                <li>گزارش معدل (میانگین) حساب بانکی با مهر و امضای به روز شعبه (حسابی که بیشترین میزان و مبلغ تراکنش را با آن دارید)</li>
                <li>فیش حقوقی به همراه سابقه‌ی بیمه (با امضا و مهر دارای شماره ثبت)
                </li>
                <li>گواهی اشتغال به‌ کار به همراه سابقه‌ی بیمه (با امضا و مهر دارای شماره ثبت)
                </li>
                <li>پروانه کسب یا کارت مباشرت
                </li>
              </ul>
            </li>
            <li>گواهی ثنا (برگه تایید ثبت‌نام در سامانه ثنا)</li>
          </ol>
          برای دریافت جزئیات بیشتر در مورد مدارک، وارد <a href="" className='text-greenL'>این صفحه</a> شوید

          علاوه‌بر این مدارک، در فرایند دریافت وام یک مرحله برای بارگذاری سفته الکترونیکی وجود دارد. فایل پی‌دی‌اف سفته الکترونیکی خود را از سامانه‌ی سفته الکترونیکی بانک آينده دانلود کرده و در بخش جزئيات درخواست حساب کاربری خود، برای ضمانت بارگذاری کنید.
        </span>
      </li>

      <li className='w-full py-6 md:rounded-xl flex md:bg-bgGray flex-wrap cursor-pointer mb-4 border-b md:border-none md:px-6' onClick={() => { reset(); setM2(!m2) }} >
        <div className='w-full flex justify-between'>
          <p className=''>
            لندو کارت چیست و چطور باید از آن استفاده کنم؟
          </p>
          <span className={`${m2 ? '' : 'rotate-180'} duration-200`}><ExpandMoreIcon /></span>
        </div>
        <span className={`${m2 ? 'hidden h-0' : 'h-full'} px-8 py-4 text-blueT text-[14px]`} ref={menu2} >
          لندو کارت یک کارت خرید عضو شتاب است که می‌توانید مثل سایر کارت‌های بانکی، از آن برای خرید از تمامی دستگاه‌های کارت‌خوان و فروشگاه‌های آنلاین استفاده کنید. بعد از اینکه درخواست اعتبارسنجی شما تایید شد، لندو کارت از طریق پست به آدرستان ارسال می‌شود. البته توجه داشته باشید که بعد از مرحله امضای قراردادها، باید حتما از طریق حساب کاربری خود، کارتتان را فعال کنید. درخواستتان که نهایی شد، مبلغ وام در لندو کارتتان شارژ می‌شود و می‌توانید از موجودی کارت که همان مبلغ وام درخواستی‌تان است، برای خرید کالا یا خدمات مورد نیاز خود استفاده کنید.
        </span>
      </li>

      <li className='w-full py-6 md:rounded-xl flex md:bg-bgGray flex-wrap cursor-pointer mb-4 border-b md:border-none md:px-6' onClick={() => { reset(); setM3(!m3) }} >
        <div className='w-full flex justify-between'>
          <p className=''>
            سود و کارمزد وام لندو چقدر است؟
          </p>
          <span className={`${m3 ? '' : 'rotate-180'} duration-200`}><ExpandMoreIcon /></span>
        </div>
        <span className={`${m3 ? 'hidden h-0' : 'h-full'} px-8 py-4 text-blueT text-[14px]`} ref={menu3} >
          از آن‌جایی که وام دریافتی شما توسط بانک آینده تأمین می‌شود، سود اقساط شما نرخ مصوب بانک مرکزی، یعنی 23 درصد است. ضمنا مبلغی هم بابت کارمزد و هزینه عملیات لندو از شما دریافت می‌شود که مبلغ آن به میزان وام شما بستگی دارد.
        </span>
      </li>

      <li className='w-full py-6 md:rounded-xl flex md:bg-bgGray flex-wrap cursor-pointer mb-4 border-b md:border-none md:px-6' onClick={() => { reset(); setM4(!m4) }} >
        <div className='w-full flex justify-between'>
          <p className=''>
            چطور باید سفته الکترونیکی را خریداری کرد؟
          </p>
          <span className={`${m4 ? '' : 'rotate-180'} duration-200`}><ExpandMoreIcon /></span>
        </div>
        <span className={`${m4 ? 'hidden h-0' : 'h-full'} px-8 py-4 text-blueT text-[14px]`} ref={menu4} >
          برای دریافت وام لندو، باید سفته موردنیاز را از طریق سامانه سفته الکترونیکی بانک آینده خریداری کنید. تمامی اطلاعاتی که برای پر کردن سفته نیاز دارید را هم می‌توانید از صفحه «درخواست‌های من» حساب کاربری خود کپی کنید. برای مشاهده آموزش خرید سفته الکترونیکی، وارد <a href="" className='text-greenL'>این صفحه</a> شوید.
        </span>
      </li>

      <li className='w-full py-6 md:rounded-xl flex md:bg-bgGray flex-wrap cursor-pointer mb-4 border-b md:border-none md:px-6' onClick={() => { reset(); setM5(!m5) }} >
        <div className='w-full flex justify-between'>
          <p className=''>
            پرداخت اقساط در لندو چگونه است؟
          </p>
          <span className={`${m5 ? '' : 'rotate-180'} duration-200`}><ExpandMoreIcon /></span>
        </div>
        <span className={`${m5 ? 'hidden h-0' : 'h-full'} px-8 py-4 text-blueT text-[14px]`} ref={menu5} >
          روش پرداخت اقساط به صورت ۶ ماهه، ۹ ماهه یا ۱۲ ماهه است و شما می‌توانید یکی از این روش‌ها را انتخاب کنید. همچنین باید اقساط خود را به صورت آنلاین از طریق سایت لندو و حساب کاربری‌تان بپردازید. اگر در پرداخت اقساط خود تأخیر داشته باشید، از شما جریمه دیرکرد دریافت می‌شود و اگر اقساط خود را زودتر از موعد پرداخت کنید، نمره اعتبارتان در لندو افزایش پیدا می‌کند. ضمنا در صورتی که قسط خود را پرداخت کردید اما بعد از ۷۲ ساعت کاری پرداخت شما ثبت نشد و مبلغ پرداخت‌شده هم به حسابتان برنگشت، لطفا با تیم پشتیبانی ما تماس بگیرید تا پرداخت قسط شما در سایت لندو ثبت شود.
        </span>
      </li>

      <li className='w-full py-6 md:rounded-xl flex md:bg-bgGray flex-wrap cursor-pointer mb-4 border-b md:border-none md:px-6' onClick={() => { reset(); setM6(!m6) }} >
        <div className='w-full flex justify-between'>
          <p className=''>
            لندو اقساط من را چطور با بانک تسویه می‌کند؟
          </p>
          <span className={`${m6 ? '' : 'rotate-180'} duration-200`}><ExpandMoreIcon /></span>
        </div>
        <span className={`${m6 ? 'hidden h-0' : 'h-full'} px-8 py-4 text-blueT text-[14px]`} ref={menu6} >
          لندو هیچ‌گونه دسترسی به اقساط پرداختی شما ندارد. زمانی که قسط خود را پرداخت می‌کنید، مبلغ پرداختی مستقیما وارد حساب بانک آینده می‌شود.
        </span>
      </li>

      <li className='w-full py-6 md:rounded-xl flex md:first-letter md:bg-bgGray flex-wrap cursor-pointer mb-4 md:px-6' onClick={() => { reset(); setM7(!m7) }} >
        <div className='w-full flex justify-between'>
          <p className=''>
            اگر درخواست وامم لغو شود، مبلغ پرداخت‌شده بابت کارمزد و هزینه عملیات، چه زمانی به حسابم برمی‌گردد؟
          </p>
          <span className={`${m7 ? '' : 'rotate-180'} duration-200`}><ExpandMoreIcon /></span>
        </div>
        <span className={`${m7 ? 'hidden h-0' : 'h-full'} px-8 py-4 text-blueT text-[14px]`} ref={menu7} >
          در صورتی که هزینه کارمزد و عملیات لندو را پرداخت کرده باشید و به دلیل نقص مدارک، درخواست وام شما لغو شود، مبلغ کارمزد و عملیات لندو به زودی به حساب بانک آینده شما عودت داده خواهد شد.
        </span>
      </li>
      <div className='flex items-center text-[#0082FD] mt-4 md:hidden'>
        <a href="" className='w-fit font-prBold flex items-center justify-between ml-4'> مشاهده سوالات بیشتر <i className="bi bi-arrow-left text-[20px] mr-4 flex items-center"></i></a>
      </div>
    </ul>
  )
}

export default Accordion