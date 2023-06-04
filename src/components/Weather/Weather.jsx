import React, { useRef, useEffect, useState } from "react";
import useSettingsRedux from "../../hooks/useSettingsRedux";
import ComponentContainer from "../UI/ComponentContainer";
import { Box, Button } from "@mui/material";

const Weather = () => {
  const ref = useRef();
  const { components, ui } = useSettingsRedux();
  const addedStyles = components.find(item => item.name === "weather").addedStyles;

  return (
    <ComponentContainer
      additionalStyles={{

        ...addedStyles
      }}
      ref={ref} 
      id="weather"
    >
    </ComponentContainer>
  )
}

export default Weather