import React from 'react'

const CommentsList = ({comments}) => {
  return (
    <>
      {comments.length === 0 ? <p>(No Comments Yet)</p> :
        comments.map((comment, index)=>(
        <div key={index} className="comment">
          <h4>{comment.username}</h4>
          <p>{comment.text}</p>
        </div>
      ))}
    </>
  )
}

export default CommentsList
