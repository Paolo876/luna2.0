import { useState } from 'react'
import SubsettingContainer from '../SubsettingContainer'
import { FormControl, FormControlLabel, Radio, RadioGroup, Box, Typography, Button, ButtonBase, Divider } from '@mui/material'
import useBackgroundRedux from "../../../../hooks/useBackgroundRedux";
import Image from 'mui-image';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const Background = () => {
  const { localBackgrounds, activeLocalBackground, isLocal, isRandom, setIsLocalBackground, selectLocalBackground, fetchBackground, isLoading, setBackground, src, removeBackground } = useBackgroundRedux();
  const [ selectedImage, setSelectedImage ] = useState(activeLocalBackground);

  const handleLocalBackgroundItemClick = (item) => {
    setSelectedImage(item)
    selectLocalBackground(item)
  }

  // console.log(selectedImage.name, activeLocalBackground.name)
  return (
    <SubsettingContainer title="Background">
      <Box>
        <Typography variant="body2" sx={{opacity: .75, mb: 1, fontSize: 13, }}>
          Note: Random background images are generated on reload if no image is set as default.
        </Typography>
      </Box>
      <FormControl>
        <RadioGroup
          value={isLocal}
          onChange={e => setIsLocalBackground(JSON.parse(e.target.value))}
        >
          <FormControlLabel value={true} control={<Radio />} label={<Typography variant='body2' fontSize={14.5}>Select Random Backgrounds from Database</Typography>} />
            <Box pb={2} pr={1} pl={3} mt={.5} sx={{position: "relative", opacity: isLocal ? 1 : .5}}>
              {!isLocal && <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", zIndex: 1, background: "rgba(0,0,0,.5)"}}></Box>}
              <Box sx={{display: "flex", overflowX: "scroll", overflowY: "hidden", width: 390, mb: 1}} component="ul">
                {localBackgrounds.map(item => (
                  <ButtonBase 
                    key={item.name}
                    onClick={() => handleLocalBackgroundItemClick(item)}
                    component="li" 
                    sx={{
                      mx: .1, 
                      mb: .25, 
                      border: 2, 
                      p: .25, 
                      borderColor: src === item.src ? "primary.main" : "transparent"
                    }}
                    
                  >
                    <Image src={item.thumbnailUrl} width={90} duration={0}/>
                  </ButtonBase>
                ))}
              </Box>
              {/* <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Box>
                  <Typography variant="body2">{selectedImage.name}</Typography>
                  {activeLocalBackground.src === selectedImage.src && <Typography variant="body2" sx={{fontStyle: "italic", fontSize: 11, opacity: .65}}>*Currently Set As Default</Typography>}
                </Box>
                <Box sx={{display: "flex", gap: 1,}}>

                  <Button size="small" variant="contained" sx={{fontSize: 10}} disabled={isRandom} color="warning" onClick={() => setBackground()}>Remove Default</Button>
                  <Button size="small" variant="contained" sx={{fontSize: 10}} disabled={!isRandom} color="secondary" onClick={() => setBackground()}>Set as Default</Button>
                </Box>
              </Box> */}
            </Box>
          <Divider/>
          <FormControlLabel value={false} control={<Radio />} label={<Typography variant='body2' fontSize={14.5}>Select Random Backgrounds from unsplash.com</Typography>} />
            <Box pb={2} pr={1} pl={3} mt={.5} sx={{position: "relative", opacity: !isLocal ? 1 : .5}}>
              {isLocal && <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", zIndex: 1, background: "rgba(0,0,0,.5)"}}></Box>}
              <Box sx={{display: "flex", width: 390, mb: 2.5, justifyContent: "left", mt: 1}}>
                <Button endIcon={<AutorenewIcon/>} size="medium" variant="outlined" onClick={() => fetchBackground()} disabled={isLoading}>Generate Background</Button>
              </Box>
              {/* <Box sx={{display: "flex", justifyContent: "right"}}>
                <Button size="small" variant="contained" sx={{fontSize: 10}} disabled={!isRandom} color="secondary" onClick={() => setBackground()}>Set as Default</Button>
              </Box> */}
            </Box>
        </RadioGroup>
      </FormControl>
      <Box sx={{display: "flex", justifyContent: "right", mt: 3}}>
        {!isRandom && <Button variant="contained" sx={{fontSize: 12}} disabled={isRandom} color="warning" onClick={() => removeBackground()} endIcon={<HighlightOffIcon/>}>Remove Default Background</Button>}
        {isRandom && <Button variant="contained" sx={{fontSize: 12}} disabled={!isRandom} color="secondary" onClick={() => setBackground()} endIcon={<CheckCircleOutlineIcon/>}>Set Background as Default</Button>}
      </Box>
    </SubsettingContainer>
  )
}

export default Background