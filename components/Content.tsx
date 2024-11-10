import { ArticleItem } from '@/types'
import React from 'react'

type Props = {
    postData: ArticleItem[];
}

export default function Content(props: Props) {
  return (
    <div className='max-w-screen-xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-ibarraRealNova'>
        {props.postData.map((post) => (
            <div key={post.id} className='flex flex-col items-center justify-center mx-auto w-11/12'>
                <h2 className='text-2xl'>{post.title}</h2>
                <p>{post.date}</p>
                <p>{post.summary}</p>
            </div>
        ))}
    </div>
  )
}