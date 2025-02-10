import { getArticles } from "@/lib/actions/article";
import Card from "./Card";

async function ArticlesList() {
  const articles = await getArticles();

  return (
    <>
      {articles?.data?.map((article) => (
        <Card
          key={article.id}
          title={article.title}
          thumbnail={article.thumbnail || ""}
        />
      ))}
    </>
  );
}

export default ArticlesList;
