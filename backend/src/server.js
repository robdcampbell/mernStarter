import express from "express";
import { MongoClient } from "mongodb";
import path from 'path';
const PORT = 8000;

const app = express();

// server up static assests
app.use(express.static(path.join(__dirname, '/build')))

// replaced bodyParser
app.use(express.json());

// refactored DB connection setup/teardown - wrapper code for DB Queries
const withDB = async(operations, res)=>{
 try {
    // set up connection to db and client to make queries.
    const client = await MongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("my-blog");
   
    await operations(db);

    // once data is sent, close the connection to the database.
    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connection to DB", error });
  }
}

app.get("/", (req, res) => {
  res.send("Hello Pterodactyl!");
});

app.get("/api/articles/:name", async (req, res) => {


      withDB(async (db)=>{
  
      const articleName = req.params.name;
      const articleInfo = await db
      .collection("articles")
      .findOne({ name: `${articleName}` });
      res.status(200).json(articleInfo);  
      
    }, res)


  

});

app.post("/api/articles/:name/upvote", async (req, res) => {
  
    withDB(async (db)=>{
      const articleName = req.params.name;
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
      .findOne({ name: articleName });
    res.status(200).json(updatedArticleInfo);
    }, res)
    
 
});

app.post("/api/articles/:name/add-comment", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  withDB(async(db)=>{
    const articleInfo = await db.collection('articles').findOne({ name: articleName})
    await db.collection('articles').updateOne({name: articleName}, {
      $set: {
        comments: articleInfo.comments.concat({username, text})
      }
    })
     const updatedArticleInfo = await db
      .collection("articles")
      .findOne({ name: articleName});
    res.status(200).json(updatedArticleInfo);
  },res)

});

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname + '/build/index.html'))
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
