import Image from "next/image";
import Link from "next/link";
import PostMetaCard from "./PostMetaCard";
import FeaturedPostLabel from "./FeaturedPostLabel";

import type { Author } from "types";

import styles from "./PostPreview.module.scss";

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
  const thumbnailPositionClass =
    props.thumbnailPosition === "top"
      ? styles.thumbnailPositionTop
      : styles.thumbnailPositionLeft;

  const topLevelClassNames = [styles.preview, thumbnailPositionClass];
  if (props.isFeatured) topLevelClassNames.push(styles.featured);

  return (
    <article className={topLevelClassNames.join(" ")}>
      {props.isFeatured && <FeaturedPostLabel />}
      <Link href={postHref}>
        <a className={styles.thumbnail}>
          <Image src={props.thumbnail} layout="fill" objectFit="cover" />
        </a>
      </Link>
      <div className={styles.details}>
        <PostMetaCard
          author={props.author}
          readingTime={props.readingTime}
          publishedOn={props.publishedOn}
        />
        <Link href={postHref}>
          <a className="title">
            <h3>{props.title}</h3>
            <p className={styles.summary}>{props.summary}</p>
          </a>
        </Link>
      </div>
    </article>
  );
}
