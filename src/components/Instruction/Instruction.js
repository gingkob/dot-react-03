import React, { Component } from 'react';
import './Instruction.css'
import emoji from './emoji.svg'

export default class Instruction extends Component {
  render() {
    return (
      <>
      <img className="instruction" src={emoji} alt="laughing crying emoji"/>
      <h6>(click on an emoji to view the emoji short name)</h6>
      </>
    )
  }
}
