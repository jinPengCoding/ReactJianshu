import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getMoreList } from '../store/actionCreators'
class List extends React.Component{
  constructor(props) {
    super(props)
    this.state={}
  }
  render(){
    const { ListUrlArr ,page } = this.props
    return(
      <div>
      <ul className='list-node'>
      {
        ListUrlArr.map((item,index)=>{
          return(
            <Link to={'/detail/' + item.id}>
            <li key={index}>
            <img
             style={{float:'right',width:'130px',height:'100px',verticalAlign:'middle'}}
             src={item.imgurl}
             />
            <div className='list-content'>
            <h3>
             {item.title}
            </h3>
            <p>
              {item.content}
            </p>
            </div>
            </li>
            </Link>
          )
        })
      }
      </ul>
        <div
        className='loadMore'
        onClick={()=>this.props.listhandleClick(page)}
        >
        阅读更多
        </div>
      </div>
    )
  }
  componentDidMount(){
    axios.get('api/page.json')
    .then((res)=>{
    const result = res.data.data.imgUrl
    const action = {
      type:'arr_handle',
      data:result
    }
    this.props.changeHomeData(action)
    console.log(result)
    }).catch((err)=>{
      console.log(err)
    })
  }
}
const mapStateProps=(state)=>{
  return{
    ListUrlArr:state.getIn(['home','ListUrlArr']),
    page:state.getIn(['home','page'])
  }
}
const mapDispatchProps=(dispatch)=>{
  return{
    changeHomeData(action){
      dispatch(action)
    },
    listhandleClick(page){
      dispatch(getMoreList(page))
    }
  }
}
export default connect(mapStateProps,mapDispatchProps)(List)
