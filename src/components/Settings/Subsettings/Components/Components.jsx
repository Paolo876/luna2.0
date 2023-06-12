import { useState } from 'react';
import useSettingsRedux from "../../../../hooks/useSettingsRedux";
import SubsettingContainer from "../SubsettingContainer";
import { Button, Menu, MenuItem, Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Components = () => {
  const { components } = useSettingsRedux();
  const [anchorEl, setAnchorEl] = useState(null);
  const [ selectedComponent, setSelectedComponent ] = useState(null);

  console.log(components)
  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleItemClick = (item) => {
    setSelectedComponent(item)
    setAnchorEl(null)
  }
  console.log(selectedComponent)
  return (
    <SubsettingContainer title="Components">
      <Box>
        <Button
          id="basic-button"
          aria-controls={anchorEl ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={anchorEl ? 'true' : undefined}
          onClick={handleDropdownClick}
          endIcon={<KeyboardArrowDownIcon/>}
          sx={{width: 400, display: "flex", justifyContent: "space-between", background: "rgba(15, 15, 15, .75)", letterSpacing: .5}}
          variant="outlined"
        >
          {selectedComponent === null ? 'Select Component' : selectedComponent}
        </Button>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={anchorEl !== null}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          sx:{
            background: "rgba(0,0,0,0)",
            p:.25,
            width: 360
          }
        }}
        sx={{mx: .25, my: .25}}
      >
        {components.map(item => (
          <MenuItem 
            key={item.name}
            onClick={() => handleItemClick(item.value)}
            sx={{width: "100%", color: "black", }}
          >
            <Typography variant="body2" sx={{fontWeight: 600, letterSpacing: .5, opacity: .85, fontSize: 15}}>{item.value}</Typography>
          </MenuItem>
        ))}
      </Menu>
      </Box>
    </SubsettingContainer>
  )
}

export default Components