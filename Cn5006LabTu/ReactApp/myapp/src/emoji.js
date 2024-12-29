import './App.css'
import React from 'react'
import happy from './Assets/happy.png'
import like from './Assets/like.png'
import sad from './Assets/sad.png'
import love from './Assets/Love.png'
import { setSelectionRange } from '@testing-library/user-event/dist/utils'

class Emoji extends React.Component
{
  constructor (props)
  {
    super(props);
    this.state = {num:0};
    this.increment = this.increment.bind(this);
    this.pic=null;

    if (this.props.type === "love")
        this.pic =love
    else if (this.props.type==="like")
        this.pic=like
    else if (this.props.type === "sad")
        this.pic = sad
    else if (this.props.type === "happy")
        this.pic = happy


  }  

  increment()
  {
    this.setState((prevState)=>
        {
            return {num:prevState.num+1}
        })
  }

  render()
  {
    return(
        <div>
            <h5>IT is {this.state.num}{this.props.type}</h5>
            <button onClick={this.increment}><img src={this.pic} alt = "counterimage"/></button>
        </div>

    );
  }

}
export default Emoji;
