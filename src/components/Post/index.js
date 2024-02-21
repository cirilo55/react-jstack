import React, {Fragment} from "react";
import PropTypes, { number } from 'prop-types';
import PostHeader from "./PostHeader";
import {Container, Subtitle, Rate } from './styles'

function Post(props)
{

    return (
            <Container removed={props.post.removed}>
                <PostHeader
                    onRemove={props.onRemove}
                    onRead={props.markPost}
                    post={{
                        id: props.post.id,
                        title: props.post.title,
                        read: props.post.read
                    }}
                 />
                <Subtitle>{props.post.subtitle}</Subtitle>
                <Rate>{props.likes ? 'likes:'+props.likes: ''}</Rate>
            </Container>

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
        read: PropTypes.bool.isRequired,
        removed: PropTypes.bool.isRequired

    }).isRequired
}

export default Post;