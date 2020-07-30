import React from 'react';
import Modal from './Modal';
import Labels from './labels';
import '../Styles/App.css'

class Home extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            showModal : false,
        }
    }

    handleModal = () =>{
        this.setState({
          showModal : true
        })
      }
    
      handleClose =() =>{
        this.setState({
          showModal : false
        })
      }

    renderTodo =()=>{
        if(this.props.Label_List.length > 0){      
            let LabelItems = this.props.Label_List.map(item => <Labels key={item.id} 
            label={item.label}  todos={this.props.todos} handleDelete={this.props.handleDelete} handleChange={this.props.handleChange}/>)
            return LabelItems;
        }
        else{
            return <div align ="center" className="col col-center"><h1>NO TASKS PRESENT :)</h1> </div>
        }
    }

    render() {
        
        return (
            <div>
                <Modal show={this.state.showModal} handleClose ={this.handleClose} addTodo={this.props.addTodo} addLabel={this.props.addLabel} />
                <p/>
                <div>
                    {this.renderTodo()}
                </div>
                <i className="fa fa-plus-circle icons" aria-hidden="true" onClick={()=> this.handleModal()}></i>
            </div>
        )    
    }
}

export default Home;