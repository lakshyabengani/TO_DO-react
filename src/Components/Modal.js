import '../Styles/Modal.css';
import React from 'react';

class Modal extends React.Component{
    render(){
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        return (
            <div className={showHideClassName}>
            <section className="modal-main popup">
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                    Enter Task<input name="val" value={this.props.val} onChange={this.props.handleText} placeholder="ENTER YOUR TASK" />
                    </label>
                    <label>
                    Enter Label<input name="label" value={this.props.label} onChange={this.props.handleText} placeholder="ENTER TASK LABEL" />
                    </label>
                    <label>
                        TASK PRIORITY:
                        <select name ="priority" value={this.props.priority} onChange={this.props.handleText}>
                            <option value="Low">Low</option>
                            <option value="Important">Important</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        DEADLINE DATE: 
                            <input type ="date" name="deadline" onChange={this.props.handleText} />
                            <input type="submit" value="Submit" />
                    </label>
                
                </form>
              <button onClick={this.props.handleClose}>close</button>
            </section>
          </div>
        )
    }
}

export default Modal; 