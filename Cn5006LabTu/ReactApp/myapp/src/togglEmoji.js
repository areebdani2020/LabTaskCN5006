import './App.css'
import React from 'react'
import happy from './Assets/happy.png'
import sad from './Assets/sad.png'


class TogglMode extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {pic:happy};
        this.Toggl_Mode = this.Toggl_Mode.bind(this);

    }

    Toggl_Mode()
    {
        this.setState((prevState)=>{
            if(prevState.pic===sad)
            {
                this.mode = "happy"
                return{pic:happy}
            }

            else if (prevState.pic === happy)
            {
                this.mode = "sad"
                return{pic:sad}
            }
        })
    }



    render()
    {
      return(
          <div>
              <h3>This is output of task2 {this.mode}</h3>
              <button onClick={this.Toggl_Mode}><img src={this.state.pic} alt = "counterimage"/></button>
          </div>
  
      );
    }

}


export default TogglMode    