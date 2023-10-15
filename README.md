
# 2 - Création du front

Maintenant que le back est en grande partie fait, on va créer l'application front Next.
Pour se faire, on peut utiliser la commande prévue à cet effet : 
```bash
npx create-next-app@latest
```
Si vous avez du mal à l'exécuter sur votre ordinateur, pensez à l'alternative avec yarn : 
```bash
yarn create next-app
```
**Attention** : N'oubliez pas de choisir Typescript, le dossier src, et de dire non lorsqu'il vous propose le App router (puisqu'on utilise le Page router pour cet exercice).


# a - Les routes
On va maintenant créer les routes.
Je vais prévoir une page d'accueil avec la liste des articles.
Une page dédiée au détail d'un article (et la visualisation des commentaires en bas de l'article, et potentiellement le formulaire d'ajout de commentaires).
A la fin, je vais prévoir une route "d'administration" pour ajouter un article
Je vais prévoir une barre de navigation simple, je vais donc prévoir une Layout qui sera la même partout et qui contiendra cette navbar.

**Je préviens aussi, je ne fais aucun CSS ici, l'idée est de se concentrer au maximum sur Next.js et l'architecture.**


# b - Outils
Pour faire les requêtes, j'utilise axios.
Je créé une instance d'axios préparamétrée que je stocke dans un dossier lib.
J'y utilise une variable d'environnement que je stocke dans un fichier .env, avec la clé suivante : NEXT_PUBLIC_BACKURL
Cette variable contient l'url du backend.
Je laisse volontairement le fichier d'environnement dans le dépôt, mais bien entendu on ne le laisserait pas sur un projet d'entreprise.

Pour pouvoir interoger le backend, il faut autoriser le front à y accéder.
Pour ça, il faut modifier désormais le back (le fichier index.ts) pour rajouter CORS (npm i cors puis npm i --save-dev @types/cors).
Regarder l'index.ts du back pour vous aider si besoin.

Je modifie également la requête dans les routes de "article" pour permettre de récupérer la relation "commentaires" au moment de récupérer le détail d'un article.
Ca me permettra d'afficher la liste des commentaires sous l'article.

Je modifie l'entité Commentaire côté back pour prévoir le cas où l'auteur est anonyme : 
@Column({ default: null, type: "text" })
author?: string;

Je rajoute donc un champs dans mon formulaire "alias" pour celui qui souhaiterait rajouter un nom d'auteur.