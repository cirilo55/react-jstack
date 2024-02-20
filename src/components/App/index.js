import React, {Fragment, useState, createContext} from "react";
import Post from '../Post';
import Header from '../Header';
import { ThemeProvider } from '../../context/ThemeContext';
import Button from "../Button";


function App()
{

    const [posts, setPosts] = useState([
        {id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20, read: true, removed:false},
        {id: Math.random(),title: 'Title#02', subtitle: 'Sub#02', likes: 10, read: false, removed:false},
        {id: Math.random(),title: 'Title#03', subtitle: 'Sub#03', likes: 5, read: true, removed:true }
    ])
    function handleRefresh()
    {
        setPosts((prevState) =>[...prevState, 
        {
            id: Math.random(),
            title: `Title#0${posts.length+1}`,
            subtitle: `Sub#0${posts.length+1}`,
            likes: Math.random(),
            read: false
        }
        ])
    }
    function handleRemovePost(postId)
    {
        setPosts((prevState) => prevState.map(
            post => (post.id === postId

            ? {...post, removed:true }
            : post
            )
        )
        );
    }
    function handleReadPost(postId)
    {
        setPosts((prevState) => prevState.map(
            post => (post.id === postId

            ? {...post, read:true }
            : post
            )
        )
        );
    }


    return (
    <ThemeProvider>
        <Header  title="Jstack's Blog">
            <h2>Posts da semana
                <Button onClick={handleRefresh}>Atualizar</Button>
            </h2>
        </Header>
    
        <hr />
    
        {posts.map(post =>
        (
            <Post 
                key={post.id}
                onRemove={handleRemovePost}
                post={post}
                markPost={handleReadPost}

            />
            
        ))}

    </ThemeProvider>
    )
}

export default App;