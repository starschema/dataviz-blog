import { PostSummariesQuery } from "@/.tina/__generated__/types";
import { ISODateStringToDate } from "./dateConversionHelper";

export function cleanupPostSummariesResults(data: PostSummariesQuery) {
  return data.postConnection.edges.map((e) => {
    const { __typename: atn, ...author } = e.node.author;
    const { __typename: ntn, ...node } = e.node;

    return {
      ...node,
      slug: node.slug.relativePath.replace(/\..*/, ""),
      publishedOn: ISODateStringToDate(node.publishedOn),
      author,
    };
  });
}
