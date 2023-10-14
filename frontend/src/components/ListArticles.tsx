import axiosInstance from "@/lib/axiosInstance";
import { Article } from "@/types/Article";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function ListArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    axiosInstance
      .get<Article[]>("/articles/list")
      .then((response) => setArticles(response.data));
  }, []);
  return (
    <div>
      <h1>Liste des articles</h1>
      <ul>
        {articles.map((a) => (
          <li key={a.id}>
            <Link href={`/articles/view/${a.id}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListArticles;
