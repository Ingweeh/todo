import React, { useEffect } from 'react'

function Item(props){

  const bgRed = props.priority === 0 
  return (
    <div className={`${bgRed ? "bg-red" : ""}`}>TodoItem {props.todoitem}</div>
  )
}

export default Item