import React, {Fragment} from "react";
import PropTypes, { number } from 'prop-types';
import PostHeader from "./PostHeader";
import styles from './Post.scss';

function Post(props)
{

    return (
            <article className={props.post.removed ? styles.postDeleted : styles.post}>
                <PostHeader
                    onRemove={props.onRemove}
                    onRead={props.markPost}
                    post={{
                        id: props.post.id,
                        title: props.post.title,
                        read: props.post.read
                    }}
                 />
                <small>{props.post.subtitle}</small>
                <div>{props.likes ? 'likes:'+props.likes: ''}</div>
            </article>

        );
}
//para objeto nos usamos o .shape
Post.propTypes ={
    onRemove: PropTypes.func,
    onRead: PropTypes.func,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        read: PropTypes.bool.isRequired
    }).isRequired
}

export default Post;