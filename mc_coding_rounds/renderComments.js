import{likeComment} from './likeComment.js';
import {deleteComment} from './deleteComment.js';
import {updateComment} from './updateComment.js';
import {addReply} from './addReply.js'

export function renderComments(comments) {
    const commentsDiv = document.getElementById('comments');
    commentsDiv.innerHTML = '';

    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        // Comment text
        const commentText = document.createElement('p');
        commentText.textContent = comment.text;
        commentDiv.appendChild(commentText);

        // Like button
        let likeButton = document.createElement('button');
        likeButton.innerHTML=`<i class="fa-solid fa-heart"></i> Like (${comment.likes})`
        likeButton.onclick = () => likeComment(comment.id);
        commentDiv.appendChild(likeButton);

        // Delete button
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i> Delete';
        deleteButton.onclick = () => deleteComment(comment.id);
        commentDiv.appendChild(deleteButton);

        // Update button and input field
        const updateInput = document.createElement('input');
        updateInput.type = 'text';
        
        let updateButton = document.createElement('button');
        updateButton.innerHTML = '<i class="fa-solid fa-retweet"></i> Update'; // Corrected innerHTML
        
        updateButton.onclick = () => updateComment(comment.id, updateInput.value);
        
        commentDiv.appendChild(updateInput);
        commentDiv.appendChild(updateButton);
        

        // Reply input field and button
        const replyInput = document.createElement('input');
        replyInput.type = 'text';
        const replyButton = document.createElement('button');
        replyButton.innerHTML= '<i class="fa-solid fa-comment"></i> Reply';
        replyButton.onclick = () => addReply(comment.id, replyInput.value);
      

        // Display replies
        if (comment.replies.length > 0) {
            const repliesDiv = document.createElement('div');
            repliesDiv.classList.add('reply');
            comment.replies.forEach(reply => {
                const replyParagraph = document.createElement('p');
                replyParagraph.textContent = `Reply: ${reply}`;
                repliesDiv.appendChild(replyParagraph);
            });
            commentDiv.appendChild(repliesDiv);
        }

        commentsDiv.appendChild(commentDiv);
        commentDiv.appendChild(replyInput);
        commentDiv.appendChild(replyButton);
    });
}
