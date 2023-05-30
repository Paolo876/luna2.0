import { useSelector, useDispatch } from 'react-redux';
import { settingsActions } from '../redux/reducers/settingsSlice';


const useSettingsRedux = () => {
  const settingsRedux = useSelector(state => state.settings);
  const dispatch = useDispatch();


  return {
    ...settingsRedux,
    setIsVisible: data => dispatch(settingsActions.setIsVisible(data)),
  }
}

export default useSettingsRedux