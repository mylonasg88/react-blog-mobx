import React from 'react';
import {observer, inject} from 'mobx-react';
import AuthComponent from '../AuthComponent';

@inject('blogStore')
@observer
export default class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            text: "Hello"
        }
    }

    trackTextChanges = (e) => {
        console.log(e.target.value);
        // this.setState({text: e.target.value});
        
        const blogStore = this.props.blogStore;
        blogStore.happened = e.target.value;
    }

    render() {
        console.log('rendering Home');
        return (
            <div className="App-intro">
                <h3>Welcome to Blog Post application</h3>
                <span>{this.props.blogStore.happened} {this.state.text}</span>

                <input type="text" onChange={this.trackTextChanges}/>

                <button onClick={()=>{}} >Submit</button>
            </div>
        )
    }
}
