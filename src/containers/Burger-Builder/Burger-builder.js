import React, {Component} from 'react';
import Aux from '../../hoc/props';

class Burger_Builder extends React.Component{
    
    render(){
        
        return(
            <Aux>
                <div>
                    {this.props.title}
                </div>
                <div>
                    {this.props.author}
                </div>
            </Aux>
        );
    }
}

export default Burger_Builder;