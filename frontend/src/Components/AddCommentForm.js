import React, {useState} from 'react'

const AddCommentForm = ({articleName, setArticleInfo}) => {
   const [commentText, setCommentText]= useState('');
   const [username, setUsername]= useState('');

   const addComment = async()=>{
      const result = await fetch(`/api/articles/${articleName}/add-comment`, {
        method: 'post',
        body: JSON.stringify({username, text: commentText}),
        headers: {
          "Content-Type": "application/json",
        }
      });
      const body = await result.json();
      setArticleInfo(body)
      setCommentText('');
      setUsername('');
   }

  return (
    <div className="add-comment-form">
      <h3>Add a comment:</h3>
      <label >Name:</label>
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
      <label >Comment: </label>
      <textarea  cols="50" rows="4" value={commentText}  onChange={(e)=>setCommentText(e.target.value)} required></textarea>
      <button onClick={(e)=>addComment()} >Add Comment</button>
    </div>
  )
}

export default AddCommentForm
