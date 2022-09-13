export default function commentCard({drink, handleDeleteComment, user}) {
    return (
        drink.comments.map(d => <h4 className="form"><span>User: {d.userName} <br /> Rating: {d.rating} <br />
        Comment: {d.comment} <br /> {user.name === d.userName ? <button onClick={() => handleDeleteComment(d._id)} >Delete Comment</button> : '' }</span></h4>)
    )
}