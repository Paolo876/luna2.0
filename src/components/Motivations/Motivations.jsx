import { useRef, useEffect, useState } from "react";
import ComponentContainer from "../UI/ComponentContainer";
import useSettingsRedux from "../../hooks/useSettingsRedux";
// import useHttp from "../../utils/"
import axios from "axios";

const Motivations = () => {
  const ref = useRef();   //for react-draggable
  const { components } = useSettingsRedux();
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
      const res = await axios.get("https://api.quotable.io/random?maxLength=140&tags=happiness|love|inspirational|success");
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
        bottom: "5%",
        textAlign: "center",
        textShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
        p: 1,
        ".content": {
          fontSize: "1.2em",
          maxWidth: "60em",
        },
        ".author": {
          mt: .25, 
          fontSize: ".9em",
        },
        ...addedStyles
        
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