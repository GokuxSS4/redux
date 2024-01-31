import { useState } from "react"
import { useDispatch,useSelector } from "react-redux";
import {addTodo} from '../../actions/index';

export default function TodoInput() {
    const [text,setText] = useState('');
    const todos = useSelector((state)=>state.todos);
    const dispatch =useDispatch();

    function addTodoItem(){
        const lastId = todos.length ? todos[todos.length-1].id : 0;
        dispatch(addTodo({title:text,id:lastId+1}));
        setText('');
    }

    return (
    <>
     <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='add todo...' />
     <button onClick={addTodoItem}>add todo</button> 
    </>
  )
}
