import React from 'react'
import { connect } from 'react-redux'
class Board extends React.Component{
  constructor(props) {
    super(props)
    this.state={}
  }
  render(){
    const {imgUrlArr,show,handleMouseEnter,handleMouseLeave} = this.props
    return(
      <div className='board'>
      {imgUrlArr.map((item,index)=>{
        return (
        <img
        key={item.get('id')}
        className='boardRecomma'
        src={item.get('imgurl')}
        />
        )
      })}
      <div
        className='qrCode'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        <img
        src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'
        alt=''
        className={show?'floatQr':'floatQr hiddenQR'}
        />
        <img
        className='qrImg'
        src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'
        alt=''
        />
        <div className='rightQR'>
        <div className='downLoad'>
        下载简书手机App >
        </div>
        <div className='recom'>
        随时随地发现和创作新内容
        </div>
        </div>
      </div>
      </div>
    )
  }
}
const mapStateProps=(state)=>{
  return{
    imgUrlArr:state.getIn(['home','imgUrlArr']),
    show:state.getIn(['home','show'])
  }
}
const mapDispatchProps=(dispatch)=>{
  return {
    handleMouseEnter(){
      const action = {
        type:'mouse_enter_home'
      }
      dispatch(action)
    },
    handleMouseLeave(){
      const action ={
        type:'mouse_leave_home'
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateProps,mapDispatchProps)(Board)
