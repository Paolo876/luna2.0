import { useState, useEffect, useRef } from "react";
import ComponentContainer from '../UI/ComponentContainer'
import useSettingsRedux from '../../hooks/useSettingsRedux'

const Time = () => {
  const ref = useRef();
  const [time, setTime] = useState(new Date());
  const { components, dateFormat, dateOptions, timeFormat } = useSettingsRedux();
  const addedStyles = components.find(item => item.name === "time").addedStyles;

  const refreshTime = () => {
    setTime(new Date())
  }

  useEffect(() => {
      const runRefresh = setInterval(refreshTime, 1000);
      return () => {
          clearInterval(runRefresh)
      }
  }, []);

  const day = time.toLocaleString(dateFormat, dateOptions)
  
  return (
    <ComponentContainer 
      additionalStyles={{
        top: '12%',
        background: "radial-gradient(rgba(0, 0, 0, 0.1) 10%, transparent 70%)",
        textAlign: "center",
        color:" #ebebeb",
        textShadow: "0 0 10px rgba(141, 91, 91, 0.1)",
        p: 1,
        ".time": {
          fontSize: '7em',
          lineHeight: '1em',
          fontWeight: 'inherit',
          alignSelf: 'center',
        },
        ".day": {
          fontSize: '1.8em',
        },
        ...addedStyles
      }}
      ref={ref} 
      id="time"
    >
      <p className="time">{time.toLocaleTimeString('en-US', { hour12: timeFormat === '12'}).replace(/(.*)\D\d+/, '$1')}</p>
      <p className="day" style={{fontWeight: addedStyles.fontWeight - 200}}>{day}</p>
    </ComponentContainer>
  )
}

export default Time