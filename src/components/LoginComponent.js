import React, {Component} from 'react';
import TaskService from '../services/TaskService';

class Login extends Component {

  constructor(props){
    super(props);
   
    this.state = {
        username:'',
        password:''
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);


  };
 
login(){
    console.log("login function");

}
  
onChange(e){
 this.setState({[e.target.name]:e.target.value});
 console.log(this.state);
}


  render() {

   
     return (
      <div className="row" id="Body">
        <div className="medium-5 columns left">
        <h4>Login</h4>
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
        <br/>
        <label>Password</label>
        <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
        <br/>
        <input type="submit" className="button success" value="Login" onClick={this.login}/>
        </div>
      </div>
    );
  }
}

export default Login;