import React from 'react'
import { connect } from 'react-redux'
import Lunbo from './component/carousel'
import List from './component/List'
import Board from './component/Board'
import axios from 'axios'
import './pages.css'
class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state={}
  }
  componentDidMount(){
    axios.get('api/detail.json')
    .then((res)=>{
      console.log(res)
    })
  }
  render(){
    return(
      <div className='content'>
        <div className='leftContent'>
        <Lunbo/>
        <List/>
        </div>
        <div className='rightContent'>
          <Board/>
        </div>
      </div>
    )
  }
}
export default Home
