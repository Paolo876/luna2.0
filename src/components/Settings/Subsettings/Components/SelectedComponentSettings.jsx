import { useState } from 'react';
import useSettingsRedux from '../../../../hooks/useSettingsRedux'
import { Box, Divider, Slider, Switch, Typography, Tooltip, Grid, Button, Menu, MenuItem,  } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const labelStyles = {
  fontSize: 15,
  letterSpacing:.5, 
}

const valueLabelComponent = ({ children, value }) => (
  <Tooltip enterTouchDelay={0} placement="top" title={value}>
    {children}
  </Tooltip>
);

const fontList = [ "Inter", "Lato", "Montserrat", "Roboto", "Source Sans Pro" ];


const SelectedComponentSettings = ({ component }) => {
  const { components, setIsVisible, changeStyle } = useSettingsRedux()
  const selectedComponent = components.find(item => item.name === component)

  console.log(selectedComponent.addedStyles)

  const [anchorEl, setAnchorEl] = useState(null);
  const [ selectedFont, setSelectedFont ] = useState(selectedComponent.addedStyles.fontFamily);

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleItemClick = (item) => {
    changeStyle({id: "font", value: item, name: component})
    setSelectedFont(item)
    setAnchorEl(null)
  }


  return (
    <Box mt={2} px={2}>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Typography variant="body2" sx={labelStyles}>Show Component</Typography>
        <Switch
          checked={selectedComponent.isVisible}
          onChange={() => setIsVisible(component)}
        />
      </Box>
      <Divider/>
      <Box sx={{position: "relative", opacity: selectedComponent.isVisible ? 1 : .25}}>
        {!selectedComponent.isVisible && <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", zIndex: 5}}></Box>}
        <Box my={2}>
          <Grid container spacing={3} alignItems="center" justifyContent="center" pr={.5}>
            <Grid item mb={1}><Typography variant="body2" sx={labelStyles}>Opacity</Typography></Grid>
            <Grid item xs>          
              <Slider
                min={.01}
                max={1}
                step={.01}
                valueLabelDisplay="auto"
                value={selectedComponent.addedStyles.opacity}
                onChange={(e) => changeStyle({id: "opacity", value: e.target.value, name: component})}
                slots={{
                  valueLabel: valueLabelComponent,
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Typography variant="body2" sx={labelStyles}>Font</Typography>
          <Button
            aria-controls={anchorEl ? 'font-menu' : undefined}
            onClick={handleDropdownClick}
            endIcon={<KeyboardArrowDownIcon/>}
            sx={{width: 300, display: "flex", justifyContent: "space-between", background: "rgba(15, 15, 15, .75)", letterSpacing: .25, textTransform: "none", color: "rgba(200,200,200,1)", px: 2}}
            variant="outlined"
            size="small"
            color="primary"
          >{selectedFont}</Button>
          <Menu
            id="font-menu"
            anchorEl={anchorEl}
            open={anchorEl !== null}
            onClose={() => setAnchorEl(null)}
            MenuListProps={{ sx:{ p:.25, width: 260 } }}
            sx={{ mx: .15, my: .25 }}
          >
            {fontList.map(item => <MenuItem key={item} sx={{width: "100%", color: "black" }} onClick={() => handleItemClick(item)}>
              <Typography variant="body2" sx={{fontWeight: 600, letterSpacing: .5, opacity: .7, fontSize: 13}}>{item}</Typography>
            </MenuItem>)}
          </Menu>
        </Box>
      </Box>
    </Box>
  )
}

export default SelectedComponentSettings


// font dropdown
// font weight slider
// color selector