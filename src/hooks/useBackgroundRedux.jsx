import { useSelector, useDispatch } from 'react-redux';
import { backgroundActions } from '../redux/reducers/backgroundSlice';
import { fetchBackground } from '../redux/reducers/backgroundReducers';

const useBackgroundRedux = () => {
  const backgroundRedux = useSelector(state => state.background);
  const dispatch = useDispatch();

  return {
    ...backgroundRedux,
    fetchBackground: () => dispatch(fetchBackground()),
    generateLocalBackground: () => dispatch(backgroundActions.generateLocalBackground()),
    setIsLocalBackground: (data) => dispatch(backgroundActions.setIsLocalBackground(data)),
    selectLocalBackground: (data) => dispatch(backgroundActions.selectLocalBackground(data)),
    setBackground: () => dispatch(backgroundActions.setBackground()),
    removeBackground: () => dispatch(backgroundActions.removeBackground()),
    changeFilter: (data) => dispatch(backgroundActions.changeFilter(data)),
  }
}

export default useBackgroundRedux