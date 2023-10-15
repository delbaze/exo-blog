import { Commentaire } from "./Commentaire";
export interface Article {
  id: number;
  title: string;
  description: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
  commentaires: Commentaire[];
}
