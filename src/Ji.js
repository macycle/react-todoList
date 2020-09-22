import React,{Component,Fragment} from 'react'
import Xiaojiejie from './Xiaojiejie'

class Ji extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:['拉面','牛肉盖饭']
        }
        console.log('constructor')
    }

    

    render(){
        return(
            <Fragment>
            <div><input value={this.state.inputValue} onChange={this.change.bind(this)}/><button onClick={this.addList.bind(this)}>添加服务</button>
            
            </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <Xiaojiejie key={item+index} content={item} index={index}
                                 deleteItem={this.deleteItem}   //作为方法传过去，
                                />
                            )
                        })
                    }
                    
                </ul>
                
            </Fragment>
            
        )
    }  

    change(e){
        this.setState({
            inputValue:e.target.value
        })
    }

    

    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
        
    }

    deleteItem=(index)=>{
        
        let list=this.state.list
        list.splice(index,1)    //为什么不能连在一起写？？
        this.setState({
            list:list
        })
    }
}

export default Ji