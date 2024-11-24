import { getArticleData, getSortedArticles } from '@/app/lib/articles';
import React from 'react'
import Markdown from 'react-markdown';

// type Props = {
//     slug: string;
//     title: string;
// };

export async function generateStaticParams() {
    const posts = getSortedArticles();

    console.log(`Gathered ${posts.length} posts`);
   
    return posts.map((post) => ({
      slug: post.id,
    }))
}

export const dynamicParams = false;

export default async function Page({
    params,
  }: {
    params: Promise<{ 
        slug: string; 
    }>
  }) {
    const postSlug = (await params).slug;
    console.log(`Fetching post data for ${postSlug}`);
    const postData = getArticleData(postSlug);
    
    return (
        <div className="flex p-4 flex-col text-foreground mx-auto max-w-screen-xl font-ibarraRealNova">
            <h1 className='text-4xl text-center'>{postData.title}</h1>
            <p className='text-center'>{postData.date}</p>
            <div className='text-lg text-justify'>
                <Markdown>{postData.content}</Markdown>
            </div>
        </div>
    )
  }