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
    console.log("NOPE: STILL DIDNT WORK");
    res.status(500).json({ message: "Error connection to DB", error });
    throw new Error(error);
  }
});

app.post("/api/articles/:name/upvote", (req, res) => {
  const articleName = req.params.name;
  articlesInfo[articleName].upvotes += 1;
  res
    .status(200)
    .send(
      `${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`
    );
});
app.post("/api/articles/:name/add-comment", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  articlesInfo[articleName].comments.push({ username, text });
  res.status(200).send(articlesInfo[articleName]);
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
