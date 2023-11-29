import React, { Component } from 'react'
import '../App.css'

export class Counter extends Component {
    constructor(props){
        super(props)

        this.state={
            count:0
        }
    }

    plus(){
        this.setState({
            count:this.state.count+1
        })
    }

    minus(){
        this.setState({
            count:this.state.count-1
        })
    }

    reset(){
        this.setState({
            count:0
        })
    }
  render() {
    return (
      <div>
        <h1 style={{textAlign:"center"}}>Counter App</h1>
        <p>{this.state.count}</p>
        <div className='buttons'>
          <button onClick={()=>this.plus()}>+</button>
          <button onClick={()=>this.minus()}>-</button>
          <button onClick={()=>this.reset()}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Counter