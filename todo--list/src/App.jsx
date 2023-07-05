import { useState } from "react"
import "./styles.css"
export default function App()  {
  const [newItem, SetNewItem] = useState("")
  const [todos,SetTodos] = useState([])
//prevents the page from refreshing
function handleSubmit(e) {
  e.preventDefault()
  SetTodos(currentTodos=> {
    return [
      ...currentTodos,
    {id:crypto.randomUUID(),title:newItem, completed:false
  },
    ]
  })
  //THIS WILL ALLOW ITEMS TO DISAPPEAR AFTER INSERTION
  SetNewItem("")

  
}
function toggleTodos(id, completed) {
  SetTodos(currentTodos=> {
    return currentTodos.map(todos => {
      if (todos.id === id) {
        return {...todos,completed }
      }
      return todos
    } )
  })
}
function deleteTodos(id) {
  SetTodos(currentTodos => {
    return currentTodos.filter(todos => todos.id !== id)
  
})
}

  return(
    <div>                                               
    
        <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input 
          value={newItem}
            onChange={e => SetNewItem(e.target.value)} 
            type="text" 
            id="item" />
      </div>
      <button className="btn">Add</button>
        </form> 
        <h1 className="header">To-do-list</h1>
        <ul className="list">
      
        {todos.lenth===0 && 'No TO-dos'}
          {todos.map(todos =>{
            return <li key={todos.id}>
            <label> 
              <input type='checkbox' checked={todos.completed}
                onChange={e => toggleTodos(todos.id,e.target.checked)}
              /> 
              {todos.title} 
            </label>
            <button onClick={() => deleteTodos(todos.id)} className="btn btn-danger">Delete</button>
          </li>
          })}
          
            

      
       
        </ul>
    </div>
    
    
    

  )

}