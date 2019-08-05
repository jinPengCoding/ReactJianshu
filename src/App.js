import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'
import Home from './compoent/pages/home'
import Detail from './compoent/pages/detail'
import Header from './compoent/common/Header'
import Login from './compoent/pages/loader'
import Test from './compoent/pages/test'

class App extends React.Component {
  render() {
      return (
        <div className="main">
          {console.log(this.props.nowPath)}
        <Router>
          {this.props.nowPath !== '/login'?<Header/>:'' }
            <Route path="/" exact component={Home} />
            <Route path="/detail/:id" exact component={Detail} />
            <Route path="/login" exact component={Login} />
            <Route path="/test" exact component={Test} />
        </Router>
        </div>
      )
  }
}
const mapStateProps=(state)=>{
  return {
    nowPath:state.getIn(['home','nowPath'])
  }
}
export default connect(mapStateProps,null)(App)
