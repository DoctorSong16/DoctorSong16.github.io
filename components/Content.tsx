import { ArticleItem } from '@/types'
import React from 'react'
import PostPreviewCard from './PostPreviewCard';

type Props = {
    postData: ArticleItem[];
}

export default function Content(props: Props) {
  return (
    <div className='max-w-screen-xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-ibarraRealNova'>
        {props.postData.map((post) => (
            <PostPreviewCard key={post.id} postData={post}/>
        ))}
    </div>
  )
}