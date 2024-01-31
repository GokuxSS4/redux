import Todo from "../Todo/Todo"
import { useSelector } from "react-redux"

export default function TodoList() {
  const todos = useSelector((state)=>state.todos);
  return (todos && todos.map(todo => <Todo key={todo.id} id={todo.id} title={todo.title}/>));
}
