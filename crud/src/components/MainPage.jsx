import React, { useState, useEffect } from 'react'
import { getNote, postNote, deleteNote } from './crud'

const MainPage = () => {
  const [state, setState] = useState({
    value: 0,
  }); 
  const [posts, setPosts] = useState([])

  // const [sAutor, setAutor] = useState('')
  // const [sContent, setContent] = useState('')

  const fetchPosts = async () => {
    try {
      const responce = await fetch('http://localhost:7070/posts');
      if (!responce.ok) {
        throw new Error("Error fetch");
      }
      const data = await responce.json();
      setPosts(data)
      //setPosts(getNote());
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  function handlerSubmit(event) {
    console.log('Submitted: ' + state.value);
    event.preventDefault();
  }

  const handlerEdit = (note) => {
    editNote(note);
  }

  const handlerDelete = (id) => {
    deleteNote(id)
  }

  return (
    <>
      <form onSubmit={handlerSubmit}>
        {posts.map((post, i) => (
          <fieldset key={i}>
            <legend>Пост</legend>
            <div>
              <label>{post.id}</label>
              <p>{post.autor}</p>
              <h3>{post.content}</h3>
              <p>{post.created}</p>
              <details>
                <summary>Редактировать</summary>
                <label>Автор: </label>
                <input type='text' value={post.autor} />
                
                <label>Сообщение: </label>
                <input value={post.content} />
                <button onClick={handlerEdit(post)}>Сохранить</button>
              </details>
              <button onClick={p => handlerDelete(post.id)}>Удалить</button>
            </div>
          </fieldset>
        ))}
      </form>
    </>
  )
}

export default MainPage