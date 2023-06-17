import { useRef, useState } from "react";
import useSettingsRedux from "../../hooks/useSettingsRedux";
import ComponentContainer from '../UI/ComponentContainer'
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from "@mui/material";
import useUiRedux from "../../hooks/useUiRedux";


const Search = () => {
  const ref = useRef();
  const [ input, setInput ] = useState("");
  const { components } = useSettingsRedux();
  const addedStyles = components.find(item => item.name === "search").addedStyles;
  const { interface: { containerColor, backdropFilter }} = useUiRedux();

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `https://www.google.com/search?q=${input}`;

  }

  
  return (
    <ComponentContainer
      additionalStyles={{
        top: "0",
        // left: "2%",
        right: "inherit",
        minWidth: {xs: "none", sm: "20em", md: "30em"},
        m: .5,
        flexDirection: "row",
        WebkitBoxPack: "center",
        msFlexPack: "center",
        justifyContent: "center",
        background: containerColor,
        backdropFilter: `blur(${backdropFilter.blur}px) contrast(${backdropFilter.contrast}%) brightness(${backdropFilter.brightness}%)`,
        textShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
        ...addedStyles,
        display: {xs: "none", sm: "initial"}
        
      }}
      ref={ref} 
      id="search"
    >
      <form style={{width: "100%"}} onSubmit={handleSubmit}>
        <TextField 
          fullWidth 
          variant="standard" 
          placeholder="Google Search" 
          InputProps={{ endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{mr: 1}} color="primary"/>
            </InputAdornment>
          )}}
          sx={{
            background: "rgba(50,50,50,0.15)",
            
            '.MuiInputBase-input': { 
              fontWeight: 400,
              px: 1,
              height: 32,
              fontFamily: addedStyles.fontFamily,
              color: addedStyles.color,
            },
            '.MuiInputBase-input::placeholder': {
              fontWeight: 200,
              opacity: .85,
              fontSize: ".75em",
              letterSpacing: 1,
              fontFamily: addedStyles.fontFamily,
              color: addedStyles.color,
            }
          }}
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </form>
    </ComponentContainer>
  )
}

export default Search