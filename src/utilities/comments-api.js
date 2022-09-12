import sendRequest from "./send-request"

export function addComment(commentData, id) {
    return sendRequest(`/api/drinks/${id}/comments`, 'POST', commentData);
}

export function deleteComment(id) {
    return sendRequest(`/api/comments/${id}`, 'DELETE');
}