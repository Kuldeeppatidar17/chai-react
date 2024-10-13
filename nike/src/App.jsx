import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { v4 as uuidv4 } from 'uuid';
function App() {
  //set todo
  const [todo, setTodo] = useState("");
  //set todos in array
  const [todos, setTodos] = useState([]);
  //use effect
  useEffect(() => {
    const todoString = localStorage.getItem("todos")
    if (todoString) {
      const todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
  //save into local storage
  useEffect(()=>{
    if(todos.length>0)
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  //handle edit
  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    setTodos(todos.filter(todo => todo.id !== id))
    
  }
  //handle delete
  const handleDelete = (e, id) => {
    if (window.confirm("Are you sure want to delete this Todo ?"))
      setTodos(todos.filter(todo => todo.id !== id));
    
  }
  //handle add
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    
  }
  //handle change in input
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  //handle check box
  const handleCheckBox = (e) => {
    let id = e.target.name
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    )
    setTodos(newTodos)
    
  }

  return (
    <>
      <NavBar />
      <div className='container mx-auto w-[90%] my-5 rounded-xl p-5 bg-violet-200 min-h-[80vh]'>
        <div className='addTodo'>
          <h2 className='text-lg font-bold mb-3'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} className='p-1 mx-4 w-[80%] rounded-sm outline-none' type="text" />
          <button onClick={handleAdd} disabled={todo.length<=3} className='disabled:bg-violet-600 bg-violet-600 hover:bg-violet-800  p-1 px-2 rounded-md font-bold text-[16px]'>Add</button>
        </div>
        <h2 className='text-lg font-bold mt-3'>Your Todos</h2>

        <div className="todos">
          {todos.map(item => {
            return <div key={item.id} className="todo flex">
              <input name={item.id} onChange={handleCheckBox} type="checkbox" checked={item.isCompleted} />
              <div className={`${item.isCompleted ? "line-through" : ""} text mr-5 bg-violet-100 border border-violet-400 rounded-sm w-[80%] mx-4 p-[2px] mb-2 pl-3`}>{item.todo}</div>
              <div className='buttons font-bold text-[16px]'>
                <button onClick={(e) => handleEdit(e, item.id)} className='bg-violet-600 hover:bg-violet-800 mr-3 p-1 px-2 rounded-md'>Edit</button>
                <button onClick={(e) => handleDelete(e, item.id)} className='bg-violet-600 hover:bg-violet-800 mr-3 p-1 px-2 rounded-md'>Delete</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
