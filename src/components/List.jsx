import React from 'react'

function List(props) {
  return (
    <li onClick={props.onClick} >
        <img src={props.src} alt="flag" />
        <b>{props.b}</b>
    </li>
  )
  }
export default List