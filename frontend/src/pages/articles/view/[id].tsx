import axiosInstance from "@/lib/axiosInstance";
import { Article } from "@/types/Article";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function ViewArticle() {
  const params = useParams();
  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    if (params?.id) {
      axiosInstance
        .get(`/articles/view/${params.id}`)
        .then((result) => setArticle(result.data));
    }
  }, [params?.id]);
  return (
    <div>
      {article && (
        <>
          <h1>Détail de l'article</h1>
          <div>{article.title}</div>
          <img src={article.picture} width={200} height={"auto"} />
        </>
      )}
    </div>
  );
}

export default ViewArticle;
