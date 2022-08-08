import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useTina } from "tinacms/dist/edit-state";
import { client } from "@/.tina/__generated__/client";
import PostPreview from "@/components/PostPreview";
import PostPreviewList from "@/components/PostPreviewList";
import About from "@/components/About";
import { cleanupPostSummariesResults } from "utils/cmsHelpers";
import { PostSummariesQuery } from "@/.tina/__generated__/types";

import styles from "./index.module.scss";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data as PostSummariesQuery,
  });

  const postSummaries = cleanupPostSummariesResults(data);

  const featuredPostSummary = postSummaries.find(
    (s) => s.slug === props.featuredPostSlug
  );
  const nonFeaturedPosts = postSummaries.filter(
    (s) => s.slug !== props.featuredPostSlug
  );
  return (
    <main>
      <div className={styles.featuredContentWrapper}>
        <PostPreview
          isFeatured={true}
          {...featuredPostSummary}
          thumbnailPosition="top"
        />
      </div>
      <div className="details">
        <div className="postsWrapper">
          <h2>Older Posts</h2>
          <PostPreviewList postSummaries={nonFeaturedPosts} />
        </div>
        <About version="small" />
      </div>
    </main>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.postSummaries();

  const featuredPostSlug = "HelloWorld";
  return {
    props: {
      data,
      query,
      variables,
      featuredPostSlug,
    },
  };
};
