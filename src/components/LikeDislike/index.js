import React from "react";
import './styles.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function LikeDislike() {
    const [likes, setLikes] = React.useState(0);
    const [dislikes, setDislikes] = React.useState(0);
    const [userLiked, setUserLiked] = React.useState(0);
    const [userDisliked, setUserDisliked] = React.useState(0);

    const handleLike = () => {
        setLikes(userLiked ? likes - 1 : likes + 1);
        setUserLiked(!userLiked);
        toast.success(userLiked ? "Like removed" : "You liked this!")

        if (userDisliked) {
            setDislikes(dislikes - 1);
            setUserDisliked(false);
        }
    };

    const handleDislike = () => {
        setDislikes(userDisliked ? dislikes - 1 : dislikes + 1);
        setUserDisliked(!userDisliked);
        toast.error(userDisliked ? "Dislike removed" : "You disliked this!")

        if (userLiked) {
            setLikes(likes - 1);
            setUserLiked(false);
        }
    };

    return (
        <>
            <button onClick={handleLike} className="like-button">
                Like | {likes}
            </button>
            <button onClick={handleDislike} className="dislike-button">
                Dislike | {dislikes}
            </button>
            <ToastContainer 
            theme="colored"
            />
        </>
    );
}