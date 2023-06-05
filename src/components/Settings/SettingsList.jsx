import { useState } from 'react'
import { Box, Grid, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import useSettingsRedux from '../../hooks/useSettingsRedux'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import General from './Subsettings/General';
import EditorMode from './Subsettings/EditorMode';


const textStyles = {
  fontWeight: 200,
  fontFamily: "Questrial",
  fontSize: ".9em",
  // opacity: .8, 
  letterSpacing: .5,
}

const settingsList = [
  {name: <Typography sx={textStyles}>Editor Mode<AutoAwesomeIcon fontSize="inherit" sx={{ml: 1, color: "rgba(245, 205, 79, 1)"}}/></Typography>, id: "editor"},
  {name: <Typography sx={textStyles}>General</Typography>,                 id: "general"},
  {name: <Typography sx={textStyles}>Background</Typography>,              id: "background"},
  {name: <Typography sx={textStyles}>Components</Typography>,              id: "components"},
  {name: <Typography sx={textStyles}>Interface</Typography>,               id: "ui"},
  {name: <Typography sx={textStyles}>Reset All Settings</Typography>,      id: "reset"},
  {name: <Typography sx={textStyles}>About</Typography>,                   id: "about"},
  {name: <Typography sx={textStyles}>Contact</Typography>,                 id: "contact"},
];



const SettingsList = () => {
  const { ui } = useSettingsRedux();
  const containerColor = ui.containerColor;
  const [ selectedSetting, setSelectedSetting ] = useState("general")

  return (
    <Box 
      sx={{
        position: "absolute",
        bottom: "4.5%",
        left: ".5%", 
        background: containerColor,
      }}
    >
      <Grid container>
        <Grid item xs={4} sx={{minWidth: 225, borderRight: 1, borderColor: "rgba(250,250,250,0.25)"}}>
          <List>
            {settingsList.map(item => (
              <ListItem 
                disablePadding 
                disableGutters 
                key={item.id}
                sx={{
                  opacity: item.id === selectedSetting ? 1 : .8,
                  background: item.id === selectedSetting ? "rgba(0,0,0,.35)" : "initial",
                  "&:nth-of-type(7)" : {
                    mt: 3,
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
        <Grid item xs={4}  sx={{minWidth: 400}}>
          {selectedSetting === "editor"  && <EditorMode/>}
          {selectedSetting === "general" && <General/>}
        </Grid>
      </Grid>
    </Box>
  )
}

export default SettingsList