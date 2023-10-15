import { Request, Response, Router } from "express";
import CommentaireService from "../services/Commentaire.service";
import { ICreateCommentaire } from "../types/Commentaire";
const router = Router();

router.get("/list", async (req: Request, res: Response) => {
  //* Récupération de la liste des commentaires
  const list = await new CommentaireService().list();

  res.send(list);
});

router.get("/listByArticleId/:articleId", async (req: Request, res: Response) => {
  const articleId = req.params.articleId;
  //* Récupération de la liste des commentaires pour un article donné
  const list = await new CommentaireService().listByArticleId(+articleId);
  res.send(list);
});

router.post("/add", async (req, res) => {
  //* Création d'un commentaire
  try {
    const data: ICreateCommentaire = req.body;
    console.log("DATA", data);
    const commentaire = await new CommentaireService().create(data);
    console.log('%c⧭', 'color: #00e600', commentaire);
    res.send(commentaire);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.patch("/update/:id", async (req: Request, res: Response) => {
  //* Modification d'un commentaire
  const id = req.params.id;
  const data: ICreateCommentaire = req.body;
  try {
    const commentaire = await new CommentaireService().update(+id, data);
    res.send(commentaire);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.delete("/delete/:id", async (req: Request, res: Response) => {
  //* Suppression d'un commentaire
  const id = req.params.id;
  try {
    const commentaire = await new CommentaireService().delete(+id);
    res.send(commentaire);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

export default router;
