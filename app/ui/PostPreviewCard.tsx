import { ArticleItem } from '@/app/types';
import React from 'react'

type Props = {
    postData: ArticleItem;
}

export default function PostPreviewCard(props: Props) {
  return (
    <div className='transition duration-300 flex flex-col mx-auto w-11/12 items-center shadow-md rounded-md hover:rounded-lg hover:shadow-lg p-4'>
        <h2 className='text-2xl font-semibold'>{props.postData.title}</h2>
        <p>{props.postData.date}</p>
        <p>{props.postData.summary}</p>
    </div>
  )
}