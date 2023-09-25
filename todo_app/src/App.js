import React, {useState} from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([])
   let addList = (inputText)=>{
    if(inputText!=='')
    setListTodo([...listTodo, inputText])
   }
   let deleteTodoList = (key)=>{
    let newListDelete = [...listTodo];
    newListDelete.splice(key,1)
    setListTodo([...newListDelete])
   }
  return (
    <>
    <div className="main-container">
      <div className="center-container">
<TodoInput addList={addList}/>
<h1 className="app-heading">TODO</h1>
  <hr />
{listTodo.map((v,i)=>{
  return(
    <TodoList key={i} index={i} item={v} deleteTodo={deleteTodoList}/>
  )
})}
      </div>
    </div>
    </>
  );
}

export default App;
