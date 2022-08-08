import type { Author } from "types";
import Image from "next/image";
import { dateToNiceString } from "utils/dateConversionHelper";

interface Props {
  author: Author;
  readingTime: number;
  publishedOn: Date;
}
export default function PostMetaCard(props: Props) {
  return (
    <div className="post-meta-card">
      <Image
        src={props.author.avatar}
        width={40}
        height={40}
        objectFit="contain"
      />
      <div className="text-content">
        <p className="author-name">{props.author.name}</p>
        <div className="misc-info">
          <p className="published-on">{dateToNiceString(props.publishedOn)}</p>
          <p className="dot-gutter" aria-hidden>
            .
          </p>
          <p className="reading-time">{props.readingTime} min</p>
        </div>
      </div>
    </div>
  );
}
