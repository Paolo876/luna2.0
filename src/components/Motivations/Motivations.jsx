import { useRef, useEffect, useState } from "react";
import ComponentContainer from "../UI/ComponentContainer";
import useSettingsRedux from "../../hooks/useSettingsRedux";
import axios from "axios";

const Motivations = () => {
  const ref = useRef();   //for react-draggable
  const { components, editorMode: { isActive } } = useSettingsRedux();
  const addedStyles = components.find(item => item.name === "motivations").addedStyles;
  
  const [ data, setData ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    setIsLoading(true)
    try{
      const res = await axios.get("https://api.quotable.io/random?maxLength=140&tags=happiness|love|success");
      setData(res.data)
      setIsLoading(false)
    }catch (err) {
      setError(err.message)
      setIsLoading(false)
    }
  }

  if(!error && data) return (
    <ComponentContainer
      additionalStyles={{
        bottom: {xs: "10%", md: "5%"},
        textAlign: "center",
        textShadow: "1px 1px 2px rgba(0, 0, 0, .8)",
        maxWidth: {xs: "95vw", md: "75vw"},
        // width: isActive ? "60vh" : "initial",
        maxHeight: 100,
        height: isActive ? 100 : "initial",
        px: {xs: 0, md: 0},
        ".content": {
          fontSize: {xs: ".65em", sm: "1em", md: "1.1em"},
          // maxWidth: {xs: "80%", md:"60em"},
        },
        ".author": {
          mt: .25, 
          fontSize: {xs: ".6em", sm: ".8em", md: ".9em"},
        },
        ...addedStyles,
      }}
      ref={ref} 
      id="motivations"
    >
      <p className="content">{`"${data.content}"`}</p>
      <p  className="author" style={{fontWeight: addedStyles.fontWeight - 200}}>{`-${data.author}`}</p>    
    </ComponentContainer>
  )
}

export default Motivations