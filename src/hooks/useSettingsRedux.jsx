import { useSelector, useDispatch } from 'react-redux';
import { settingsActions } from '../redux/reducers/settingsSlice';


const useSettingsRedux = () => {
  const settingsRedux = useSelector(state => state.settings);
  const dispatch = useDispatch();


  return {
    ...settingsRedux,
    setIsVisible: data => dispatch(settingsActions.setIsVisible(data)),
    toggleGeolocation: data => dispatch(settingsActions.toggleGeolocation(data)),
    changeComponentPosition: data => dispatch(settingsActions.changeComponentPosition(data)),
    changeTimeFormat: data => dispatch(settingsActions.changeTimeFormat(data)),
    changeTemperatureUnit: data => dispatch(settingsActions.changeTemperatureUnit(data)),
  }
}

export default useSettingsRedux