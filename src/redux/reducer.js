import headerReducer from '../compoent/common/store/reducer'
import { combineReducers } from 'redux-immutable'
import homeReducer from '../compoent/pages/store/reducer'
export default combineReducers({
  header:headerReducer,
  home:homeReducer
})
