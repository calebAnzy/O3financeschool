"use client"
import { useState, useEffect } from 'react';
import { postPreview } from '@/interface'
import Link from 'next/link';
import Image from 'next/image';
import { MotionDiv } from './MotionComponents';
import  { getAllPostsOnEvents } from '@/app/sanity-utils'

const PastEvents = () => {
    const [data, setData] = useState<postPreview[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const posts = await getAllPostsOnEvents();
            setData(posts);
        };
        fetchData();
    }, []);
  return (
    <div>
        <section className="flex flex-col gap-4 justify-between my-8">
            {data.map((item:postPreview, index:number) => {
                return (
                <MotionDiv
                    key={item.slug}
                    initial={{y:50, opacity:0}}
                    transition={{delay:0, duration:.5, ease:'easeIn'}}
                    whileInView={{y:0, opacity:1}} 
                    viewport={{once:true}}
                    className="w-full text-black"
                    >
                
                    <section className="grid mx-4 md:px-0 border border-lightGray md:border-none grid-cols-5 gap-4 lg:gap-6">
                        <div className='hidden md:block'>
                            <Image 
                            src={item.imageUrl} 
                            alt={item.title}
                            width={200}
                            height={200}
                            className="w-full aspect-[320/165] object-cover object-center rounded-lg md:bg-[#F9F9F9]"
                            />
                        </div>
                        <h2 className="col-span-3 p-2 flex lg:pl-6 items-center text-lg !leading-tight capitalize font-medium rounded-lg md:bg-[#F9F9F9]">{item.title}</h2>
                        <Link href={`/blogpost/${item.slug}`} className='col-span-2 md:col-span-1 flex justify-center items-center rounded-lg md:bg-[#F9F9F9] hover:bg-altBlue hover:text-white transition-colors'>View Event</Link>
                    </section>
                </MotionDiv>
                )
            })}
            </section>
    </div>
  )
}

export default PastEvents;