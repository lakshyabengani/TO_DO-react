import React from 'react';
import './App.css';
import Calender from './Calender';
import './Todo.css';
import Labels from "./labels";
import "./Labels.css"

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          todos: [],
          Label_List: [],
          val: "",
          label: "",
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
    let Label_List = this.state.Label_List;
      if(this.state.Label_List.length == null){
        Label_List = this.state.Label_List.concat({id:this.state.id,label:this.state.label});
      }
      else{
        Label_List = this.state.Label_List.filter(item => item.label !== this.state.label).concat({id:this.state.id,label:this.state.label});
      }
    this.setState(state =>{
      const todos = state.todos.concat({id: state.id, text: state.val , priority : state.priority ,completed: false,deadline: date,label:this.state.label})
      return {
        todos,
        Label_List,
        val : "",
        id : state.id + 1,
        label: ""
      }
    })
    event.preventDefault();
  }

  render() { 
    console.log(this.state);     
      const LabelItems = this.state.Label_List.map(item => <Labels key={item.id} 
      label={item.label}  todos={this.state.todos} handleDelete={this.handleDelete} handleChange={this.handleChange}/>)
      return (
          <div>
            <div className="col col-center">
            <h1>TO-DO APP</h1>
            </div>
            <p/>
            <div align="center">
          <form onSubmit={this.handleSubmit}>
            <h2>Enter Task<input name="val" value={this.state.val} onChange={this.handleText} placeholder="ENTER YOUR TASK" style={{margin:"20px",padding:"10px"}}/>
            Enter Label<input name="label" value={this.state.label} onChange={this.handleText} placeholder="ENTER TASK LABEL" style={{margin:"20px",padding:"10px"}}/>
            <label>
           TASK PRIORITY:
           <select name ="priority" value={this.state.priority} onChange={this.handleText}style={{margin:"20px",padding:"10px"}}>
             <option value="Low">Low</option>
             <option value="Important">Important</option>
           </select>
         </label>
         <br />
         <label>
           DEADLINE DATE: 
            <input type ="date" name="deadline" onChange={this.handleText} style={{margin:"20px",padding:"10px"}}/>
            <input type="submit" value="Submit" style={{margin:"20px",padding:"10px"}}/>
          </label>
          </h2>
          </form>
          </div>
          <p/>
          <div>
            {LabelItems}
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
