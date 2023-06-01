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
    // setIsVisible: data => dispatch(settingsActions.setIsVisible(data)),
  }
}

export default useBackgroundRedux