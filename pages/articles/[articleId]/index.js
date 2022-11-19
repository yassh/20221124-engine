import { microcmsClient } from "../../../lib/microcmsClient";

export const getStaticPaths = async () => {
  const data = await microcmsClient.get({ endpoint: "articles" });
  const paths = data.contents.map((article) => ({
    params: { articleId: article.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const data = await microcmsClient.get({
    endpoint: "articles",
    contentId: params.articleId,
  });

  return {
    props: {
      article: data,
    },
  };
};

const Page = ({ article }) => {
  return (
    <>
      <h1>{article.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: article.body,
        }}
      />
    </>
  );
};

export default Page;
