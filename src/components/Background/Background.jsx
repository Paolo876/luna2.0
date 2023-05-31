import { useEffect } from "react";
import useBackgroundRedux from "../../hooks/useBackgroundRedux";


const Background = () => {
  const { fetchBackground, isLocal, isRandom } = useBackgroundRedux();

  useEffect(() => {
    if(isLocal){

    } else {
      fetchBackground()
    }
  }, [isLocal, isRandom])

  return (
    <div>Background</div>
  )
}

export default Background