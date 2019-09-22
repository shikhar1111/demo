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
            if(!this.state.loaded || (this.state.loaded && this.state.loaded.id !== this.props.id)){
        axios.get('/posts/' + this.props.id).then(response=>{
            // console.log(response);
            this.setState({loaded:response.data});
        });
        }
        }
    }

    deletePostHandler=()=>{
        axios.delete('/posts/' + this.props.id).then(response=>{
            console.log(response);
        })
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
                    <p>{this.state.loaded.body}</p>
                    <div className="edit">
                        <button className="delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            )
        }
        
    return post;
    }
}

export default layout;