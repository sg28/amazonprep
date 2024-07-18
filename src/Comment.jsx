import React, { useState } from 'react';

// Single Comment Component with a reply functionality
const Comment = ({ addReply }) => {
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [replyText, setReplyText] = useState('');

    const handleReplyChange = (e) => {
        setReplyText(e.target.value);
    };

    const submitReply = () => {
        if (replyText.trim()) {
            addReply(replyText);
            setReplyText('');
            setShowReplyBox(false);
        }
    };

    return (
        <div>
            <button onClick={() => setShowReplyBox(!showReplyBox)} style={{ marginTop: '10px' }}>
                Reply
            </button>
            {showReplyBox && (
                <div>
                    <input
                        type="text"
                        value={replyText}
                        onChange={handleReplyChange}
                        placeholder="Write a reply..."
                        style={{ marginTop: '5px', marginBottom: '5px' }}
                    />
                    <button onClick={submitReply}>Submit</button>
                </div>
            )}
        </div>
    );
};

// Main Component that includes the paragraph and manages all comments
const CommentSystem = () => {
    const [comments, setComments] = useState([]);

    const addNewComment = (text) => {
        setComments(comments => [...comments, { id: comments.length + 1, text, replies: [] }]);
    };

    const addReplyToComment = (text, index) => {
        const newComments = [...comments];
        newComments[index].replies.push({ id: newComments[index].replies.length + 1, text, replies: [] });
        setComments(newComments);
    };

    return (
        <div>
            <p>This is a paragraph that can be commented on. Click reply to add a comment.</p>
            <Comment addReply={addNewComment} />
            {comments.map((comment, index) => (
                <div key={comment.id} style={{ marginLeft: '20px', borderLeft: '1px solid #ccc', paddingLeft: '10px' }}>
                    <p>{comment.text}</p>
                    <Comment addReply={(text) => addReplyToComment(text, index)} />
                    {comment.replies.length > 0 && comment.replies.map((reply) => (
                        <div key={reply.id} style={{ marginLeft: '20px', borderLeft: '1px solid #ccc', paddingLeft: '10px' }}>
                            <p>{reply.text}</p>
                            <Comment addReply={(text) => addReplyToComment(text, index)} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CommentSystem;
