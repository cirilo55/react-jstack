import React, {Fragment} from "react";
import PropTypes, { number } from 'prop-types';
import PostHeader from "./PostHeader";

function Post(props)
{

    return (
        <>
            <article>
                <PostHeader
                    onRemove={props.onRemove}
                    post={{
                        id: props.post.id,
                        title: props.post.title,
                        read: props.post.read
                    }}
                 />
                <small>{props.post.subtitle}</small>
                <div>{props.likes ? 'likes:'+props.likes: ''}</div>
            </article>
            <br />
        </>
        );
}
//para objeto nos usamos o .shape
Post.propTypes ={
    onRemove: PropTypes.func,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        read: PropTypes.bool.isRequired
    }).isRequired
}

export default Post;