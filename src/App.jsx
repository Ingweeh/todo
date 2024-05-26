import React from 'react'
import Item from './components/Item.jsx' 

let todo = [
  {item: 1, priority: 0},
  {item: 2, priority: 1},
  {item: 3, priority: 0},
  {item: 4, priority: 2},
  {item: 5, priority: 3},
  {item: 6, priority: 4},
  {item: 7, priority: 5},
  {item: 8, priority: 6},
  {item: 9, priority: 7},
  {item: 10, priority: 8}
];

const App = () => {
  return (
    todo.map((a)=><Item todoitem={a.item} priority={a.priority}/>)
  )
}

export default App