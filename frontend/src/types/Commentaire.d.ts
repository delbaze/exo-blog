export interface Commentaire {
  id: number;
  title: string;
  author?: string
  message: string;
  createdAt: string;
  updatedAt: string;
  article?: Article;
}

export interface IFormCommentaire {
  articleId: number;
  title: string;
  message: string;
  author?: string
}