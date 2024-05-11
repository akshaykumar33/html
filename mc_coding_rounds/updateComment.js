import { renderComments } from './renderComments.js';
import { getComments, setComments } from './comments.js';

export function updateComment(commentId, newText) {
    let comments=getComments();
    
    const commentToUpdateIndex = comments.findIndex(comment => comment.id === commentId);
    const commentToUpdate=comments.find(comment => comment.id === commentId);
    try
    {if (commentToUpdate) {
        if(newText)
        {commentToUpdate.text = newText;
        comments[commentToUpdateIndex]=commentToUpdate;
        setComments([...comments]);
        renderComments(comments);}
        else{
            throw new Error("Comments can't be empty")
        }
    }}
    catch(e){
        alert(e.message);
    }finally{
        alert("Sucessful")
     }
}
