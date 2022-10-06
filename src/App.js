import React, { useState } from "react";
import './App.css';

function App() {
  const [todos, setTodos] = useState([  // 제일 상위에 리스트를 스테이츠 선언, todos는 객체를 요소로 가지고 있는 배열
  {
    id : 1,
    comment : "react를 배워 봅시다.",
  }
  ])
  return (
    <Layout>
        <Form todos={todos} setTodos={setTodos}/>
        <Header />
        <List todos={todos} />
    </Layout>
)
}



function Layout(props){
return(
  <div className="layout">{props.children}</div>
)
}



let number = 2;
function Form({todos, setTodos}){
  const initialState ={
    id : 0,
    comment : "",
  }

  const [todo, setTodo] = useState(initialState)

  const onChangeHandler = function(event){
    const {value} = event.target;
    setTodo({...todo, comment:value})
  }

  const onSubmitHandler = function(event){
    event.preventDefault();
    setTodos([...todos, {...todo, id:number}]);
    number++;
  }

  return(
    <form className="form" onSubmit={onSubmitHandler}>
      <input 
        type="text"  
        name="comment" 
        onChange={onChangeHandler}>
        </input>
        <button className="button">추가하기</button>
    </form>
  )
}



function Header(){
  return(
    <div className="header">
      <h1>Todo List</h1>
    </div>
  )
}



function List({todos}){

  return(
    <div className="listbox">
      {todos.map((todo) => {
        return(
          <Todo 
          todo={todo}
          key={todo.id}
          />
        )
      })}
    </div>
  )
}



function Todo({todo}){

  return(
    <div className="todo">
      <div className="todo-comment">
        {todo.comment}
      </div>
    </div>
  )
}

export default App;
