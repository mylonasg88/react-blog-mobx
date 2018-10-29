import React from 'react';
import AuthComponent from '../AuthComponent';

export default class NotFound extends React.Component {
    render() {
        const {message} = this.props.location.state;
        return (
            <div>
                <h3>404 Not Found</h3>
                <div>
                    {message}
                </div>
            </div>
        )
    }
}
