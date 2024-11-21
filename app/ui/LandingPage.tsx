import React from 'react'

// type Props = {}  

export default function LandingPage() {
  return (
    <div className='flex flex-col md:flex-row flex-wrap max-w-screen-xl mx-auto font-ibarraRealNova items-center md:px-2'>
        <div className='md:w-1/2 max-h-screen md:p-2 p-8'>
            <img src="/dundu.jpeg" className='object-contain drop-shadow-2xl rounded-[24px]' alt="dundu" />
        </div>
        <div className='w-11/12 md:w-1/2 flex flex-col p-8'>
            <h1 className='text-4xl'>
                Hi, I&apos;m Dundu :&#41;
            </h1>
            <p className='text-xl md:text-sm lg:text-sm xl:text-xl text-justify'>
            <br />
            Welcome to my little corner of the internet! I find joy in sharing my love for all things creative. Here, I share my journey through a wide range of hobbies — from learning new languages, reading books, to painting with watercolors, sewing dresses, learning music, cooking up something delicious, and other hands-on crafts. 
            <br />
            <br />
            When I&apos;m not making something new, I enjoy volunteering in the community or spending hours at the library. I also love writing fiction and reflecting on the experiences that make life meaningful. I hope my stories spark your curiosity and inspire you to embrace your own passions. :&#41;
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