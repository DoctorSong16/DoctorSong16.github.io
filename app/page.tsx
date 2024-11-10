import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

// type Props = {
//   name: string
// }

const HomePage = () => {
  return (
    <>
    <Navbar menuItems={["Home", "Blog"]} currentPage='Home'/>
    <Content />
    <Footer name="dundu does stuff" year={2024}/>
    </>
  )
}

// const HomePage = () => {
//   return (
//     <section className="mx-auto w-11/12 md:w-8/2 mt-5 flex flex-col gap-16 mb-20">
//       <header className="font-ibarraRealNova font-light text-4xl text-smoky-black text-left">
//         <h1>dundu does stuff</h1>
//       </header>
//       <section className="md:grid md:grid-cols-2 flex flex-col gap-10">

//       </section>
//     </section>
//   )
// }

export default HomePage