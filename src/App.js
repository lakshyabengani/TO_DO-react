import React from 'react';
import './App.css';
import Calender from './Calender';
import './Todo.css';
import TodoItem from "./TodoItem"

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          todos: [],
          val: "",
          priority: "Low",
          id : 0,
          deadline: new Date()
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleText = this.handleText.bind(this)
      this.handleDelete = this.handleDelete.bind(this)
  }
  
  handleDelete(id){
    this.setState(prevState =>{
      const todos = prevState.todos.filter(item => item.id!==id);
      return {todos,};
    })
  }

  handleChange(id) {
      this.setState(prevState => {
          const updatedTodos = prevState.todos.map(todo => {
              if (todo.id === id) {
                  todo.completed = !todo.completed
              }
              return todo
          })
          return {
              todos: updatedTodos
          }
      })
  }


  handleText(event){
    const {name, value} = event.target
        this.setState({
            [name]: value
        })
        //console.log(name+" "+value);
  }

  handleSubmit(event){
    let date = new Date(this.state.deadline);
    this.setState(state =>{
      const todos = state.todos.concat({id: state.id, text: state.val , priority : state.priority ,completed: false,deadline: date})
      return {
        todos,
        val : "",
        id : state.id + 1
      }
    })
    event.preventDefault();
  }

  render() {      
      const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleDelete={this.handleDelete} handleChange={this.handleChange}/>)
      return (
          <div>
            <div className="col col-center">
            <h1>TO-DO APP</h1>
            </div>
            <p/>
            <div align="center">
          <form onSubmit={this.handleSubmit}>
            <h2>Enter Task<input name="val" value={this.state.val} onChange={this.handleText} placeholder="ENTER YOUR TASK" style={{margin:"20px",padding:"10px"}}/>
            <label>
           TASK PRIORITY:
           <select name ="priority" value={this.state.priority} onChange={this.handleText}style={{margin:"20px",padding:"10px"}}>
             <option value="Low">Low</option>
             <option value="Important">Important</option>
           </select>
         </label>
         <label>
           DEADLINE DATE:
            <input type ="date" name="deadline" onChange={this.handleText}/>
            <input type="submit" value="Submit" style={{margin:"20px",padding:"10px"}}/>
          </label>
          </h2>
          </form>
          </div>
          <p/>
          <div className="todo-list">
              {todoItems}
          </div>
          <div>
            <p />
            <Calender list={this.state.todos}/>
            </div>
          </div>
      )    
  }
}

export default App;
