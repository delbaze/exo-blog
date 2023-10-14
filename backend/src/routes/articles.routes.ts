import { Request, Response, Router } from "express";
import ArticleService from "../services/Article.service";
import { ICreateArticle } from "../types/Article";
const router = Router();

router.get("/list", async (req: Request, res: Response) => {
  //* Récupération de la liste des articles
  const list =  await new ArticleService().list();
  res.send(list)
});
router.post("/add", async (req: Request, res: Response) => {
  //* Création d'un article
  try {
    const data: ICreateArticle = req.body;
    const article = await new ArticleService().create(data);
    res.send(article);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.patch("/update/:id", async (req: Request, res: Response) => {
  //* Modification d'un article
  const id = req.params.id;
  const data: ICreateArticle = req.body;
  try {
    const article = await new ArticleService().update(+id, data);
    res.send(article);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.delete("/delete/:id", async (req, res) => {
  //* Suppression d'un article
  const id = req.params.id;
  try {
    const article = await new ArticleService().delete(+id);
    res.send(article);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

export default router;
