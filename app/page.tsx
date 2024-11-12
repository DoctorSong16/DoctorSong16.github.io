// 'use client'
import Content from '@/app/ui/Content'
import { getSortedArticles } from '@/app/lib/articles'
// import { getArticlesByCategory } from '@/lib/articles'
// import { ArticleItem } from '@/types'
// import { GetStaticProps, InferGetStaticPropsType } from 'next'

// type Props = {
//   menuItems: string[];
//   currentPage: string;
//   articles: Record<string, ArticleItem[]>;
// }

// export async function generateStaticParams() {
//   const articles = await getArticlesByCategory();
//   const menuItems = ["Home", "Blog"];
//   return {
//     props: {
//       menuItems,
//       currentPage: menuItems[0],
//       articles
//     } as Props
//   }
// }

export default function HomePage() {
  const sortedPosts = getSortedArticles();
  return (
    <>
    <Content postData={sortedPosts}/>
    </>
  )
}

// const HomePage = (props: Props) => {

//   return (
//     <>
//     <Navbar menuItems={["Home", "Blog"]} currentPage='Home'/>
//     <Content />
//     <Footer name="dundu does stuff" year={2024}/>
//     </>
//   )
// }

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

// export default HomePage