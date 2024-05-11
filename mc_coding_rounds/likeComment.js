import { renderComments } from './renderComments.js';
import { getComments, setComments } from './comments.js';

export function likeComment(commentId) {
    let comments=getComments();
    const comment = comments.find(comment => comment.id === commentId);
    const commentIndex=comments.findIndex(comment => comment.id === commentId);
    if (comment) {
        comment.likes++;
        comments[commentIndex]=comment;
        setComments([...comments]);
        renderComments(comments);
    }
}
