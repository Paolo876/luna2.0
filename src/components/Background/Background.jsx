import { useEffect } from "react";
import useBackgroundRedux from "../../hooks/useBackgroundRedux";
import { Box } from "@mui/material";


const Background = () => {
  const { fetchBackground, generateLocalBackground, isLocal, isRandom, src, filter, activeLocalBackground } = useBackgroundRedux();

  useEffect(() => {
    if(isLocal){
      generateLocalBackground();
    } else {
      fetchBackground()
    }
  }, [isLocal, isRandom, activeLocalBackground])

  const bgValue = `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url(${src}) no-repeat fixed center/cover`;

  return (
    <Box
      sx={{
        background: bgValue, 
        filter: `brightness(${filter.brightness}%) contrast(${filter.contrast}%) saturate(${filter.saturation}%)`,
        height: "100vh",
        width: "100vw"
      }}
    >
    </Box>
  )
}

export default Background