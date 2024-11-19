import React from 'react'

// type Props = {}  

export default function LandingPage() {
  return (
    <div className='flex flex-col md:flex-row flex-wrap max-w-screen-xl mx-auto font-ibarraRealNova items-center md:px-2'>
        <div className='w-11/12 md:w-1/2 max-h-screen'>
            <img src="/dundu.jpeg" className='object-contain m-2 shadow-lg border-8 border-foreground rounded-[24px]' alt="dundu" />
        </div>
        <div className='w-11/12 md:w-1/2 flex flex-col p-8'>
            <h1 className='text-4xl'>
                Hi!, I&apos;m Pratibha
            </h1>
            <p className='text-xl md:text-sm lg:text-xl xl:text-2xl'>
                Welcome to my personal blog! Lorem ipsum dolor sit amet, consectetur adipiscing elit
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio explicabo odio eum officia adipisci. Accusantium voluptates eius voluptatum at. Corporis nam odio at quod ea earum aperiam numquam asperiores suscipit!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quos reiciendis alias officiis nam, commodi nihil perspiciatis tempore consectetur dolore, animi at accusamus quaerat molestiae, quo dignissimos recusandae maxime accusantium?
            </p>
        </div>
        {/* <div className='mx-auto flex flex-row w-1/2'>
            <img src="/dundu.jpeg" className='h-screen' alt="dundu" />
            <div className='flex flex-col w-1/2 mx-auto'>
                <h1 className='text-4xl font-bold text-foreground'>dundu does stuff</h1>
                <p className='text-2xl text-foreground'>Welcome to my personal blog!</p>
            </div>
        </div> */}
    </div>
  )
}