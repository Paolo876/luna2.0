import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../redux/reducers/uiSlice';

const useUiRedux = () => {
  const uiRedux = useSelector(state => state.ui);
  const dispatch = useDispatch();

  return {
    ...uiRedux,
    changeContainerColor: data => dispatch(uiActions.changeContainerColor(data)),
    changeBackdrop: data => dispatch(uiActions.changeBackdrop(data)),
  }
}

export default useUiRedux