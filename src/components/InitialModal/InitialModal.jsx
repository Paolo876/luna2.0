import React from 'react'
import { Box, Divider, Modal, Typography, Fade, Button } from '@mui/material'
import useUiRedux from '../../hooks/useUiRedux'
import Image from 'mui-image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import logo from "../../assets/logo.png"

const InitialModal = () => {
  const { interface: { isInitialLoad } } = useUiRedux();

  return (
    <Modal
      open={isInitialLoad}
      closeAfterTransition
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: {
            background: "rgba(0,0,0,0.5)",
            // backdropFilter: "blur(1px)"
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
            width: 500,
            border: 0,
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 6,
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(30,30,30, .96)",
            // color: "#333"
          }}
        >
          <Box sx={{width: "100%"}}>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", mb: .5}}>
              <Typography variant="h4" fontSize={30} fontWeight={200}>Quick Tour</Typography>
              <Box>
                <Image src={logo} height={50} width={50} fit="cover" />
              </Box>
            </Box>
            <Divider sx={{borderColor: "white"}}/>
          </Box>
          <Box>
            
            <Typography variant="body2">Welcome to Luna! This app serves as an alternative browser homepage that gives you the power to customize the UI to your own preference.</Typography>
          </Box>
          <Box sx={{mt: "auto", display: "flex", justifyContent: "right", width: "100%"}}>
            <Button variant="contained" endIcon={<ArrowForwardIosIcon/>}>Next</Button>
            {/* <Button variant="contained" color="warning">Skip & Close</Button> */}
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}

export default InitialModal