import React from 'react';
import './Styles/App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Calender from './Components/Calender';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {addTodo,addLabel,deleteTodo,toggleTodo} from './Redux/ActionCreators'


const mapStateToProps = state =>{
  console.log("state",state);
  return {
    todos: state.todos,
    Label_List: state.Label_List,
    isLoggedIn : false,
  }
}

const mapDispatchToprops = dispatch =>({
 addTodo : (id, val, deadline , label , priority) => dispatch(addTodo(id, val, deadline , label , priority)),
 addLabel : (id,label) => dispatch(addLabel(id,label)),
 toggleTodo : (id) => dispatch(toggleTodo(id)),
 deleteTodo : (id) => dispatch(deleteTodo(id)),
});

class App extends React.Component {
  constructor(props) {
      super(props)
      console.log(props);
      // this.state = {
      //     todos: [],
      //     Label_List: [],
      //     val: "",
      //     label: "",
      //     priority: "Low",
      //     id : 0,
      //     deadline: new Date(),
      //     showModal : false,
      // }
      // this.handleChange = this.handleChange.bind(this)
      // this.handleSubmit = this.handleSubmit.bind(this)
      // this.handleText = this.handleText.bind(this)
      // this.handleDelete = this.handleDelete.bind(this)
      // this.handleModal = this.handleModal.bind(this)
  }
  
  submitForm = (id, val, date , label , priority) =>{
    let todo = this.props.addTodo(id,val,date,label,priority);
    let Label = this.props.addLabel(id,label);
    console.log(todo);
    console.log (Label);
  }

  // handleModal(){
  //   this.setState({
  //     showModal : true
  //   })
  // }

  // handleClose =() =>{
  //   this.setState({
  //     showModal : false
  //   })
  // }

  // handleDelete(id){
    // this.setState(prevState =>{
    //   const todos = prevState.todos.filter(item => item.id!==id);
    //   return {todos,};
    // })
    // this.props.deleteTodo(id);
  // }

  // handleChange(id) {
      // this.setState(prevState => {
      //     const updatedTodos = prevState.todos.map(todo => {
      //         if (todo.id === id) {
      //             todo.completed = !todo.completed
      //         }
      //         return todo
      //     })
      //     return {
      //         todos: updatedTodos
      //     }
      // })
  // }

  // handleText(event){
  //   const {name, value} = event.target
  //     this.setState({
  //         [name]: value
  //     })
  //     //console.log(name+" "+value);
  // }

  // handleSubmit(event){
  //   let date = new Date(this.state.deadline);
  //   this.setState({
  //       val : "",
  //       id : state.id + 1,
  //       label: "",
  //       showModal : false,
  //   })
  //   event.preventDefault();
  // }

  render() { 
      return (
        <div>
          <NavBar />
          <div className="grid">
          <Switch>
            <Route exact path="/Home" render={()=><Home submitForm={this.submitForm} Label_List={this.props.Label_List} todos={this.props.todos} handleDelete={this.props.deleteTodo} handleChange={this.props.toggleTodo} addTodo={this.props.addTodo} addLabel={this.props.addLabel} />} />
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            <Route exact path="/Progress" render={()=> <Calender list={this.props.todos} />} />
          </Switch>
          </div>         
        </div>
      )    
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToprops)(App));
