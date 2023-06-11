import { useState } from 'react'
import SubsettingContainer from "../SubsettingContainer"
import { Button, Menu, MenuItem, Box } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Components = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [ selectedComponent, setSelectedComponent ] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <SubsettingContainer title="Components">
      <Box>
      <Button
        id="basic-button"
        aria-controls={anchorEl ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon/>}
        sx={{width: 350, display: "flex", justifyContent: "space-between", background: "rgba(15, 15, 15, .75)"}}
        variant="outlined"
      >
        Select Component
      </Button>
      </Box>
    </SubsettingContainer>
  )
}

export default Components