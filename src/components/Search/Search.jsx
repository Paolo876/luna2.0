import { useRef } from "react";
import useSettingsRedux from "../../hooks/useSettingsRedux";
import ComponentContainer from '../UI/ComponentContainer'
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from "@mui/material";

const Search = () => {
  const ref = useRef();
  const { components } = useSettingsRedux();
  const addedStyles = components.find(item => item.name === "search").addedStyles;

  const handleSubmit = (e) => {
    e.preventDefault();
    // window.location.href = `https://www.google.com/search?q=${inputRef.current.value}`;

  }
  return (
    <ComponentContainer
      additionalStyles={{
        top: "0",
        // left: "2%",
        right: "inherit",
        minWidth: "30em",
        p: .5,
        flexDirection: "row",
        WebkitBoxPack: "center",
        msFlexPack: "center",
        justifyContent: "center",
        background: "radial-gradient(rgba(0, 0, 0, 0.1) 10%, transparent 60%)",
        textShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
        ...addedStyles
        
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
              <SearchIcon sx={{color: "white", mr: 1}}/>
            </InputAdornment>
          )}}
          sx={{
            background: "rgba(50,50,50,0.15)",
            '.MuiInputBase-input': { 
              fontWeight: 300,
              px: 1,
              height: 32,
            },
            '.MuiInputBase-input::placeholder': {
              fontWeight: 200,
              color: "white",
              opacity: .5,
              fontSize: ".8em",
              letterSpacing: .5,
            }
          }}
        />
      </form>
    </ComponentContainer>
  )
}

export default Search