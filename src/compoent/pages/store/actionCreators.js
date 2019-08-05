import axios from 'axios'
export const getMoreList=(page)=>{
    return (dispatch)=>{
    axios.get('api/pageCount.json?page=' + page)
    .then((res)=>{
      const action ={
        type:'get_list_more',
        data:res.data.data.imgUrl,
        nextPage:page+1
      }
      dispatch(action)
    }).catch((err)=>{
      console.log('error')
    })
  }
}
export const get_Detail_List =(id)=>{
  return  (dispatch) =>{
    axios.get('/api/detail.json?id=' + id)
    .then((res)=>{
      const action ={
        type:'get_detail_list',
        data:res.data.data
      }
      dispatch(action)
    })
  }
}

export const login_ver=(username,password)=>{
	return (dispatch) =>{
		axios.get('/api/username.json?username='+ username + '&password=' + password)
		.then((res)=>{
			console.log(res.data)
			const action={
				type:'check_user',
				value:res.data.data
			}
			if(res.data.data){
				dispatch(action)
			}
		}).catch((error)=>{
			console.log(error)
    })
    console.log(username,password)
	}
}

export const changeRouteUrl=()=>({
  type:'change_url'
})

export  const changeLogin= ()=>({
  type:'change_login'
})

export const changeReg = ()=>({
  type:'change_reg'
})