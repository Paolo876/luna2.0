import { useState } from 'react'
import useSettingsRedux from '../../hooks/useSettingsRedux'
import useUiRedux from '../../hooks/useUiRedux';
import { Box, Grid, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { keyframes } from '@mui/material';

//subsettings components
import General from './Subsettings/General/General';
import EditorMode from './Subsettings/EditorMode';
import Background from './Subsettings/Background/Background';
import BackgroundAdjustments from './Subsettings/BackgroundAdjustments';
import Components from './Subsettings/Components/Components';
import Interface from './Subsettings/Interface';


const slide = keyframes`
  from {
    left: -10%;
    opacity: 0;
  }
  to {
   left: .5%;
   opacity: 1;
  }
`;


const textStyles = {
  fontWeight: 200,
  fontFamily: "Questrial",
  fontSize: ".9em",
  letterSpacing: .5,
}

const settingsList = [
  {name: <Typography sx={textStyles}>Editor Mode<AutoAwesomeIcon fontSize="inherit" sx={{ml: 1, color: "rgba(245, 205, 79, 1)"}}/></Typography>, id: "editor"},
  {name: <Typography sx={textStyles}>General</Typography>,                 id: "general"},
  {name: <Typography sx={textStyles}>Background</Typography>,              id: "background"},
  {name: <Typography sx={textStyles}>Background Adjustments</Typography>,  id: "background-adjustments"},
  {name: <Typography sx={textStyles}>Customize Components</Typography>,    id: "components"},
  {name: <Typography sx={textStyles}>Interface</Typography>,               id: "ui"},
  {name: <Typography sx={textStyles}>Reset All Settings</Typography>,      id: "reset"},
  {name: <Typography sx={textStyles}>About</Typography>,                   id: "about"},
  {name: <Typography sx={textStyles}>Contact</Typography>,                 id: "contact"},
];


const SettingsList = () => {
  const { interface: { containerColor, backdropFilter } } = useUiRedux();
  const [ selectedSetting, setSelectedSetting ] = useState("general")

  return (
    <Box 
      sx={{
        position: "absolute",
        bottom: "4.5%",
        left: "-100%", 
        transition: "transform 1s ease",
        background: containerColor,
        backdropFilter,
        animation: `${slide} 250ms forwards linear`
      }}
    >
      <Grid container>
        <Grid item xs={4} sx={{width: 350, borderRight: 1, borderColor: "rgba(250,250,250,0.25)", height: 500}}>
          <List>
            {settingsList.map(item => (
              <ListItem 
                disablePadding 
                disableGutters 
                key={item.id}
                sx={{
                  my: .25,
                  opacity: item.id === selectedSetting ? 1 : .8,
                  background: item.id === selectedSetting ? "rgba(0,0,0,.35)" : "initial",
                  "&:nth-of-type(8)" : {
                    mt: 5.5,
                  }
                }}
              >
                <ListItemButton onClick={() => setSelectedSetting(item.id)} disableRipple={item.id === selectedSetting} >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={8}  sx={{width: 400, height: 500, background: "rgba(110,110,110,.05)"}}>
          {selectedSetting === "editor"  && <EditorMode/>}
          {selectedSetting === "general" && <General/>}
          {selectedSetting === "background" && <Background/>}
          {selectedSetting === "background-adjustments" && <BackgroundAdjustments/>}
          {selectedSetting === "components" && <Components/>}
          {selectedSetting === "ui" && <Interface/>}
        </Grid>
      </Grid>
    </Box>
  )
}

export default SettingsList