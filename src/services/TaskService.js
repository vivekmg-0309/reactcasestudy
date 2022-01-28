import axios from 'axios';

const TASK_API_BASE_URL="http://localhost:8090/restgetAlltask";
const Tast_API_Post_URL="http://localhost:8090/createaddtask";
const TASK_API_GET_URL="http://localhost:8090/taskdetails/{taskid}";
//const Task_API_PUT_URL="http://localhost:8090/updateownerid/updateownerid/{taskid}/{ownerid}";
const Task_Api_Login="http://localhost:8090/user/${userName}/${password}";

class TaskService{
   getTasks(){
       return axios.get(TASK_API_BASE_URL)
   }
   createTask(task){
       return axios.post(Tast_API_Post_URL,task)
   }
   getTaskById(taskid){
       return axios.get(TASK_API_GET_URL+'/'+taskid);
   }
   updateTask(task,taskid){
       return axios.put(TASK_API_GET_URL+'/'+taskid,task);

   }
   deleteTask(taskid){
       return axios.delete(TASK_API_BASE_URL+'/'+taskid)
   }

   login(){
    return axios.get(Task_Api_Login)
}
}

export default new TaskService();