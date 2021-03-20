import React, {useState, useEffect} from "react";
import ArticlesList from "../Components/ArticlesList";
import NotFoundPage from "./NotFoundPage";
import articleContent from "./article-content";

const ArticlePage = ({ match }) => {

  const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});

  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  // fetch('/api/articles/')

  useEffect(()=>{

    const fetchData = async ()=>{
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body)
    }

    fetchData();
  },[name]);


  if (!article) {
    return <NotFoundPage />;
  }
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <>
      <h1>{article.name}</h1>
      <p>This post has been upvoted {articleInfo.upvotes}</p>
      <h4>{article.title}</h4>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
