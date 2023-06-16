import { useSelector, useDispatch } from 'react-redux';
import { settingsActions } from '../redux/reducers/settingsSlice';


const useSettingsRedux = () => {
  const settingsRedux = useSelector(state => state.settings);
  const dispatch = useDispatch();


  return {
    ...settingsRedux,
    setIsVisible: data => dispatch(settingsActions.setIsVisible(data)),
    toggleGeolocation: data => dispatch(settingsActions.toggleGeolocation(data)),
    changeTimeFormat: data => dispatch(settingsActions.changeTimeFormat(data)),
    changeTemperatureUnit: data => dispatch(settingsActions.changeTemperatureUnit(data)),
    changeDateFormat: data => dispatch(settingsActions.changeDateFormat(data)),
    changeDateOptions: data => dispatch(settingsActions.changeDateOptions(data)),
    changeStyle: data => dispatch(settingsActions.changeStyle(data)),
    resetStyle: data => dispatch(settingsActions.resetStyle(data)),
    clearAllSettings: () => dispatch(settingsActions.clearAllSettings()),
    //editor mode
    toggleEditorMode: data => dispatch(settingsActions.toggleEditorMode(data)),
    changeComponentPosition: data => dispatch(settingsActions.changeComponentPosition(data)),
    saveComponentPositions: () => dispatch(settingsActions.saveComponentPositions()),
    resetComponentPositions: () => dispatch(settingsActions.resetComponentPositions()),
    
  }
}

export default useSettingsRedux