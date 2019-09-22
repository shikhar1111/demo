import React, {Component} from 'react';
// import Aux from '../../hoc/props';
import './Layout.css';
import axios from "axios"

class layout extends Component {
    state={
        loaded:null
    }
    componentDidUpdate(){
        if(this.props.id){
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id).then(response=>{
            console.log(response);
            this.setState({loaded:response.data});
        });
    }
}
    render(){
        let post = <p>Please select a post</p>;
        if(this.props.id){
            post = <p>Loading......!!</p>
        }
        if(this.state.loaded){
            post = (
                <div className="fullpost">
                    <h1>{this.state.loaded.title}</h1>
                    <p>{this.state.loaded.author}</p>
                    <div className="edit">
                        <button className="delete">Delete</button>
                    </div>
                </div>
            )
        }
        
    return post;
    }
}

export default layout;