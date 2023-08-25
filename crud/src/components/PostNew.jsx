import React, { useState } from 'react'
import { postNote } from './crud';

const PostNew = () => {
  const [message, setMessage] = useState({
    id: 0,
    autor: '',
    content: '',
    created: 0,
  });

  const handlerSubmit = (event) => {
    console.log('Submitted: ' + JSON.stringify(message));
    event.preventDefault();
    //postNote(message);
  }
  
  const handlerAutor = (event) => {
    message.autor = event.target.value;
  }
  
  const handlerMessage = (event) => {
    message.content = event.target.value;
  }

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <fieldset>
          <label htmlFor='autor'>Автор: </label>
          <input type='text' id='autor' name='autor'
            onChange={e => handlerAutor(e)}
          />
          <br />
          <label htmlFor='content'>Сообщение: </label>
          <input type='text' id='content' name='content'
            onChange={e => handlerMessage(e)}
          />
          <br />
          <input type='submit' value='Применить' />
        </fieldset>
      </form>
    </div>
  )
}

export default PostNew