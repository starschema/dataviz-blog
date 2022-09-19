import { useTina } from "tinacms/dist/edit-state";
import { client } from "@/.tina/__generated__/client";
import { TinaMarkdown, Components } from "tinacms/dist/rich-text";
import PostMetaCard from "@/components/PostMetaCard";
import { PostQuery } from "@/.tina/__generated__/types";
import Image from "next/image";
import HorizontalDivider from "@/components/HorizontalDivider";
import Tableau from "@/components/Tableau";

import styles from "@/styles/pages/post.module.scss";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data as PostQuery,
  });

  const post = data.post;
  const components = { hr: HorizontalDivider, tableau: Tableau };
  return (
    <main className={styles.mainContainer}>
      <PostMetaCard
        author={post.author}
        readingTime={post.readingTime}
        publishedOn={new Date(post.publishedOn)}
      />
      <h1>{post.title}</h1>
      <p className="summary">{post.summary}</p>
      <Image
        src={post.thumbnail}
        className={styles.thumbnail}
        width={1000}
        height={600}
        objectFit="contain"
      />
      <hr />
      <TinaMarkdown content={post.body} components={components} />
    </main>
  );
}

export const getStaticPaths = async () => {
  const { data } = await client.queries.postConnection();
  const paths = data.postConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { data, query, variables } = await client.queries.post({
    relativePath: ctx.params.slug + ".mdx",
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
