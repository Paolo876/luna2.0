import { useEffect } from "react";
import useBackgroundRedux from "../../hooks/useBackgroundRedux";


const Background = () => {
  const { fetchBackground, generateLocalBackground, isLocal, isRandom, } = useBackgroundRedux();

  useEffect(() => {
    if(isLocal){
      generateLocalBackground();
    } else {
      fetchBackground()
    }
  }, [isLocal, isRandom])

  return (
    <div>Background</div>
  )
}

export default Background