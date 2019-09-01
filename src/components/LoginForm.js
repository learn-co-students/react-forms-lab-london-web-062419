import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();


    // setting the state to resemble the input tags what needs to be there
    this.state = {
      username: '',
      password: ''
    };
  }


  handleChange = event =>{
    debugger
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event =>{

    event.preventDefault()

    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  }





  render() {
    return (
      <form onSubmit={this.handleSubmit}> {/* giving the form the function that I still need to create bloody js*/}
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
