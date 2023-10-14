import { Commentaire } from './../entities/Commentaire.entity';

export interface ICreateCommentaire extends Omit<Commentaire, "article"> {
  id?: number | undefined;
  articleId: number;
}
