import React, {useState, useEffect} from "react";
import ArticlesList from "../Components/ArticlesList";
import CommentsList from "../Components/CommentsList";
import UpvotesSection from "../Components/UpvotesSection";
import NotFoundPage from "./NotFoundPage";
import articleContent from "./article-content";
import {BiLike} from 'react-icons/bi'
import AddCommentForm from "../Components/AddCommentForm";

const ArticlePage = ({ match }) => {

  const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});

  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  useEffect(()=>{

    const fetchData = async()=>{
      const data =  await fetch(`/api/articles/${name}`);
      const articleInfo = await data.json();
      setArticleInfo(articleInfo);
    }

    fetchData();

  },[name])

  if (!article) {
    return <NotFoundPage />;
  }
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <>
      <h1>{article.name}</h1>
      <h4>{article.title}</h4>
      <p><BiLike/> {articleInfo.upvotes}</p>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <UpvotesSection articleName={article.name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
      <h3>Comments:</h3>
      <CommentsList comments={articleInfo.comments}/>
      <AddCommentForm articleName={article.name} setArticleInfo={setArticleInfo}/>
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
