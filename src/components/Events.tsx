"use client";
import PastEvents from './PastEvents'
import { useState } from 'react'


const Events = () => {
    const [active, setActive] = useState('past')
    const handleClick = (e:React.MouseEvent<HTMLParagraphElement>) => {
        setActive(e.currentTarget.innerText.toLowerCase().split(' ')[0])
    }

  return (
    <div>
        <section className='flex p-4 md:p-0 gap-4 md:gap-8 items-center'>
            <p onClick={handleClick} className={`${active === 'past' && 'font-bold text-black hover:text-black' } cursor-pointer hover:text-primary`}>Past Events</p>
            <p onClick={handleClick} className={`${active === 'upcoming' && 'font-bold text-black hover:text-black' } cursor-pointer hover:text-primary`}>Upcoming Events</p>
        </section>

        <section>
            {active === 'past' ? <div><PastEvents/></div> 
            : 
            <section className='flex px-4 md:px-0 py-8 items-center'>
                COMING SOON
            </section>
            }
        </section>
    </div>
  )
}

export default Events