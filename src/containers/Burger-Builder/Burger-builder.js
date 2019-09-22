import React, {Component} from 'react';
import Aux from '../../hoc/props';
import './Burger-builder.css'

class Burger_Builder extends React.Component{
    
    render(){
        
        return(
            <Aux>
                <article onClick={this.props.clicked}>
                    <div className="posts">
                <div>
                    <h1>Posts</h1>
                   <h3>{this.props.title}</h3> 
                    <h5>{this.props.author}</h5>
                </div>
                </div>
                </article>
                
            </Aux>
        );
    }
}

export default Burger_Builder;