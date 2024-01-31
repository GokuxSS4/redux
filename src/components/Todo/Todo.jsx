import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import {removeTodo} from '../../actions/index'

export default function Todo({title,id}) {
  const dispatch = useDispatch();
  const action = bindActionCreators({removeTodo},dispatch);
  return (
    <div>
      {title}
      <button onClick={()=>action.removeTodo(id)}>Delete</button>
    </div>
  )
}
