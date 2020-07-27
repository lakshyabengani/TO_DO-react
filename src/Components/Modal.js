import '../Styles/Modal.css';
import React from 'react';

class Modal extends React.Component{
    render(){
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        return (
            <div className={showHideClassName}>
            <section className="modal-main">
                <form onSubmit={this.props.handleSubmit}>
                    <h2>
                        Enter Task<input name="val" value={this.props.val} onChange={this.props.handleText} placeholder="ENTER YOUR TASK" style={{margin:"20px",padding:"10px"}}/>
                        Enter Label<input name="label" value={this.props.label} onChange={this.props.handleText} placeholder="ENTER TASK LABEL" style={{margin:"20px",padding:"10px"}}/>
                        <label>
                            TASK PRIORITY:
                            <select name ="priority" value={this.props.priority} onChange={this.props.handleText}style={{margin:"20px",padding:"10px"}}>
                                <option value="Low">Low</option>
                                <option value="Important">Important</option>
                            </select>
                        </label>
                        <br />
                        <label>
                            DEADLINE DATE: 
                                <input type ="date" name="deadline" onChange={this.props.handleText} style={{margin:"20px",padding:"10px"}}/>
                                <input type="submit" value="Submit" style={{margin:"20px",padding:"10px"}}/>
                        </label>
                    </h2>
                </form>
              <button onClick={this.props.handleClose}>close</button>
            </section>
          </div>
        )
    }
}

export default Modal; 