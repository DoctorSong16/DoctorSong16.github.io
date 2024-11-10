import { ArticleItem } from '@/types';
import React from 'react'

type Props = {
    postData: ArticleItem;
}

export default function PostPreviewCard(props: Props) {
  return (
    <div>PostPreviewCard - {props.postData.id}</div>
  )
}