import Image from "next/image"
import { postPreview } from "@/interface"
import Link from "next/link"
import { MotionDiv } from "./MotionComponents"
import React from "react"


const BlogPreview: React.FC<postPreview> = ({title, imageUrl, slug}) => {

  return (
    <MotionDiv
    initial={{y:50, opacity:0}}
    transition={{delay:0, duration:.5, ease:'easeIn'}}
    whileInView={{y:0, opacity:1}} 
    viewport={{once:true}}
    className="bg-white rounded-sm border border-[#D9D9D9] w-full text-black p-4 cursor-pointer hover:[&_h2]:text-primary hover:bg-lightGray transition-colors"
    >
   
    <Link href={`/blogpost/${slug}`} className="">
        <div>
            <Image 
            src={imageUrl} 
            alt={title}
            width={200}
            height={200}
            className="w-full aspect-[320/165] object-cover object-center"
            />
        </div>
        <h2 className="mt-5 mb-2 text-lg !leading-tight capitalize font-medium">{title}</h2>
        {/* <p className="text-[#757575] text-base !leading-tight">{prop.blog.text}</p> */}
    </Link>
    </MotionDiv>
  )
}

export default BlogPreview