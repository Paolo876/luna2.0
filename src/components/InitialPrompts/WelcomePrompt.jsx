import { useState } from "react";
import useUserRedux from "../../hooks/useUserRedux";
import validateInput from "../../utils/validate-input";
import { Typography, Box, TextField, Fade, Button, Grow, Zoom } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./WelcomePrompt.scss"
import Image from 'mui-image';
import logo from "../../assets/logo.png"


const WelcomePrompt = () => {
  const { setUserName } = useUserRedux();
  const [ name, setName ] = useState("")
  const [ error, setError ] = useState({state: false, value: null})
  const [ showForm, setShowForm ] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateInput(name, "text")) {
      setError({state: false, value: null});
      setUserName(name);
    } else {
      setError({state: true, value:"Please enter a valid name."})
      setName("")
    }
  }


  return (
    <Box className="welcome-prompt">
      <Fade appear={true} in={!showForm} timeout={{ enter: 800, exit: 500 }}>
        <Box pb={15}>
          <Image src={logo} height={350} width="auto" duration={0} />
        </Box>
      </Fade>
      <Fade appear={true} in={!showForm} timeout={{ enter: 1000, exit: 500 }} style={{ transitionDelay: !showForm ? "1500ms" : "0ms" }}>
        <Box pb={10}>
          <Button endIcon={<ArrowForwardIosIcon/>} size="large" variant="outlined" sx={{fontWeight: 600, letterSpacing: 1.5, fontSize: 18, px: 6, py: 1.5}} onClick={() => setShowForm(true)}>Continue</Button>
        </Box>
      </Fade>
      <Fade appear={true} in={!showForm} timeout={{ enter: 600, exit: 500 }} style={{ transitionDelay: !showForm ? "600ms" : "0ms" }}>
        <Box sx={{position: "absolute", bottom: 50}}>
          <Typography 
            variant="body2" 
            fontSize={22} 
            sx={{opacity: .95}}
          >
            Luna is a personalizable browser homepage inspired by the google chrome extension 'Momentum'.
          </Typography>
          <Typography 
            variant="body2" 
            color="primary.light" 
            mt={1.25} 
            fontSize={14.5} 
            letterSpacing={.25} 
            sx={{opacity: .8}}
          >
            Please understand that this app is designed and optimized for PC browsers. UI and features may not function properly if used on mobile browsers.
          </Typography>
        </Box>
      </Fade>
      <Fade appear={true} in={showForm} timeout={{ enter: 800, exit: 500 }} style={{ transitionDelay: showForm ? "250ms" : "0ms" }}>
        <Box component="form" onSubmit={handleSubmit}  sx={{position: "absolute"}} pb={15}>
          <Typography variant="h3" fontSize={55} letterSpacing={1}>Before we get started, <br/>what is your name?</Typography>
          <TextField variant="standard" placeholder='John' value={name} onChange={e => setName(e.target.value)} error={error.state} inputProps={{maxLength: 15}}/>
          {error && <Typography variant="body2" color="error.light" mt={1} fontStyle="italic">{error.value}</Typography>}
        </Box>
      </Fade>
    </Box>
  )
}

export default WelcomePrompt


/**
 * 
 *     <Box className="welcome-prompt">
      {!showForm ? <>
        <Box mb={4}>
          <Image src={logo} height={250} width="auto"/>
        </Box>
        <Box>
          <Typography variant="body2" className="description">Luna is a personalizable browser homepage inspired by the google chrome extension 'Momentum'.</Typography>
          <Typography variant="body2" className="description-note" color="primary.light">Please understand that this app is designed and optimized for PC browsers. UI and features may not function properly if used on mobile browsers.</Typography>
        </Box>
        </> :
        <>
        <Box component="form" onSubmit={handleSubmit}>
          <Typography variant="h3" fontSize={55} letterSpacing={1}>Before we get started, <br/>what is your name?</Typography>
          <TextField variant="standard" placeholder='John' value={name} onChange={e => setName(e.target.value)} error={error.state} inputProps={{maxLength: 15}}/>
          {error && <Typography variant="body2" color="error.light" mt={1} fontStyle="italic">{error.value}</Typography>}
        </Box>
        </>
      }



    </Box>
 */