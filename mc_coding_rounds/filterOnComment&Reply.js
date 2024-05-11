import { getComments, setComments } from "./comments.js";
import { renderComments } from "./renderComments.js";

// Define filters function
export function filters() {
    let sortBy = document.getElementById("sortSelect").value;
    console.log("filters", sortBy);
    switch (sortBy) {
        case 'reply':
            filterSortReplies();
            break;
        case 'like':
            filterSortLikes();
            break;
        case 'both':
            filterSortLikesReplies();
            break;
    }
}

function filterSortLikesReplies() {
    console.log("filterLikesReplies");
    let comments = getComments();
    comments.sort((a, b) => {
        if (a.replies.length != b.replies.length) {
            return b.replies.length - a.replies.length;
        }
        if (a.likes != b.likes) {
            return b.likes - a.likes;
        }
        return a.id - b.id;
    });
    setComments([...comments]);
    renderComments(comments);
}

function filterSortLikes() {
    console.log("filterLikes");
    let comments = getComments();
    comments.sort((a, b) => {
        if (a.likes != b.likes) {
            return b.likes - a.likes;
        }
        return a.id - b.id;
    });
    setComments([...comments]);
    renderComments(comments);
}

function filterSortReplies() {
    console.log("filterReplies");
    let comments = getComments();
    comments.sort((a, b) => {
        if (a.replies.length != b.replies.length) {
            return b.replies.length - a.replies.length;
        }
        return a.id - b.id;
    });
    setComments([...comments]);
    renderComments(comments);
}

// Attach event listener for the change event of sortSelect
document.getElementById("sortSelect").addEventListener("change", function() {
    filters();
});

// Call filters function once DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    filters();
});
