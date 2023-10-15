import FormCommentaire from "@/components/FormCommentaire";
import axiosInstance from "@/lib/axiosInstance";
import { Article } from "@/types/Article";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function ViewArticle() {
  const params = useParams();
  const [article, setArticle] = useState<Article>({} as Article);
  console.log('%c⧭', 'color: #e50000', article);
  useEffect(() => {
    if (params?.id) {
      axiosInstance
        .get(`/articles/view/${params.id}`)
        .then((result) => setArticle(result.data));
    }
  }, [params?.id]);

  const handleDeleteCommentaire = (e: React.MouseEvent<HTMLButtonElement>) => {
    const commentaireid = e.currentTarget.dataset.commentaireid!;
    axiosInstance.delete(`/commentaires/delete/${commentaireid}`).then(() => {
      const commentairesArticles = [...article.commentaires].filter(
        (c) => c.id != +commentaireid
      );
      setArticle({ ...article, commentaires: commentairesArticles });
    });
  };
  return (
    <div>
      {article && (
        <>
          <h1>Détail de l'article</h1>
          <div>{article.title}</div>
          <img src={article.picture} width={200} height={"auto"} />
          {article?.commentaires?.length ? (
            <ul>
              {article?.commentaires.map((c) => (
                <li key={c.id}>
                  <h2>
                    {c.title} (par : {c.author || "anonyme"})
                  </h2>
                  <p>{c.message}</p>
                  <button
                    data-commentaireid={c.id}
                    onClick={handleDeleteCommentaire}
                  >
                    Supprimer
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div>Aucun commentaire pour l'instant</div>
          )}
          <FormCommentaire articleId={article.id} setArticle={setArticle} />
        </>
      )}
    </div>
  );
}

export default ViewArticle;
