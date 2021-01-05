import React from 'react'

export default function Emoji(props) {
  return (
    <li key={props.id}>
    <button onClick={props.onClick}>
      <span role="img" aria-label={props.id} id={props.id}>{props.value}</span>
    </button>
  </li>
  )
}
