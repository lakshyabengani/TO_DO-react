import '../Styles/Modal.css';
import React from 'react';

class Modal extends React.Component{

  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      val: "",
      label: "",
      priority: "Low",
      id : 0,
      deadline: new Date(),
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleText = this.handleText.bind(this);
  }

  handleSubmit(event){
    let date = new Date(this.state.deadline);
    console.log(this.state);
    this.props.submitForm(this.state.id, this.state.val, date , this.state.label , this.state.priority);
    console.log(this.props.todos)
    // this.props.addLabel(this.state.id,this.state.label);
    console.log(this.props.Label_List);
    this.setState({
      val : "",
      id : this.state.id + 1,
      label: "",
    });
    this.props.handleClose();
    event.preventDefault();
  }

  handleText(event){
    const {name, value} = event.target
      this.setState({
        [name]: value
      })
    //console.log(name+" "+value);
  }

    render(){
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        return (
            <div className={showHideClassName}>
            <section className="modal-main popup">
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Enter Task<input name="val" value={this.state.val} onChange={this.handleText} placeholder="ENTER YOUR TASK" />
                    </label>
                    <label>
                    Enter Label<input name="label" value={this.state.label} onChange={this.handleText} placeholder="ENTER TASK LABEL" />
                    </label>
                    <label>
                        TASK PRIORITY:
                        <select name ="priority" value={this.state.priority} onChange={this.handleText}>
                            <option value="Low">Low</option>
                            <option value="Important">Important</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        DEADLINE DATE: 
                            <input type ="date" name="deadline" onChange={this.handleText} />
                            <input type="submit" value="Submit" />
                    </label>
                </form>
                <button onClick={()=> this.props.handleClose()}>close</button>
            </section>
          </div>
        )
    }
}

export default Modal; 