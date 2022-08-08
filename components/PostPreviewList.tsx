import { Fragment } from "react";
import PostPreview from "@/components/PostPreview";

export default function PostPreviewList(props) {
  const { postSummaries } = props;
  return (
    <div className="post-preview-list">
      {postSummaries.map((post) => (
        <Fragment key={post.slug}>
          <PostPreview {...post} isFeatured={false} thumbnailPosition="left" />
        </Fragment>
      ))}
    </div>
  );
}
