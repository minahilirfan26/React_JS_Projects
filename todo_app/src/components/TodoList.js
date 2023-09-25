import React from 'react'

function TodoList(props) {
  return (
    <div className="list-item">
      <li>
        {props.item}

        <span className='icons'>
            <i className="fa-solid fa-trash icon-delete" onClick={e=>{
                props.deleteTodo(props.index)
            }}></i>
        </span>
      </li>
    </div>
  )
}

export default TodoList
