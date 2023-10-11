
# 1 - Création du back

L'idée est d'avoir un back avec une base de donnée **sqlite**, **typeorm** pour interagir avec, un serveur express, des routes en fonction de nos besoins.

**Gardons à l'idée le pitch du projet suivant:**

*Nous devons pouvoir afficher une liste d'articles de manière concise sur la page principale, en utilisant les données précédemment créées.
On doit pouvoir afficher chaque article de manière plus détaillée.
On doit pouvoir commenter un article sur cette page détaillée (par soucis de simplicité, un commentaire ne sera pas rattaché à un compte utilisateur, mais à un pseudo libre (si non indiqué, on partira du principe que la personne est anonyme).*
On prévoira une route pour la création d'un article (elle aussi, par soucis de simplicité, elle sera accessible librement, mais on se doute bien qu'elle pourrait être protégée si un jour notre super blog contient des comptes utilisateurs!)

## a - Initialisation du projet
Pour se faire, nous allons devoir : 
 - créer le dossier "**backend**"
 - initialiser le projet avec **npm init**
 - prévoir le gitignore (qui comportera notre node_modules, le package-lock.json)
 - installer ce qui nous permettra de gérer la base de données (sqlite, typeorm) et créer le fichier "datasource" pour s'y connecter
 - démarrer le projet express (depuis le fichier index.ts)
 - prévoir nos routes (dans des dossiers dédiés) de CRUD (Create, Read, Update, Delete).
 
De mon côté je prévoir comme route, la création, l'édition et  la suppression d'un article sans oublier la récupération d'un seul article.
Je prévois aussi route dédiée à la récupération d'une liste d'articles.
Je prévois des routes un peu équivalentes pour les commentaires (ajout, suppression, édition, récupération).

Cela ouvre donc la voie aux entités qui vont représenter ma base de données : 
- Article
- Commentaire

Ensuite, je devrais prévoir les services intermédiaires qui communiqueront avec la base de données
