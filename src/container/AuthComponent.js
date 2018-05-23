import * as React from 'react';

export default class AuthComponent extends React.Component {

    componentDidMount() {
        console.log('find if user should view the page here');
        console.log('%cAuthComponent', 'color:red');
        // this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                AuthComponent
                {this.props.children}
                </div>
        )
    }
}
