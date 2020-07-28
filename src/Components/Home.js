import React from 'react';
import Modal from './Modal';
import Labels from './labels';
import '../Styles/App.css'

class Home extends React.Component{
    
    constructor(props){
        super(props);
    }

    renderTodo =()=>{
        if(this.props.Label_List.length > 0){      
            let LabelItems = this.props.Label_List.map(item => <Labels key={item.id} 
            label={item.label}  todos={this.props.todos} handleDelete={this.props.handleDelete} handleChange={this.props.handleChange}/>)
            return LabelItems;
        }
        else{
            return <div align ="center" class="col col-center"><h1>NO TASKS PRESENT :)</h1> </div>
        }
    }

    render() {
        
        return (
            <div>
                {/* <h2><button align="center" onClick={()=> this.props.handleModal()}>Add Task</button></h2> */}
                <Modal show={this.props.showModal} val={this.props.val} handleText={this.props.handleText} handleSubmit={this.props.handleSubmit} handleClose ={this.props.handleClose} />
                <p/>
                <div>
                    {this.renderTodo()}
                </div>
                <i class="fa fa-plus-circle icons" aria-hidden="true" onClick={()=> this.props.handleModal()}></i>
            </div>
        )    
    }
}

export default Home;