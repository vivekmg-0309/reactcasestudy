import React, { Component } from 'react';
import TaskService from '../services/TaskService';

class ListTaskComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            tasks:[]
        }
        this.addTask=this.addTask.bind(this);
        this.editTask=this.editTask.bind(this);

        
    }
    editTask(taskid){
        this.props.history.push(`/update-task/${taskid}`);
    }
    
    componentDidMount(){
        TaskService.getTasks().then((res) =>{
       this.setState({tasks:res.data});
         });
    }

    addTask(){
        this.props.histroy.push('/add-tasks');
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Tasks List</h2>
               
                    <button className="btn btn-primary" onClick={()=>this.addTask}>Add Task</button>
            
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Task Id</th>
                                <th>Task Name</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map(
                                    task=>
                                    <tr key={task.taskId}>
                                        <td>{task.taskId}</td>
                                        <td>{task.taskName}</td>
                                        <td>{task.description}</td>
                                        <td>
                                            
                                        <button onClick={ () => this.editTask(task.taskid)} className="btn btn-info">Update </button>
                                           </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTaskComponent;