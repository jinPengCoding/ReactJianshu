import React from 'react'
import './test.css'
class Test extends React.Component{
    constructor(props){
        super(props)
        this.state={
            on:true
        }
    }
    render(){
        return (
            <div 
            onMouseEnter={this.handlemouse} 
            className='test'
            onMouseLeave={this.handleLeave}
            >
            {console.log(this.state.on)}
                <a className='testA' href='#'>点击一下</a>
                <ul className={this.state.on === false?'':'hiddd'}>
                    <li><a href='#' >test1</a></li>
                    <li><a href='#' >test2</a></li>
                    <li><a href='#' >test3</a></li>
                    <li><a href='#' >test4</a></li>
                    <li><a href='#' >test5</a></li>
                </ul>
                </div>
        )
    }
    handlemouse=()=>{
        this.setState({
            on:false
        })
    }
    handleLeave=()=>{
        this.setState({
            on:true
        })
    }
}

export default Test