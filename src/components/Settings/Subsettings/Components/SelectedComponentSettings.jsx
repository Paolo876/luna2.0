import { useState } from 'react';
import useSettingsRedux from '../../../../hooks/useSettingsRedux'
import { Box, Divider, Slider, Switch, Typography, Tooltip, Button, Menu, MenuItem } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MuiColorInput } from 'mui-color-input'

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
  const { components, setIsVisible, changeStyle, resetStyle } = useSettingsRedux()
  const selectedComponent = components.find(item => item.name === component)

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
    <Box mt={1} px={2}>
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
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}} my={2}>
          <Typography variant="body2" sx={labelStyles}>Opacity</Typography>
          <Slider
            sx={{width: 290, ml: "auto", mr:1}}
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
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}} my={3}>
          <Typography variant="body2" sx={labelStyles}>Font Weight</Typography>
          <Slider
            sx={{width: 290, ml: "auto", mr:1}}
            min={100}
            max={800}
            step={100}
            valueLabelDisplay="auto"
            value={selectedComponent.addedStyles.fontWeight}
            onChange={(e) => changeStyle({id: "weight", value: e.target.value, name: component})}
            slots={{
              valueLabel: valueLabelComponent,
            }}
          />
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}} my={3}>
          <Typography variant="body2" sx={labelStyles}>Text Color</Typography>
          <MuiColorInput value={selectedComponent.addedStyles.color} onChange={(e) => changeStyle({id: "color", value: e, name: component})} size='small' sx={{fontSize: 13, letterSpacing: .5}}/>
        </Box>
        <Box sx={{display: "flex", justifyContent: "right", mt: 6.2}}>
          <Button color="warning" variant="contained" size="small" onClick={() => resetStyle(component)} sx={{fontSize: 12}}>Reset To Default</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SelectedComponentSettings