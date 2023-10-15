import datasource from "../db";
import { Commentaire } from "../entities/Commentaire.entity";
import { Repository } from "typeorm";
import ArticleService from "./Article.service";
import { ICreateCommentaire } from "../types/Commentaire";
export default class CommentaireService {
  db: Repository<Commentaire>;
  constructor() {
    this.db = datasource.getRepository(Commentaire);
  }

  async list() {
    return await this.db.find();
  }

  async listByArticleId(id: number) {
    return await this.db.findBy({ article: { id } });
  }

  async findOne(id: number) {
    return await this.db.findOneBy({ id });
  }

  async create(data: ICreateCommentaire) {
    const { articleId, ...rest } = data;
    console.log('DATA 2', data);
    const article = await new ArticleService().findOne(+articleId);
    if (!article) {
      throw new Error("Article introuvable");
    }
    return await this.db.save({ ...rest, article });
  }
  async update(id: number, data: Partial<Commentaire>) {
    if (id) {
      const commentaire = await this.findOne(id);
      if (!commentaire) {
        throw new Error("Le commentaire n'existe pas");
      }
      return await this.db.save({ ...commentaire, ...data });
    }
    throw new Error("Indiquez un id pour mettre à jour le commentaire");
  }

  async delete(id: number) {
    const commentaire = await this.findOne(id);
    if (!commentaire) {
      throw new Error("Le commentaire n'existe pas");
    }
    return await this.db.remove(commentaire);
  }
}
