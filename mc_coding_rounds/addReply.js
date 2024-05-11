import { renderComments } from './renderComments.js';
import { getComments, setComments } from './comments.js';

export function addReply(commentId, replyText) {
    let comments=getComments();
    const comment = comments.find(comment => comment.id === commentId);
    const commentIndex=comments.findIndex(comment => comment.id === commentId);
        try{if (comment) {
        comment.replies.push(replyText);
        if(replyText){comments[commentIndex]=comment;
        setComments([...comments]);}
        renderComments(comments);
    }
else{
    throw new Error("Reply can't be Empty")
}}
    catch(e){
      alert(e.message)
    }finally{
        alert("Sucessful")
     }
}
