import React from 'react'
import logo from '../common/jianshu.png'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import './Header.css'
import '../../../src/static/img/iconfont/iconfont.css'
import { handleListEnterre,discoverLeave,handleCycleAction,mouseLeaveAction,mouseEnterAction,handleFocusAction,handleBlusAction,handleChangeAction,getList,discover} from './store/actionCreators'
class Header extends React.Component{
  handleLogin(){
    if(this.props.loginstate){
      return(
        <div className='nav'>
        <div className='first shou'>发现</div>
        <div className='first download'>消息</div>
        <div
        className={(this.props.change_discover)?'zanzhu':'zanzhu yincang'}>
          <ul>
            <li><a href="#" alt=''>评论     </a> </li>
            <li><a href="#" alt=''>简信     </a> </li>
            <li><a href="#" alt=''>投稿请求 </a>  </li>
            <li><a href="#" alt=''>喜欢跟赞 </a>  </li>
            <li><a href="#" alt=''>关注     </a>  </li>
            <li><a href="#" alt=''>赞赏跟费用</a>   </li>
            </ul>
        </div>
        <div 
        className='first download'
        onClick={this.props.discover}
        >关注</div>
        <div className='search'>
          <input
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlus}
            className={this.props.focus?'input focus':'input'}
            onFocus={()=>this.props.handleFocus(this.props.list)}
            placeholder='搜索'/>
            <i className={this.props.focus?'iconfont zoom iconfocus':'iconfont zoom'}>&#xe600;</i>
        <div
          onMouseEnter={this.props.mouseEnter}
          className={(this.props.focus || this.props.mouseIn)?'searchInfo':'searchInfo hiddena'}
          onMouseLeave={this.props.mouseLeave}
          >
          <div className='searchTitle'>
            热门搜索
            <span
              onClick={()=>this.props.hadleCycle(this.props.page,this.props.totalpage)}
              >
                <i className='iconfont cycle'>&#xe680;</i>
              换一批
            </span>
          </div>
          <div className='list'>
            {this.props.pageList}
          </div>
        </div>
        </div>
        <div className='second'>Aa</div>
        <div className='second imga'>
          <Link to='/login'>
          <img 
          className='avatar' 
          alt='' 
          src='https://dummyimage.com/40x40/#fff'
          />
          </Link>
        </div>
      </div>
      )
    }else{
      return(
        <div className='nav'>
        <div className='first shou'>首页</div>
      <div className='first download'>下载App</div>
        <div className='search'>
          <input
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlus}
            className={this.props.focus?'input focus':'input'}
            onFocus={()=>this.props.handleFocus(this.props.list)}
            placeholder='搜索'/>
            <i className={this.props.focus?'iconfont zoom iconfocus':'iconfont zoom'}>&#xe600;</i>
        <div
          onMouseEnter={this.props.mouseEnter}
          className={(this.props.focus || this.props.mouseIn)?'searchInfo':'searchInfo hiddena'}
          onMouseLeave={this.props.mouseLeave}
          >
          <div className='searchTitle'>
            热门搜索
            <span
              onClick={()=>this.props.hadleCycle(this.props.page,this.props.totalpage)}
              >
                <i className='iconfont cycle'>&#xe680;</i>
              换一批
            </span>
          </div>
          <div className='list'>
            {this.props.pageList}
          </div>
        </div>
        </div>
        <div className='second'>Aa</div>
        <div className='second'>
          <Link to='/login'>登录</Link>
        </div>
      </div>
      )
    }
  }
  render(){
    const {loginstate,totalpage,mouseLeave,mouseIn,list,page,handleFocus,focus,handleBlus,handleChange,mouseEnter} = this.props
    const pageList =[]
    const newList = list.toJS()
    for(let i =(page-1)*10;i<page*10;i++){
      if(newList[i]){
        pageList.push(
          <a key={newList[i]}>{newList[i]}</a>
        )
      }
    }
    return(
      <div className='header'>
        {console.log(loginstate)}
      <Link className='logo' to='/'>
      <img className='imglogo' src={logo}/>
  </Link>
      {this.handleLogin()}
      {this.props.loginstate === false?<a className='register'>注册</a>:''}
      <a className='write'>
      写文章
      </a>
      </div>
    )
  }
}
const mapStateProps = (state) =>{
  return {
    inputValue:state.get('header').get('inputValue'),
    focus:state.getIn(['header','focus']),
    list:state.getIn(['header','list']),
    totalpage:state.getIn(['header','totalpage']),
    mouseIn:state.getIn(['header','mouseIn']),
    page:state.getIn(['header','page']),
    loginstate:state.getIn(['home','loginstate']),
    change_discover:state.getIn(['header','change_discover']),
    // 或者 state.getIn(['header','focus'])
  }
}
const mapDispatchProps = (dispatch) =>{
  return {
    handleFocus(list){
      console.log(list)
      if(list.size === 0){
        dispatch(getList())
      }
      dispatch(handleFocusAction())
    },
    discover(){
      dispatch(discoverLeave())
    },
    handleBlus(){
      const action =handleBlusAction()
      dispatch(action)
    },
    handleListEnter(){
      console.log('yep!')
      dispatch(handleListEnterre())
    },
    mouseLeave(){
      const action = mouseLeaveAction()
      dispatch(action)
    },
    discoverLeave(){
      console.log('leave')
      dispatch(discoverLeave())
    },
    hadleCycle(page,totalpage){
      const action = handleCycleAction()
      if(page<totalpage){
        const action = handleCycleAction(page+1)
        dispatch(action)
      }else{
        const action = handleCycleAction(1)
        dispatch(action)
      }
    },
    mouseEnter(){
      const action = mouseEnterAction()
      dispatch(action)
    },
    handleChange(e){
      const action =handleChangeAction(e)
      dispatch(action)
    }
  }
}
export default connect(mapStateProps,mapDispatchProps)(Header)
