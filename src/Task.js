import React from 'react'

function Task(props){
    return (
        <div>
            <h4>
                Task : {props.item.text}
                <br />
                Priority : {props.item.priority}
                <br />
                Status:{props.item.completed ? "Completed" : "Due" }       
            </h4>
        </div>
    )
}

export default Task; 