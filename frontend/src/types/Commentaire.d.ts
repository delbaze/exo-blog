export interface Commentaire {
  id: number;
  title: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  article?: Article;
}
