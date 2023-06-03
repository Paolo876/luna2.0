import { useSelector, useDispatch } from 'react-redux';
import { todoActions } from '../redux/reducers/todoSlice';

const useTodoRedux = () => {
  const todosRedux = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return {
    ...todosRedux,
    addTodo: data => dispatch(todoActions.addTodo(data)),
    editTodo: data => dispatch(todoActions.editTodo(data)),
    deleteTodo: data => dispatch(todoActions.deleteTodo(data)),
    finishTodo: data => dispatch(todoActions.finishTodo(data)),
  }
}

export default useTodoRedux