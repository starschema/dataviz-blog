import Image from "next/image";
import Link from "next/link";

import type { Author } from "types";
import { dateToNiceString } from "utils/dateConversionHelper";

interface Props {
  title: string;
  summary: string;
  publishedOn: Date;
  readingTime: number;
  slug: string;
  author: Author;
  thumbnail: string;
  isFeatured: boolean;
  thumbnailPosition: "left" | "top";
}

export default function PostPreview(props: Props) {
  const postHref = `/posts/${props.slug}`;
  return (
    <article className={`thumbnail-position-${props.thumbnailPosition}`}>
      {props.isFeatured && <div className="featured-label">Featured Post</div>}
      <Link href={postHref}>
        <a>
          <Image
            src={props.thumbnail}
            className="thumbnail"
            width={300}
            height={300}
            objectFit="contain"
          />
        </a>
      </Link>
      <div className="details">
        <div className="misc-info">
          <p className="published-on">{dateToNiceString(props.publishedOn)}</p>
          <p className="reading-time">{props.readingTime} min</p>
        </div>
        <h1>
          <Link href={postHref}>
            <a className="title">{props.title}</a>
          </Link>
        </h1>
        <p className="summary">{props.summary}</p>
        <p className="author">{props.author.name}</p>
      </div>
    </article>
  );
}
