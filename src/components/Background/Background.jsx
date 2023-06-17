import { useEffect } from "react";
import useBackgroundRedux from "../../hooks/useBackgroundRedux";
import { Box } from "@mui/material";
import Image from "mui-image";


const Background = () => {
  const { fetchBackground, generateLocalBackground, isLocal, isRandom, src, filter } = useBackgroundRedux();

  useEffect(() => {
    if(isRandom){
      if(isLocal){
        generateLocalBackground();
      } else {
        fetchBackground()
      }
    }
  }, [isLocal, isRandom])
  // let bgValue = `linear-gradient(rgba(0, 0, 0, 0.15),rgba(0, 0, 0, 0.15)), url(${src}) no-repeat fixed center/cover`;

  
  return (
    <>
      {src && <Image
        src={src}
        bgColor="rgba(0,0,0,0.95)"
        duration={350}
        showLoading={true}
        easing="ease-in"
        fit="cover"
        height="100vh"
        width="100vw"
        sx={{
          filter: `brightness(${filter.brightness}%) contrast(${filter.contrast}%) saturate(${filter.saturation}%)`,
        }}
      />}
    </>
  )
}

export default Background