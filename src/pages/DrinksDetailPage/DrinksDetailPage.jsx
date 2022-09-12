import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as drinksAPI from '../../utilities/drinks-api';
import * as commentsAPI from '../../utilities/comments-api';
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentCard from "../../components/CommentCard/CommentCard";

export default function DrinksDetailPage() {
    const [drink, setDrink] = useState(null);
    const {idDrink} = useParams();

    async function handleAddComment(comment) {
        const updatedDrink = await commentsAPI.addComment(comment, drink._id);
        setDrink(updatedDrink);
    }

    async function handleDeleteComment(id) {
        const updatedDrink = await commentsAPI.deleteComment(id);
        setDrink(updatedDrink);
    }

    useEffect(function() {
        async function getDrink() {
            const drink = await drinksAPI.getDrinkId(idDrink);
            setDrink(drink);
        }
        getDrink();
    }, []);
    if (!drink) return null;
    return (
        <>
            <div>
                <h1>{drink.strDrink}</h1>
                <img src={drink.strDrinkThumb} alt={drink.strDrink} height="300" width="300"></img>
                <br /><br />
                <h2>Drink Details</h2>
                <ul>
                    {drink.ingredients.map(i => <li key={i}>{i}</li>)}
                </ul>
                <h3>{drink.strInstructions}</h3>
            </div>
            <CommentForm handleAddComment={handleAddComment} />
            <CommentCard handleDeleteComment={handleDeleteComment} drink={drink} />
        </>
    )
}