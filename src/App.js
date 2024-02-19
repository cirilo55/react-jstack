import React, {Fragment, useState, createContext} from "react";
import Post from './Post';
import Header from './Header';
import { ThemeProvider } from './ThemeContext';
import Button from "./Button";


function App()
{

    const [posts, setPosts] = useState([
        {id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20, read: true},
        {id: Math.random(),title: 'Title#02', subtitle: 'Sub#02', likes: 10, read: false},
        {id: Math.random(),title: 'Title#03', subtitle: 'Sub#03', likes: 5, read: true}
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
        setPosts((prevState) => prevState.filter(post => post.id !== postId))
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

            />
            
        ))}

    </ThemeProvider>
    )
}

export default App;