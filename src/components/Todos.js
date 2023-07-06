import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'
import { removeTodo, handleCheckbox } from '../redux/todoapp/actions';

export const Todos = ({handleEditClick, editFormVisibility}) => { // handleEditClick, editFormVisibility passes as a prop from app.js file
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // getting todos from the store
  const todos = useSelector((state)=>state.operationsReducer);
  //console.log(todos); //this will provide the initial state mentioned in reducers.
  return todos.map((todo)=>(
    <div key={todo.id} className='todo-box'>
        <div className='content'>
            {editFormVisibility===false&&(
              <input type="checkbox" checked={todo.completed} 
              onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
            )}
            <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {todo.todo}
            </p>
        </div>
        <div className='actions-box'>
              {editFormVisibility===false&&( // variable accessed by form and todo file
                <>
                  <span onClick={()=>handleEditClick(todo)}><Icon className="edit" icon={edit2}/></span>
                  <span onClick={()=>dispatch(removeTodo(todo.id))}><Icon className="edit" icon={trash}/></span>
                </>
              )}
        </div>
    </div>
  ))
}

//handleEditClick how we accessed