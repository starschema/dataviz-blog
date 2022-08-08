import { useTina } from "tinacms/dist/edit-state";
import { client } from "@/.tina/__generated__/client";
import {
  PostSummariesQuery,
  PostSummariesQueryVariables,
} from "@/.tina/__generated__/types";
import { cleanupPostSummariesResults } from "utils/cmsHelpers";
import PostPreviewList from "@/components/PostPreviewList";

export default function PostList(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query as string,
    variables: props.variables as PostSummariesQueryVariables,
    data: props.data as PostSummariesQuery,
  });

  const postsList = cleanupPostSummariesResults(data);
  return (
    <>
      <h1>Posts</h1>
      <PostPreviewList postSummaries={postsList} />
    </>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.postSummaries();

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
