import React from 'react'
import { DarkLogo, Facebook, Instagram, LinkedIn, WhatsApp, Xtwitter, Youtube } from './Icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <div  className='bg-[#121212] text-white p-4 flex flex-col justify-between py-6 md:py-8 lg:py-10 text-base min-h-[100vh]'>

        <section className='container mx-auto pb-6 flex flex-col md:flex-row justify-between leading-tight gap-8'>
            <div className='flex flex-col gap-4'>
                <DarkLogo/>
                <p className='max-w-sm'>Follow our social media handles to stay updated</p>
                <section className='flex gap-3 items-center'>
                    <a href="https://www.youtube.com/@O3FinanceSchool"><Youtube style="size-5 icon"/></a>
                    <a href="https://www.linkedin.com/company/o3-finance-school/"><LinkedIn style="size-5 icon"/></a>
                    <a href="https://www.instagram.com/o3financeschool?igsh=MWRwb3BneDFwbzF3ag=="><Instagram style="size-5 icon"/></a>
                    <a href="https://x.com/o3financeschool?t=4ZpO7fce9BHdZUMzQi_ygA&s=09"><Xtwitter style="size-5 icon"/></a>
                    <a href="/"><WhatsApp style="size-5 icon"/></a>
                    <a href="https://www.facebook.com/share/15osY2FJWM/"><Facebook style='size-5 icon'/></a>
                </section>
            </div>
            
            <div className='grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8'>
                <div>
                    <ul className='[&_li]:my-1 [&_li]:capitalize'>
                        <p className='mb-3 text-sm'>OUR SCHOOLS</p>
                        <li className='transition-colors hover:text-primary'><Link href='/'>School of wealth creation</Link></li>
                        <li className='transition-colors hover:text-primary'><Link href='/'>School of wealth management</Link></li>
                        <li className='transition-colors hover:text-primary'><Link href='/'>School of Sustainability</Link></li>
                    </ul>
                </div>

                <div>
                    <ul className='[&_li]:my-1'>
                        <p className='mb-3 text-sm'>COMPANY</p>
                        <li className='transition-colors hover:text-primary'><Link href='/about'>About Us</Link></li>
                        <li className='transition-colors hover:text-primary'><Link href='/'>Career</Link></li>
                        <li className='transition-colors hover:text-primary'><Link href='/'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div className='container mx-auto flex items-center pl-2 md:pl-4 gap-4 mt-12 lg:mt-48'>
                (c) 2025
                <p className='h-[0.5px] bg-white flex-1 w-full'></p>
            </div>

            <p className=' mt-4 container mx-auto'>
                <svg className='w-full' viewBox="0 0 1217 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M80.7 171.22C32.4 171.22 0.200001 135.11 0.200001 85.66C0.200001 36.21 32.4 0.329993 80.7 0.329993C129 0.329993 161.2 36.21 161.2 85.66C161.2 135.11 129 171.22 80.7 171.22ZM80.7 152.82C122.1 152.82 140.5 121.08 140.5 85.66C140.5 50.24 122.1 18.73 80.7 18.73C39.3 18.73 20.9 50.24 20.9 85.66C20.9 121.08 39.3 152.82 80.7 152.82ZM190.243 56.68H169.543C169.543 27.47 188.633 5.84999 227.963 5.84999C255.103 5.84999 279.023 21.72 279.023 49.78C279.023 66.57 270.743 77.15 254.643 83.59V84.05C277.183 90.26 284.773 104.75 284.773 123.38C284.773 154.66 262.463 171.22 228.423 171.22C187.943 171.22 165.403 150.06 165.403 114.18H186.103C186.103 137.18 196.683 152.82 226.813 152.82C254.183 152.82 264.073 142.47 264.073 123.38C264.073 98.54 245.903 94.17 230.493 94.17H213.473V75.77H229.573C245.903 75.77 258.323 68.18 258.323 49.78C258.323 36.9 249.583 24.25 227.963 24.25C196.913 24.25 190.243 41.04 190.243 56.68ZM355.965 75.31H429.335V93.71H355.965V168H335.265V3.54999H446.815V21.95H355.965V75.31ZM459.494 3.54999H480.194V168H459.494V3.54999ZM502.168 168V3.54999H527.468L609.578 139.02H610.038V3.54999H630.738V168H605.438L523.328 32.99H522.868V168H502.168ZM747.66 126.83H675.21L660.72 168H639.33L700.05 3.54999H723.05L783.54 168H762.15L747.66 126.83ZM682.11 108.43H740.99L711.78 22.64H711.32L682.11 108.43ZM792.156 168V3.54999H817.456L899.566 139.02H900.026V3.54999H920.726V168H895.426L813.316 32.99H812.856V168H792.156ZM1062.69 57.83C1059.7 42.19 1047.74 18.73 1013.47 18.73C974.372 18.73 958.042 52.54 958.042 85.66C958.042 119.01 974.372 152.82 1013.47 152.82C1047.97 152.82 1061.31 129.36 1062.69 108.66H1083.39C1079.71 145 1053.95 171.22 1013.47 171.22C968.392 171.22 937.342 135.34 937.342 85.66C937.342 36.21 968.392 0.329993 1013.47 0.329993C1053.72 0.329993 1079.48 26.55 1083.39 57.83H1062.69ZM1118.12 73.7H1202.53V92.1H1118.12V149.6H1216.33V168H1097.42V3.54999H1213.57V21.95H1118.12V73.7Z" fill="white"/>
                </svg>
            </p>
        </section>

    </div>
  )
}

export default Footer