import type { Author } from "types";
import Image from "next/image";
import { dateToNiceString } from "utils/dateConversionHelper";

import styles from "./PostMetaCard.module.scss";

interface Props {
  author: Author;
  readingTime: number;
  publishedOn: Date;
}
export default function PostMetaCard(props: Props) {
  return (
    <div className={styles.postMetaCard}>
      <div className={styles.avatar}>
        <Image src={props.author.avatar} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.textContent}>
        <p className={styles.authorName}>{props.author.name}</p>
        <div className={styles.miscInfo}>
          <p className="published-on">{dateToNiceString(props.publishedOn)}</p>
          <p className={styles.dotGutter} aria-hidden>
            ·
          </p>
          <p className="reading-time">{props.readingTime} min</p>
        </div>
      </div>
    </div>
  );
}
