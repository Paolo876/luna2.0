import React, { useRef, useEffect, useState } from "react";
import useSettingsRedux from "../../hooks/useSettingsRedux";
import ComponentContainer from "../UI/ComponentContainer";
import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import axios from "axios";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from "mui-image";


const Weather = React.memo(() => {
  const ref = useRef();
  const { components, temperatureUnit, isGeolocationAllowed } = useSettingsRedux();
  const addedStyles = components.find(item => item.name === "weather").addedStyles;

  const [ data, setData ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);


  useEffect(() => {
    if(!data){
      fetchData();
    }
  }, [])

  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition( async ({coords}) => {
      const lat = coords.latitude;
      const long = coords.longitude;
      try {
        setIsLoading(true)
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);
        setData(res.data);
        setIsLoading(false)
      } catch (err) {
        setError(err.message)
        setIsLoading(false)

      }
    })
  }

  let temperature;
  if(data){
    if(temperatureUnit === 'f'){
      temperature = Math.round((data.main.temp - 273.15) * 9/5 + 32);
    } else if(temperatureUnit === 'c'){
      temperature = Math.round(data.main.temp - 273.15);
    } else {
      temperature = Math.round(data.main.temp)
    }
  }

  
  if(isGeolocationAllowed) return (
    <ComponentContainer
      additionalStyles={{
        top: '48%',
        background: 'radial-gradient(closest-side, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1) 40%, transparent 80%)',
        textAlign: 'center',
        minWidth: '15em',
        p: '.5em',
        textShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
        // bottom: 1,
        ".header": {
          fontSize: "1.2em"
        },
        ...addedStyles
      }}
      ref={ref} 
      id="weather"
    >
      {isLoading && <Box ><CircularProgress color="inherit" size={30} sx={{opacity: .7}}/></Box>}
      {error && <Typography ></Typography>}
      {data && !error && <>
        <p className="header">{`${data.name}, ${data.sys.country}`} <LocationOnIcon sx={{opacity: .8}}/></p>

        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", mt:1, fontWeight: addedStyles.fontWeight - 200}}>
          <Box sx={{width: "35%"}}>
            <p>{temperature}<Box component="small">{temperatureUnit === 'f' || temperatureUnit === 'c' ? "°" : ""}{temperatureUnit.toUpperCase()}</Box></p>
          </Box>
          <Divider orientation="vertical" flexItem sx={{borderColor: "#ebebeb"}}/>
          <Box sx={{width: "35%",  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", py:.5}}>
            <Box sx={{height: 50, width: 50}}>
              <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} fit="cover"/>

            </Box>
            <p style={{fontSize: ".7em", lineHeight: 1.15}}>{data.weather[0].description}</p>
          </Box>
        </Box>
      </>}
    </ComponentContainer>
  )
  return;
})

export default Weather