'use client';

 const getLikeKey = (articleName: string) => `blog_1_like_${articleName}`;

 class ArticleStorageWrapper {

  private get storage() {
    return localStorage
  }
  private get isLocalStorageReady() {
    return 'localStorage' in globalThis;
  }

  constructor() {}

  like(articleName: string) {
    const likeKey = getLikeKey(articleName);
    this.storage.setItem(likeKey, 'like');
  }

  liked(articleName: string): boolean {
    if(!this.isLocalStorageReady) return false;

    const likeKey = getLikeKey(articleName);
    return  this.storage.getItem(likeKey) === 'like';
  }
}

export const articleStorage = new ArticleStorageWrapper()