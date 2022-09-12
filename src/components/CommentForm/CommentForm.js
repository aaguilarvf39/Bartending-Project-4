import { useState } from 'react'

export default function CommentForm({handleAddComment}) {
    const [newComment, setNewComment] = useState('');
    const [rating, setRating] = useState('5');


    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddComment({comment: newComment, rating});
        setNewComment('');
        setRating('5');
    }
    function handleChange(evt) {
        setNewComment({...newComment, [evt.target.name] : evt.target.value});

    }
    function handleRating(evt) {
        setRating({...rating, [evt.target.name] : evt.target.value});
    }

    return (
        <section>
            <form
            onSubmit={handleSubmit}
            >
                <h2>Comments</h2>
                <textarea 
                onChange={handleChange}
                value={newComment}
                placeholder="Comments"></textarea>
                <h2>Rating</h2>
                <select
                value={rating}
                onChange={handleRating}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <button type="submit">Submit Comment</button>
            </form>
        </section>
    )
}