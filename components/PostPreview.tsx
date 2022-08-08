import Image from "next/image";

import type { Author } from "types";

interface Props {
  title: string;
  summary: string;
  publishedOn: Date;
  readingTime: number;
  author: Author;
  thumbnail: string;
  isFeatured: boolean;
  thumbnailPosition: "left" | "top";
}

export default function PostPreview(props: Props) {
  return (
    <article className={`thumbnail-position-${props.thumbnailPosition}`}>
      {props.isFeatured && <div className="featured-label">Featured Post</div>}
      <Image
        src={props.thumbnail}
        className="thumbnail"
        width={300}
        height={300}
        objectFit="contain"
      />
      <div className="details">
        <div className="misc-info">
          <p className="published-on">
            {props.publishedOn.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <p className="reading-time">{props.readingTime} min</p>
        </div>
        <h1 className="title">{props.title}</h1>
        <p className="summary">{props.summary}</p>
        <p className="author">{props.author.name}</p>
      </div>
    </article>
  );
}
