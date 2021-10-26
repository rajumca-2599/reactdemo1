import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:""
        }
        this.login1=this.login.bind(this)   }
    login()
    {
        alert("calling method login"+this.state.username+this.state.password)
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="enter name" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})} /><br></br><br></br>
                <input type="text" placeholder="enter password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} /><br></br>
                <p>{this.state.username}</p>
                <p>{this.state.password}</p>
               
                <button class="btn btn-danger" onClick={this.login1}>click</button>
            </div>
        )
    }
}

export default Login
