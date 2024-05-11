import { addComment } from './addComment.js';
import { renderComments } from './renderComments.js';

// Define an empty array to hold comments
let comments = [];


export function getComments() {
    return comments;
}

export function setComments(newComments) {
    comments = newComments;
}

let commentButton=document.getElementById('addCommentBtn');
commentButton.addEventListener('click', () => addComment());

// renderComments(comments);
