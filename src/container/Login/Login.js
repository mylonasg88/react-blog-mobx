import * as React from 'react';
import { observable, action } from 'mobx';
import { inject, observer } from 'mobx-react';
// import { asyncComputed } from 'computed-async-mobx';
import { Link, Redirect } from 'react-router-dom';
// import { Button } from 'material-ui-next';

import './Login.css';

@inject('blogStore') @observer
export default class Login extends React.Component {
    @observable username;

    @observable password;

    onChangeUsername = (e) => {
        this.username = e.target.value;
    }

    onChangePassword = (e) => {
        this.password = e.target.value;
    }

    handleLogin = () => {
        const { blogStore } = this.props;
        blogStore.login(this.username, this.password);
    }

    render() {
        const { blogStore } = this.props;

        return (
            <div className='login-container'>

                {blogStore.isLoggedIn ? (<Redirect to={{pathname: "/"}}/>) : null}

                {blogStore.isLogging ? <h3>Establishing your credentials...</h3> : <h3>Login</h3>}
                <div className='input-box'>
                    <label>Username</label>
                    <input type="text" name="username" onChange={this.onChangeUsername} value={this.username} />
                </div>
                <div className='input-box'>
                    <label>Password</label>
                    <input type="password" name="password" />
                </div>
                <div className='input-box-submit'>
                    <button onClick={this.handleLogin}>Login</button>
                </div>
            </div>
        )
    }
}
