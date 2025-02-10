import { getArticles } from "@/lib/actions/article";
import Card from "./Card";

async function ArticlesList() {
  const articles = await getArticles();

  return (
    <>
      {articles?.data?.map((article) => (
        <Card key={article.id} article={article} />
      ))}
    </>
  );
}

export default ArticlesList;
