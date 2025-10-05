"use client";
import { useState } from "react";
import { FAQData } from "@/data"

const FAQ = () => {

    const [active, setActive] = useState<number>(0)

  return (
    <section className='lg:w-[70%] w-[90%] mx-auto my-6 flex flex-col gap-2.5'>
        {FAQData.map((item, index) => {
            return (
                <article key={index} onClick={() => setActive(index)} className={` ${active === index ? 'bg-white' : 'bg-[#F5F5F5]'} p-2.5 px-3 transition-colors border border-[#D9D9D9] rounded-md`}>
                    <div className="flex justify-between items-center cursor-pointer">
                        <h2 className="capitalize text-[#1E1E1E] font-medium">{item.question}</h2>
                        <svg className={`${active === index && 'rotate-180'} transition-all`} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>

                    <p className={`${active === index ? 'h-max opacity-100 pointer-events-auto mt-1' : 'h-0 opacity-0 text-transparent pointer-events-none'} transition-all`}>{item.answer}</p>
                </article>
            )
        })}
    </section>
  )
}

export default FAQ