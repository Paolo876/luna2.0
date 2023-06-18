import React from 'react'
import { Box, Divider, Modal, Typography, Fade, Button } from '@mui/material'
import useUiRedux from '../../hooks/useUiRedux'
import Image from 'mui-image';
import logo from "../../assets/logo.png"
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';

const InitialModal = () => {
  const { interface: { isInitialLoad }, closeInitialModal } = useUiRedux();

  return (
    <Modal
      open={isInitialLoad}
      closeAfterTransition
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: {
            background: "rgba(0,0,0,0.15)",
          }
        }
      }}
    >
      <Fade in={isInitialLoad} timeout={{ enter: 300, exit: 300 }} style={{ transitionDelay: "250ms" }}>
        <Box
          sx={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: {xs: "95vw", sm: 500, md: 600, lg: 650},
            border: 0,
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 5,
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(30,30,30, .96)",
          }}
        >
          <Box sx={{width: "100%"}}>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", mb: 1}}>
              <Typography variant="h4" fontSize={30} fontWeight={200}>Welcome to Luna!</Typography>
              <Box>
                <Image src={logo} height={50} width={50} fit="cover" />
              </Box>
            </Box>
            <Divider sx={{borderColor: "white"}}/>
          </Box>
          <Box>
            <Typography variant="body2" fontSize={16} mb={1.5} letterSpacing={.25}>
              This app serves as an alternative homepage to your browser. It allows you to customize the components of the interface based on your preference.
            </Typography>
            <Typography variant="body2" fontSize={16} letterSpacing={.25}>
              To get started on customizing your UI, click the <SettingsIcon fontSize="inherit"/> button on the lower left corner of the window. 
            </Typography>
          </Box>
          <Box sx={{mt: "auto", display: "flex", justifyContent: "right", width: "100%"}}>
            <Button variant="contained" endIcon={<CloseIcon/>} color="error">Close</Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}

export default InitialModal