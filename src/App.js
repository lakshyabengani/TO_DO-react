import React from 'react';
import './Styles/App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Calender from './Components/Calender';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

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
          deadline: new Date(),
          showModal : false,
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleText = this.handleText.bind(this)
      this.handleDelete = this.handleDelete.bind(this)
      this.handleModal = this.handleModal.bind(this)
  }
  
  handleModal(){
    this.setState({
      showModal : true
    })
  }

  handleClose =() =>{
    this.setState({
      showModal : false
    })
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
        label: "",
        showModal : false,
      }
    })
    event.preventDefault();
  }

  render() { 
      return (
        <div>
          <BrowserRouter>
          <NavBar />
          <div class="grid">
          <Switch>
            <Route exact path="/Home" render={()=><Home Label_List={this.state.Label_List} todos={this.state.todos} handleDelete={this.handleDelete} handleChange={this.handleChange}
            handleModal={this.handleModal} showModal={this.state.showModal} val={this.state.val} handleSubmit={this.handleSubmit} handleText={this.handleText} handleClose={this.handleClose} />} />
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            <Route exact path="/Progress" render={()=> <Calender list={this.state.todos} />} />
          </Switch>
          </div>
          </BrowserRouter>            
        </div>
      )    
  }
}

export default App;
