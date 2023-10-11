import { Router } from "express";
const router = Router();

router.get("/list", (req, res) => {
  //* Récupération de la liste des articles
});
router.post("/add", (req, res) => {
  //* Création d'un article
});

router.patch("/update/:id", (req, res) => {
  //* Modification d'un article
});

router.delete("/delete/:id", (req, res) => {
  //* Suppression d'un article
});


export default router;