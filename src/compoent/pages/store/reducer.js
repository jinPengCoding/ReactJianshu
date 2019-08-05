import { fromJS } from 'immutable'
import { strictEqual } from 'assert';
const defaultState = fromJS({
  loginstate:false,
  show:false,
  reglog:true,
  page:1,
  detailTitle:'',
  detailImg:'',
  detailP:'',
  imgUrlArr:[
    {
      id:0,
      imgurl:'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },
    {
      id:1,
      imgurl:'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
      id:2,
      imgurl:'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },
    {
      id:3,
      imgurl:'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    },
  ],
  ListUrlArr:[],
  nowPath:'',
  showsign:false
})
export default (state=defaultState,action)=>{
  switch (action.type){
    case 'mouse_enter_home':
      return state.set('show',true)
    case 'mouse_leave_home':
      return state.set('show',false)
    case 'arr_handle':
      return state.set('ListUrlArr',action.data)
    case 'get_list_more':
      return  state.set('page',action.nextPage).set('ListUrlArr',state.get('ListUrlArr').concat(action.data))
    case 'hash':
     return state.set('nowPath',action.route)
    case 'changeIt':
      return state.set('nowPath','')
    case 'change_show_sign':
      return state.set('showsign',!state.get('showsign'))
    case 'get_detail_list':
      return state.merge({
        detailTitle:action.data.title,
        detailImg:action.data.imgurl,
        detailP:action.data.content
      })
    case 'check_user':
      return state.set('loginstate',action.value)
    case 'change_url':
      return state.set('nowPath','')
    case 'change_login':
      return state.set('reglog',true)
    case 'change_reg':
      return state.set('reglog',false)
    default:
      return state
  }
}
