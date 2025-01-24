import { useState } from "react";

type LessonProps = {
  title: string;
  shortSummery?: string;
}
type LikeState = 'unset' | 'like' | 'dislike';

export function Lesson ({title, shortSummery}: LessonProps) {
  const [likeState, setLikeState] = useState('unset')
   return (
    <div>
      <h2>{title}</h2>
      <p>{shortSummery}</p>
    </div>
   )
}