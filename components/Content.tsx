import { ArticleItem } from '@/types'
import React from 'react'

type Props = {
    postData: ArticleItem[];
}

export default function Content(props: Props) {
  return (
    <div className='flex items-stretch font-ibarraRealNova'>
        {props.postData.map((post) => (
            <div key={post.id} className='flex flex-col items-center justify-center w-1/2'>
                <h2 className='text-2xl'>{post.title}</h2>
                <p>{post.date}</p>
            </div>
        ))}
    </div>
  )
}