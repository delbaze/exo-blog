import datasource from "../db";
import { Article } from "../entities/Article.entity";
import { Repository } from "typeorm";
import { ICreateArticle } from "../types/Article";
export default class ArticleService {
  db: Repository<Article>;
  constructor() {
    this.db = datasource.getRepository(Article);
  }

  async list() {
    return await this.db.find({ relations: { commentaires: true } });
  }

  async findOne(id: number) {
    return await this.db.findOne({
      where: { id },
      relations: { commentaires: true },
    });
  }

  async create(data: ICreateArticle) {
    return await this.db.save(data);
  }
  async update(id: number, data: Partial<Article>) {
    if (id) {
      const article = await this.findOne(id);
      if (!article) {
        throw new Error("L'article n'existe pas");
      }
      return await this.db.save({ ...article, ...data });
    }
    throw new Error("Indiquez un id pour mettre à jour l'article");
  }

  async delete(id: number) {
    const article = await this.findOne(id);
    if (!article) {
      throw new Error("L'article n'existe pas");
    }
    return await this.db.remove(article);
  }
}
