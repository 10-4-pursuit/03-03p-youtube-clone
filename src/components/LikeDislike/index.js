import React from "react";

export default function LikeDislike() {
    const [likes, setLikes] = React.useState(0);
    const [dislikes, setDislikes] = React.useState(0);
    const [userLiked, setUserLiked] = React.useState(0);
    const [userDisliked, setUserDisliked] = React.useState(0);

    const handleLike = () => {
        setLikes(userLiked ? likes - 1 : likes + 1);
        setUserLiked(!userLiked);

        if (userDisliked) {
            setDislikes(dislikes - 1);
            setUserDisliked(false);
        }
    };

    const handleDislike = () => {
        setDislikes(userDisliked ? dislikes - 1 : dislikes + 1);
        setUserDisliked(!userDisliked);

        if (userLiked) {
            setLikes(likes - 1);
            setUserLiked(false);
        }
    };

    return (
        <div>
            <button onClick={handleLike}>
                Like | {likes}
            </button>
            <button onClick={handleDislike}>
                Dislike | {dislikes}
            </button>
        </div>
    );
}