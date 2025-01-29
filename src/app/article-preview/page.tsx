'use client';

import { useState } from "react";
import { AppLink } from "../shared/components/app-link";
import { ROUTING } from "../routing";
import { articleStorage } from "../article-storage";

type ArticlePreviewProps = {
  name: string;
  text: string;
}

export default function ArticlePreview({name, text}: ArticlePreviewProps) {
  
  const [liked, setLiked] = useState(articleStorage.liked(name));
 
  const like = () => {
    articleStorage.like(name);
    setLiked(true);
  }
  console.log('like:', liked);
  
  return (
    <>
      <AppLink href={ROUTING.article(name)}>{text}</AppLink>
      <button onClick={like} type="button"suppressHydrationWarning>{liked ? '🔥' : 'like'}</button>
    </>
  )
}

