import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Input, Message, Segment } from 'semantic-ui-react'

export default class LoginForm extends Component {
  componentWillMount() {
    document.body.classList.add('login')
  }

  componentWillUnmount() {
    document.body.classList.remove('login')
  }

  render() {
    return (
		<div>
			<form>
				<div className="form-group">
					<label htmlFor="firstName">Username:</label>
					<input className="input form-control" name="username" maxLength="20"/>
				</div>
				<div className="form-group">
					<label htmlFor="firstName">Password:</label>
					<input className="input form-control" name="password" type="password" maxLength="50"/>
				</div>
				<div className="form-group">
					<button className="btn btn-primary" type="submit">Login</button>&nbsp;
				</div>
			</form>
		</div>
    )
  }
}
