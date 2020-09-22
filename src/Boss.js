import React, { Component,Fragment } from 'react';
import './boss.css'
class Boss extends Component {
    
    constructor(props){
        super(props)
        this.state={
            isShow:true
        }
    }
    render() { 
        return ( 
            <Fragment>
                <div className={this.state.isShow?'show':'hide'}>我是孙悟空</div>
                <button onClick={this.Show}>切换</button>
            </Fragment>
         );
    }

    Show=()=>{
        this.setState({
            isShow:!this.state.isShow
        })
    }
}
 
export default Boss;