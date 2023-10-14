import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  JoinTable,
  UpdateDateColumn,
} from "typeorm";
import { Length } from "class-validator";
import { Article } from "./Article.entity";

@Entity()
export class Commentaire {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  @Length(5, 50, { message: "Le titre doit contenir entre 5 et 50 caractères" })
  title: string;

  @Column({ nullable: true, type: "text" })
  message: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @JoinTable()
  @ManyToOne(() => Article, (a) => a.commentaires, {
    cascade: true,
    onDelete: "CASCADE",
  })
  article: Article;

}
