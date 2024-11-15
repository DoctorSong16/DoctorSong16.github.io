import React from 'react'
import Content from '../ui/Content'
import { getSortedArticles } from '@/app/lib/articles'

// type Props = {
//     postsPerPage: number;
// }

export default function Post() {
  const sortedPosts = getSortedArticles();
  return (
    <Content postData={sortedPosts} />
  )
}