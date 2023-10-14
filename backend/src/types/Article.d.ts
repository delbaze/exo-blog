import { Article } from "../entities/Article.entity";

export interface ICreateArticle extends Omit<Article, "commentaires"> {
  id?: number | undefined;
}
