import "reflect-metadata";
import express from "express";
import db from "./db";
import cors from "cors";

import articlesRouter from "./routes/articles.routes";
import commentairesRouter from "./routes/commentaires.routes";

const app = express();
const port = 4000;

/**========================================================================
 *                           MIDDLEWARE GLOBAUX
 *========================================================================**/

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" })); //un seul

/**========================================================================
 *                           Routes
 *========================================================================**/
app.use("/articles", articlesRouter);
app.use("/commentaires", commentairesRouter);

/**========================================================================
 *                           Lancement du serveur
 *========================================================================**/
app.listen(port, async () => {
  await db.initialize();
  console.log(`Server running on http://localhost:${port}`);
});
