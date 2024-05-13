import React, { useState } from 'react'
import "./todo.css"
import TodoCards from './todoCards';

const Todo = () => {
  const [ input , setInput ] = useState({ title: "", body: "" });
  const [ array, setArray ] = useState([]);

  const show = () => {
    document.getElementById("textarea").style.display = "block";
  }

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  const submit = () => {
    setArray([...array, input]);
    setInput({ title: "", body: "" });
  }

  return (
    <div className='todo'>
      <div className="todo-main container d-flex justify-content-center align-items-center flex-column">
        <div className="d-flex flex-column todo-inputs-div w-50 p-1">
          <input type="text" placeholder='TITLE' className='p-2 my-2 todo-inputs' onClick={ show } onChange={change} name='title' value={input.title}/>
          <textarea id='textarea' type="text" placeholder='BODY' className='p-2 todo-inputs' onChange={change} name='body' value={input.body} />          
        </div>
        <div className=" w-50 d-flex justify-content-end my-3">
          <button className='home-btn px-2 py-1' onClick={submit}>Add</button>
        </div>
        
      </div>
      <div className="todo-body">
        <div className="container-fluid">
          <div className="row bg-primary">
            {
              array && array.map((item, index) => (
                <div className='col-lg-3 bg-success mx-5 my-2'>
                  <TodoCards />
                </div>
              ))
            }
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Todo