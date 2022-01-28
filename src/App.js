import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom'
import ListTaskComponent from './components/ListTaskCoponent';
import HeaderComponent from './components/HeaderComponent';
import CreateTaskComponent from './components/CreateTaskComponent';
import UpdateTaskComponent from './components/UpdateTaskComponent';
import Login from './components/LoginComponent';
import { Routes} from 'react-router';






function App() {

  
  return (
    <div>
      <Router>
        
          <HeaderComponent />
          <div className="container">
              
          <Switch> 
          
            <Route path="/"  exact component={Login}></Route>
            <Route path="/tasks/" component={ListTaskComponent}></Route>
            <Route path = "/add-tasks/" component={CreateTaskComponent}></Route>
            <Route path = "/update-task/:taskid" component={UpdateTaskComponent}></Route>
            <Route path = "/login" component={Login}></Route>
            
            
          </Switch>
             

        </div>
      </Router>
    </div>
  );

}

export default App;

/*

function App() {

  return (

    <div>



      <Router>



    <button ><Link to="/tasks"> TaskList</Link></button>



<button>



<Link to="/add-tasks">AddTask</Link>



</button>

<button>



<Link to="/Login">Login</Link>



</button>

       <div className='container'>

<Routes>

<Route path='/tasks' element={<ListTaskComponent/>}/>

<Route path='/add-tasks' element={<CreateTaskComponent/>}/>

  <Route path='/Login' element={<Login/>}/>

</Routes>

</div>

   

  </Router>    

  </div>
  );
}
}

export default App;

*/