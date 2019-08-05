import React from 'react'
import { connect } from 'react-redux'
import logoa from '../../compoent/common/jianshu.png'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import '../.././static/img/iconfont/iconfont.css'
import { withRouter } from 'react-router-dom'
import { changeReg,login_ver,changeRouteUrl,changeLogin } from '.././pages/store/actionCreators'
class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state={}
    this.shouldRender = this.shouldRender.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handlChangeForm = this.handlChangeForm.bind(this)
  }
  componentWillMount(){
    const action = {
      type:'hash',
      route:this.props.match.path
    }
    this.props.getHash(action)
  }
  shouldRender(){
    if(this.props.showsign){
      return (
        <ul className='showUl'>
          <li><a>用手机号重置密码</a></li>
          <li><a>用邮箱重置密码</a></li>
          <li><a>无法用海外手机登录</a></li>
          <li><a>无法用谷歌账号登录</a></li>
        </ul>
      )
    }
  }
  handlChangeForm(){
    if(!this.props.reglog){
      return (
        <form>
        <div className='input-prepend'>
          <input
          placeholder='你的昵称'
          type="text"
          ref = {(input) => {this.account = input}}
        />
        </div>
          <div className='input-prepend-next'>
            <input
            placeholder='手机号'
            type="number"
            ref = {(input) => {this.phonenumber = input}}
          />
          </div>
          <div className='input-prepend-password'>
            <input
            type="password"
            ref = {(input) => {this.pwd = input}}
          />
          </div>
          <button
          className="xxx"
          onClick={(e)=>this.props.click(e,this.account,this.password)}
          >
            注册
          </button>
      </form>
      )
    }else{
      return (
        <form>
               <div className='input-prepend'>
                 <input
                 placeholder='手机号或邮箱'
                 type="text"
                 ref = {(input) => {this.account = input}}
               />
               </div>
                 <div className='input-prepend-next'>
                   <input
                   placeholder='密码'
                   type="password"
                   ref = {(input) => {this.password = input}}
                 />
                 </div>
                 <div  className='remember-btn'>
                   <input type='checkbox' checked='true'/>
                   <span>
                     记住我
                   </span>
                 </div>
                 <div className='forget-btn'>
                   <a
                   href='#'
                   style={{color:'#999',float:'right',marginTop:'10px'}}
                   onClick={this.props.handlesignClick}
                   >
                   登录遇到问题?
                 </a>
                 <button
                 className="sign-in-button"
                 onClick={(e)=>this.props.click(e,this.account,this.password)}
                 >
                   登录
                 </button>
                 {this.props.loginstate?(this.props.changeRouteUrl(),<Redirect to='/' />):''}
                   {this.shouldRender()}
                   <div className='more_sign'>
                     <h6>社交账号登录</h6>
                   <ul>
                     <li>
                       <a
                       href='https://weibo.com/login.php'
                       alt=''
                       onClick={(e)=>this.handleClick(e)}
                       >
                       <i className='iconfont ic-weibo'>&#xe60e;</i>
                       </a>
                   </li>
                     <li><i className='iconfont ic-wechat'>&#xe60d;</i></li>
                     <li><i className='iconfont ic-qq_connect'>&#xe6ca;</i></li>
                   <li><i style={{fontSize:'15px'}}>其他</i></li>
                   </ul>
                   </div>
                 </div>
             </form>
      )
    }
  }
  componentWillUpdate(){
    console.log(this.props.match.path)
  }
  render(){
      return (
        <div className='sign'>

           <Link to='/'>
             <div
             onClick={this.props.handleChangeaa}
             className='loginLogo'>
               <img src={logoa} />
             </div>
             {console.log(this.props.reglog)}
           </Link>
           <div className='loginMain'>
             <div className='loginIn'>
             <a onClick={this.props.changeLogin} href='#'>登录</a>
             <b style={{fontSize:'13px'}}>·</b>
             <a onClick={this.props.changeReg} href='#'>注册</a>
             </div>
           <div style={{fontSize: '14px',marginTop:'40px'}}>
           {this.handlChangeForm()}
           </div>
             </div>
         </div>
     )

  }
  handleClick(e){
    if(window.confirm("是否跳转到微博登录界面")===false){
      e.preventDefault()
    }
  }
}
const mapStateProps=(state)=>{
  return{
    showsign:state.getIn(['home','showsign']),
    loginstate:state.getIn(['home','loginstate']),
    nowPath:state.getIn(['home','nowPath']),
    reglog:state.getIn(['home','reglog'])
  }
}
const mapDispatchProps=(dispatch)=>{
  return {
    click(e,account,pwd){
      e.preventDefault()
      if(account.value!=='' && pwd.value!==''){
        dispatch(login_ver(account.value,pwd.value))
      }
      // 现在通过ajax发送一个post请求，将用户名跟密码带上请求数据
    },
    getHash(action){
      dispatch(action)
    },
    handleChangeaa(){
      const action ={
        type:'changeIt'
      }
      dispatch(action)
    },
    changeRouteUrl(){
      dispatch(changeRouteUrl())
    },
    changeLogin(){
      console.log('denglianniu')
      dispatch(changeLogin())
    },
    changeReg(){
      console.log('注册按钮')
      dispatch(changeReg())
    },
    handlesignClick(){
      const action ={
        type:'change_show_sign'
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateProps,mapDispatchProps)(withRouter(Login))
