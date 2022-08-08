export interface Author {
  name?: string;
  avatar?: string;
}

export interface PostSummary {
  summary: string;
  publishedOn: Date;
  readingTime: number;
  author: Author;
  thumbnailPath: string;
}

export interface Post extends PostSummary {
  body: string;
}
