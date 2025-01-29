
import { getAllArticles } from "./(server)/api";
import { AppLink } from "../app/shared/components/app-link";
import Link from "next/link";
import ArticlePreview from "./article-preview/page";
 
const ARTICLES_PER_PAGE = 10;

export default async function Home({searchParams}: Record< string, string>) {
  const search = await searchParams
  
  const page = Number.parseInt(search['page'] ?? 1);
  const allArticles = await getAllArticles();

  const articles = allArticles.slice(
    (page - 1) * ARTICLES_PER_PAGE,
    page * ARTICLES_PER_PAGE
  );

  const nextPageUrl = {
    search: new URLSearchParams({
      page: (page + 1).toString(),
    }).toString(),
  };
  return (
      <div>
        <Link href="/about">About</Link>
        <h1>Articles of Author, page: {page}</h1>
        <ul>
          {articles.map(article => {
            return <li key={article.name}>
                <ArticlePreview name={article.name} text={article.header} />
            </li>
          })}
        </ul>
        <AppLink href={nextPageUrl}>Next</AppLink>
      </div>
  );
}

