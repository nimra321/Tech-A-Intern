import React, { useState } from 'react'
import "./todo.css"
import TodoCards from './todoCards';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './update';

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
    if(input.title === "" || input.body === "") {
      toast.error("Title OR Body Should Not Be Empty");
    }
    else {
      setArray([...array, input]);
    setInput({ title: "", body: "" });
    toast.success("Your Task Is Added");
    // toast.error("Your Task Is Not Saved ! Please Signup");
    }    
  }
  
  const del = (id) => {
    // console.log(id);
    array.splice(id, "1");
    setArray([...array]);
  }

  const dis = (value) => {
    document.getElementById("todo-update").style.display = value;
  }

  return (
    <>
      <div className='todo'>
      <ToastContainer />
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
          <div className="row">
            {
              array && array.map((item, index) => (
                <div className='col-lg-3 col-10 mx-5 my-2' key={index}>
                  <TodoCards title={item.title} body={item.body} id={index} delid={del} display={dis} />
                </div>
              ))
            }
          </div>
          
        </div>
      </div>
    </div>
    <div className="todo-update" id='todo-update'>
      <div className="container update">
      <Update display={dis} />
      </div>
    </div>
    </>
    
  )
}

export default Todo