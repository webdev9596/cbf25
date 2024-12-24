import React, { useState } from 'react'
import { userComments } from './CommentObject.js'

const Comments = () => {
    const [comments, setComments] = useState([...userComments])

    return (
        <div className='commentsContainer'>
            <h3>Comments</h3>
            {
                comments.map((comment, i) => {
                    return <div className="singleComment" key={i}>
                        <div className="commentTop">
                            <div className="postingUser">Anonymous</div>
                        </div>
                        <div className="comment">{comment.fmsDesc}</div>
                    </div>
                })
            }
        </div>
    )
}

export default Comments
