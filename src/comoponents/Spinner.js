import React, { Component } from 'react'
import spin from './spin.gif'

export class Spinner extends Component {
  render() {
    return (
      <div>
        <img url={spin} alt='loading'/>
      </div>
    )
  }
}

export default Spinner