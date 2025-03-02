import { getArticles } from "@/lib/actions/article";
import Card from "./Card";

async function ArticlesList() {
  const articles = await getArticles();

  return (
    <>
      {articles?.data?.map((article) => (
        <Card type="general" key={article.id} article={article} />
      ))}
    </>
  );
}

export default ArticlesList;
