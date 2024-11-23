import { getArticleData, getSortedArticles } from '@/app/lib/articles';
import React from 'react'

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
        <div>
            <h1>{postData.id}</h1>
            <h2>{postData.title}</h2>
            <p>{postData.date}</p>
            <p>{postData.summary}</p>
        </div>
    )
  }