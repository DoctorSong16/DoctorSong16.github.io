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
            <h1 className='text-4xl text-center mt-12'>{postData.title}</h1>
            <p className='text-center p-4'>{postData.date}</p>
            <div className='text-lg text-justify'>
                <Markdown
                    components={{
                        h1: ({node, ...props}) => <h1 className='text-4xl font-semibold' {...props} />,
                        h2: ({node, ...props}) => <h2 className='text-2xl font-semibold' {...props} />,
                        h3: ({node, ...props}) => <h3 className='text-xl font-semibold' {...props} />,
                        h4: ({node, ...props}) => <h4 className='text-lg font-semibold' {...props} />,
                        h5: ({node, ...props}) => <h5 className='text-lg font-semibold' {...props} />,
                        h6: ({node, ...props}) => <h6 className='text-lg font-semibold' {...props} />,
                        p: ({node, ...props}) => <p className='text-lg mb-2' {...props} />,
                        img: ({node, ...props}) => <img className='object-contain rounded-[24px] my-4' {...props} />
                    }}>
                    {postData.content}
                </Markdown>
            </div>
        </div>
    )
  }