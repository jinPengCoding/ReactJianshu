import React from 'react'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import no1 from '../../.././static/img/no1.png'
import no2 from '../../.././static/img/no2.jpg'
import no3 from '../../.././static/img/no3.jpg'
class Lunbo extends React.Component{
  constructor(props) {
    super(props)
    this.state={}
  }
  render(){
    return(
      <Carousel autoplay>
       <div>
         <img alt='' src={no1} />
       </div>
       <div>
         <img alt='' src={no2} />
       </div>
       <div>
         <img alt='' src={no3}/>
       </div>
     </Carousel>
    )
  }
}
export default Lunbo
