import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import {removeTodo,editTodo} from '../../actions/index'
import { useState } from "react";

export default function Todo({title,id}) {
  const [isEdit,setIsEdit] = useState(false);
  const [editText,setEditText] = useState(title);

  const dispatch = useDispatch();
  const action = bindActionCreators({removeTodo,editTodo},dispatch);
  
  function editTodoItem(){
    if(isEdit){
      action.editTodo({id:id,title:editText});
    }
    setIsEdit(!isEdit);
  }

  return (
    <div>
      {isEdit ? <input value={editText} onChange={(e)=>setEditText(e.target.value)} placeholder="Edit todo.." /> : title }
      <button onClick={()=>action.removeTodo(id)}>Delete</button>
      <button onClick={editTodoItem}>{isEdit?"SAVE":"EDIT"}</button>
    </div>
  )
}
