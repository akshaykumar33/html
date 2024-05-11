import { renderComments } from "./renderComments.js";
import { getComments, setComments } from './comments.js';

export function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
        // Get the current comments array
        let comments = getComments();
    
   try {if (commentText !== '') {
        const comment = {
            id: comments.length + 1,
            text: commentText,
            likes: 0,
            replies: []
        };

        comments.push(comment);
        setComments([...comments]);
        renderComments(comments);
        commentInput.value = '';
    }else{
        throw new Error("You can't add an empty Comment")
    }}
    catch(e){
       alert(e)
    }
    finally{
       alert("Sucessful")
    }
}

