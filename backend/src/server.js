import express from "express";
import { MongoClient } from "mongodb";
const PORT = 8000;

const app = express();

// replaced bodyParser
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Pterodactyl!");
});

app.get("/api/articles/:name", async (req, res) => {
  try {
    const articleName = req.params.name;
    // set up connection to db and client to make queries.
    const client = await MongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("my-blog");
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: `${articleName}` });

    res.status(200).json(articleInfo);
    // once data is sent, close the connection to the database.
    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connection to DB", error });
  }
});

app.post("/api/articles/:name/upvote", async (req, res) => {
  try {
    const articleName = req.params.name;
    const client = await MongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("my-blog");
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: `${articleName}` });
    await db.collection("articles").updateOne(
      { name: `${articleName}` },
      {
       $set: {
          "upvotes": articleInfo.upvotes += 1,
        },
      }
      
    );
    const updatedArticleInfo = await db
      .collection("articles")
      .findOne({ name: `${articleName}` });
    res.status(200).json(updatedArticleInfo);
    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connection to DB", error });
  }
});

app.post("/api/articles/:name/add-comment", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  articlesInfo[articleName].comments.push({ username, text });
  res.status(200).send(articlesInfo[articleName]);
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
