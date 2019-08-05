import { fromJS } from 'immutable'
import axios from 'axios'

export const handleFocusAction = () =>({
	type:'length',
    boolean:true
})

export const handleBlusAction = () =>({
	type:'short',
	boolean:false
})

export const handleCycleAction = (page)=>({
	type:'page_change',
	page
})

export const handleChangeAction = (e) =>({
	type:'input_change',
    value:e.target.value
})

export const mouseEnterAction = ()=>({
	type:'mouse_enter'
})

export const mouseLeaveAction = ()=>({
	type:'mouse_leave'
})

export const discover=()=>({
	type:'change_discover'
})

export const discoverLeave=()=>({
	type:'change_discover'
})

export const  getList =() =>{
	return (dispatch)=>{
		axios.get('api/list.json')
		.then((res)=>{
			const data = res.data
			const action ={
				type:'axios',
				data:fromJS(data.data),
				totalpage:Math.ceil(data.data.length/10)
			}
			dispatch(action)
		}).catch((err)=>{
			console.log(err)
		})
	}
}

export const handleListEnterre=()=>({
	type:'double_change'
})
