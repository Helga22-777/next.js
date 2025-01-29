'use client'
import { AppLink } from '@/app/shared/components/app-link'
import React from 'react'

const ArticlesError = () => {
  return (
    <div>No articles for you
      <AppLink href="/" >Go home</AppLink>
    </div>
  )
}

export default ArticlesError