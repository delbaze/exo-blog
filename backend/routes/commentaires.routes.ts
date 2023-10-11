import { Router } from "express";
const router = Router();

router.get("/list/:articleId", (req, res) => {
  //* Récupération de la liste des commentaires pour un article donné
});
router.post("/add", (req, res) => {
  //* Création d'un commentaire
});

router.patch("/update/:id", (req, res) => {
  //* Modification d'un commentaire
});

router.delete("/delete/:id", (req, res) => {
  //* Suppression d'un commentaire
});

export default router;
