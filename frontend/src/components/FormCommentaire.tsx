import axiosInstance from "@/lib/axiosInstance";
import { Article } from "@/types/Article";
import { IFormCommentaire } from "@/types/Commentaire";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

function FormCommentaire({
  articleId,
  setArticle,
}: Omit<IFormCommentaire, "title" | "message"> & {
  setArticle: Dispatch<SetStateAction<Article>>;
}) {
  const [commentaire, setCommentaire] = useState<IFormCommentaire>({
    author: undefined,
    title: "",
    message: "",
    articleId,
  });

  useEffect(() => {
    setCommentaire({ ...commentaire, articleId });
  }, [articleId]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axiosInstance
      .post("/commentaires/add", commentaire)
      .then((response) => {
        const { article, ...commentaireData } = response.data;
        setArticle({
          ...article,
          commentaires: [...article.commentaires, commentaireData],
        });
        console.log("%c⧭", "color: #00a3cc", article);
        setCommentaire({ title: "", message: "", articleId });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentaire({ ...commentaire, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Ajouter un commentaire</h3>
      <div>
        <label htmlFor="author">Alias? (non obligatoire)</label>
        <input
          onChange={handleChange}
          name="author"
          value={commentaire.author}
        />
      </div>
      <div>
        <label htmlFor="title">Titre</label>
        <input onChange={handleChange} name="title" value={commentaire.title} />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <input
          onChange={handleChange}
          name="message"
          value={commentaire.message}
        />
      </div>
      <button>Ajouter le commentaire</button>
    </form>
  );
}

export default FormCommentaire;
