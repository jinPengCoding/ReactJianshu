import { fromJS } from 'immutable'
const defaultState = fromJS({
  inputValue:'',
  focus:false,
  list:[],
  page:1,
  totalpage:1,
  mouseIn:false,
  change_discover:false,
  // 这是项数
})
// 现在的state是不能被改变的引入immutable.js 是不可改变的对象
//将state换成immutable对象
// 会结合immutable之前拿到的对象跟现在设置的值进行结合后返回值，并不会改变之前的值
export default (state=defaultState,action)=>{
  switch(action.type){
    case 'length':
      return state.set('focus',action.boolean)
    case 'short':
      return state.set('focus',action.boolean)
    case 'input_change':
      return state.set('inputValue',action.value)
    case 'axios':
      return state.set('list',action.data).set('totalpage',action.totalpage)
    case 'mouse_enter':
      return state.set('mouseIn',true)
    case 'mouse_leave':
      return state.set('mouseIn',false)
    case 'page_change':
      return state.set('page',action.page)
    case 'change_discover':
      return state.set('change_discover',!state.get('change_discover'))
    default:
      return state
  }
}
