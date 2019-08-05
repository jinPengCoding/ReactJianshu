import React from 'react'
import { get_Detail_List } from '.././pages/store/actionCreators'
import { connect } from 'react-redux'
class Detail extends React.Component{
  componentWillMount(){
    this.props.get_Detail_List(this.props.match.params.id)
  }
  render(){
    const { detailTitle,detailImg,detailP } = this.props
      return (
        <div className='detailContent'>
          <h1>{detailTitle}</h1>
          <div className='signalMessage'>
            <div className='picYou'>
              <img
                src='https://dummyimage.com/48x48/000/fff'
                alt=''
              />
            <div className='info'>
              <span>Author·刘金鹏</span>
            <div className='meta'>
              唱 · 跳 · rap · 篮球
            </div>
            </div>
            </div>
            <img
            className='middleImg'
            src={detailImg}
            alt=''
            />
          <div className='pageContent'>
            <p>
              {detailP}
            </p>
            <p>
              {detailP}
            </p>
            <p>
              {detailP}
            </p>
          </div>
          </div>
        </div>
      )
  }
}
const mapStateProps=(state)=>{
  return {
    detailTitle:state.getIn(['home','detailTitle']),
    detailImg:state.getIn(['home','detailImg']),
    detailP:state.getIn(['home','detailP'])
  }
}
const mapDispatchProps=(dispatch)=>{
  return {
    get_Detail_List(id){
      dispatch(get_Detail_List(id))
    }
  }
}
export default connect(mapStateProps,mapDispatchProps)(Detail)
