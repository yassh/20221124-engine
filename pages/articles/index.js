import { microcmsClient } from "../../lib/microcmsClient";

export const getStaticProps = async () => {
  const data = await microcmsClient.get({
    endpoint: "articles",
  });

  return {
    props: {
      articles: data.contents,
    },
  };
};

const Page = ({ articles }) => {
  return (
    <>
      <h1>記事一覧</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Page;
