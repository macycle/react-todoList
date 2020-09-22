import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Xiaojiejie extends Component {

    
    render() {
        return ( 
        <li onClick={this.handleClick}>{this.props.avaname}---{this.props.content}</li>
         );
    }

    

    

    handleClick=()=>{
        this.props.deleteItem(this.props.index)
    }
}

Xiaojiejie.propTypes={
    content:PropTypes.string,
    index:PropTypes.number,
    
}

Xiaojiejie.defaultProps={
    avaname:'和平大饭店'
}
 
export default Xiaojiejie;