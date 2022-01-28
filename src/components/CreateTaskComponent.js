import React, { Component } from 'react';
import TaskService from '../services/TaskService';

class CreateTaskComponent extends Component {
    constructor(props){
        super(props)

        this.state={
        
            taskId:'' ,
            taskName:'' ,
            description:''
            
        }
        this.changeTaskIdHandler=this.changeTaskIdHandler.bind(this);
        this.changeTaskNameHandler=this.changeTaskNameHandler.bind(this);
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this);
        this.saveTask=this.saveTask.bind(this);
    }
 

    saveTask=(e)=>{
        e.preventDefault();
        let task={taskId:this.state.taskId,taskName:this.state.taskName,description:this.state.description}
        console.log('task=>' +JSON.stringify(task));
              
        TaskService.createTask(task).then(res=>{
            this.props.histroy.push('/tasks');

        });
    }
    
        changeTaskIdHandler= (event) => {
            this.setState({taskId:event.target.value});
        }
        changeTaskNameHandler = (event)=>{
            this.setState({taskName:event.target.value});
        }
        changeDescriptionHandler=(event)=>{
            this.setState({description:event.target.value});
      
        }
        cancel(){
            this.props.histroy.push('/tasks');
        }
    render() {
        return (
            <div>
                <div className="container">
                     <div className="row">
                         <div className="card col-md-6 offset-md-3 offset-md-3">
                             <h3 className="text-center">Add Task</h3>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Task Id</label>
                                            <input placeholder="id" name="taskId" className="form-control"
                                              value={this.state.taskId} onChange={this.changeTaskIdHandler}></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Task Name</label>
                                            <input placeholder="name" name="taskName" className="form-control"
                                              value={this.state.taskName} onChange={this.changeTaskNameHandler}></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Description</label>
                                            <input placeholder="Value" name="description" className="form-control"
                                              value={this.state.description} onChange={this.changeDescriptionHandler}></input>
                                        </div>
                                        <button className = "btn btn-success" onClick = {this.saveTask} >Save </button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                    </form>
                                </div>

                         </div>
                     </div>

                </div>
                
            </div>
        );
    }
}

export default CreateTaskComponent;