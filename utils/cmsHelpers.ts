import { PostSummariesQuery } from "@/.tina/__generated__/types";

export function cleanupPostSummariesResults(data: PostSummariesQuery) {
  return data.postConnection.edges.map((e) => {
    const { __typename: atn, ...author } = e.node.author;
    const { __typename: ntn, ...node } = e.node;

    return { ...node, publishedOn: new Date(node.publishedOn), author };
  });
}
