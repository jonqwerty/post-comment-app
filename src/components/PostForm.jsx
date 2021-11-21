import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
      }


    return (
       
             <form>
        <MyInput 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})} 
          type="text" 
          placeholder="name of the post"
        />
        
        <MyInput 
          //ref={bodyInputRef}
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})} 
          type="text" 
          placeholder="description of the post"
        /> 
        <MyButton onClick={addNewPost} >create post</MyButton>
      </form>
 
        
    )
}

export default PostForm