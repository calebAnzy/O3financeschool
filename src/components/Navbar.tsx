"use client"
import { PrimaryLogo, DarkLogo, WhiteLogo } from "./Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useState } from "react";

interface Prop {
    color: string,
    darkLogo?: boolean,
    whiteLogo?: boolean
}

const Navbar:React.FC<Prop> = (props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const pages = [
        // {
        //     name: "Courses",
        //     link: "/courses"
        // },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Blog",
            link: "/#blog"
        },
        {
            name: "Event",
            link: "/events"
        },
        // {
        //     name: "Services",
        //     link: "/services"
        // }
    ]

    const handleClick = () => {
        setIsOpen(false)
    }

    return (
        <motion.nav
        initial={{y:-50, opacity:0}}
        transition={{delay: 0, duration:.5, ease:'easeInOut'}}
        animate={{y:0, opacity:1}} 
        className="p-4 lg:p-0 lg:py-6 relative bg-transparent flex items-center justify-between [&_li]:font-medium text-base xl:[&_li]:text-base">
            <Link href={'/'}>
                {props.darkLogo ? <DarkLogo/> : (props.whiteLogo ? <WhiteLogo/> : <PrimaryLogo/>)}
                {/* {props.whiteLogo && <WhiteLogo/>} */}
            </Link>
            <ul className={`hidden lg:flex gap-[3.5svw] items-center ${props ? props.color : 'text-black'}`}>
                <li><Link href={'/'} className={`${pathname === '/' ? 'font-bold text-primary hover:text-primary' : 'hover:text-secondary'} transition-colors `}>Home</Link></li>
                {
                    pages.map((item, index) => {
                        return (
                            <li key={index}><Link href={item.link} className={`${pathname === item.link ? 'font-bold text-primary hover:text-primary' : 'hover:text-secondary'} transition-colors `} >{item.name}</Link></li>
                        )
                    })
                }
            </ul>
            <div className="flex items-center gap-2">
                { pathname === '/join-waitlist' || <Link href={'https://bit.ly/O3Mavens'} className="bg-primary hidden md:block text-[#F5F5F5] text-sm xl:text-base p-2 px-3 rounded-lg tracking-wide hover:bg-dark hover:text-white font-medium hover:scale-95 transition-all"> Join Waitlist </Link>}
                
                <div className='flex justify-between md:hidden items-center border border-b p-2'>
                    <section className='flex items-center md:hidden gap-4'>
                        <div onClick={() => setIsOpen(!isOpen)} className={`flex flex-col justify-between h-5 w-6 menu ${isOpen && 'active'} ${props.color === 'text-white' ? '[&_span]:bg-lightGray' : '[&_span]:bg-dark'}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </section>
                </div>
            </div>

            {
                isOpen &&
            <motion.section 
            initial={{opacity:0.2, x:-80}}
            whileInView={{opacity:1, x:0, transition:{duration:0.5}}}
            className="absolute w-full md:hidden left-0 top-[100%] z-50">
               
                <section className="border bg-[#fafafa]">
                    <ul className={` gap-4 items-center text-black text-base`}>
                        <Link href={'/'} onClick={handleClick} className="border-b">
                        <li className={`${pathname === '/' ? 'font-semibold text-primary hover:text-primary' : 'hover:text-secondary'} transition-colors border-b p-4`}>Home</li>
                        </Link>
                        {
                            pages.map((item, index) => {
                                return (
                                    <Link onClick={handleClick} href={item.link} key={index} className="border-b"><li className={`${pathname === item.link ? 'font-semibold text-primary hover:text-primary' : 'hover:text-secondary'} transition-colors border-b p-4`} >{item.name}</li></Link>
                                )
                            })
                        }
                        <div className="flex p-2">
                            { pathname === '/join-waitlist' || <Link onClick={handleClick} href={'https://bit.ly/O3Mavens'} className="bg-primary text-[#F5F5F5] text-base p-2 px-4 rounded-sm tracking-wide hover:bg-dark hover:text-white font-medium hover:scale-95 transition-all"> Join Waitlist </Link>}
                        </div>

                    </ul>
                </section>
            </motion.section>
            }
        </motion.nav>
    )
}

export default Navbar