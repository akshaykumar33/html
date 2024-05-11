import { renderComments } from './renderComments.js';
import { getComments, setComments } from './comments.js';

export function deleteComment(commentId) {
    // Get the current comments array
    let comments = getComments();
   
    // Filter out the comment with the specified ID
    const filteredComments = comments.filter(comment => comment.id !== commentId);

    // Set the updated comments array
    setComments([...filteredComments]);

    // Render the updated comments
    renderComments(filteredComments);
}
