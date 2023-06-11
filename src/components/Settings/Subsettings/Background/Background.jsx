import React from 'react'
import SubsettingContainer from '../SubsettingContainer'
import { FormControl, FormControlLabel, Radio, RadioGroup, Box, Typography, Button, ButtonBase, Divider } from '@mui/material'
import useBackgroundRedux from "../../../../hooks/useBackgroundRedux";
import Image from 'mui-image';
import AutorenewIcon from '@mui/icons-material/Autorenew';


const Background = () => {
  const { localBackgrounds, activeLocalBackground, isLocal, isRandom, setIsLocalBackground, selectLocalBackground } = useBackgroundRedux();

  // console.log(localBackgrounds)
  return (
    <SubsettingContainer title="Background">
      <Box>
        <Typography variant="body2" sx={{opacity: .8, mt: 1, fontSize: 13, }}>
          Note: Random background images are generated on reload if no image is set as default.
        </Typography>
      </Box>
      <FormControl>
        <RadioGroup
          value={isLocal}
          onChange={e => setIsLocalBackground(JSON.parse(e.target.value))}
        >
          <FormControlLabel value={true} control={<Radio />} label={<Typography variant='body2' fontSize={14.5}>Select From Saved Backgrounds</Typography>} />
            <Box pb={2} pr={1} pl={3} mt={.5} sx={{position: "relative", opacity: isLocal ? 1 : .5}}>
              {!isLocal && <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", zIndex: 1, background: "rgba(0,0,0,.5)"}}></Box>}
              <Box sx={{display: "flex", overflowX: "scroll", overflowY: "hidden", width: 390, mb: .75}} component="ul">
                {localBackgrounds.map(item => (
                  <ButtonBase 
                    key={item.name}
                    // onClick={() => console.log(item.name)}
                    onClick={() => selectLocalBackground(item)}
                    component="li" 
                    sx={{
                      mx: .1, 
                      mb: .25, 
                      border: 2, 
                      p: .25, 
                      borderColor: activeLocalBackground.name === item.name ? "primary.main" : "transparent"
                    }}
                    
                  >
                    <Image src={item.thumbnailUrl} width={90} duration={0}/>
                  </ButtonBase>
                ))}
              </Box>
              <Box sx={{display: "flex", justifyContent: "right"}}>
                <Button size="small" variant="contained" sx={{fontSize: 10}} disabled={!isRandom} color="secondary">Set as Default</Button>
              </Box>
            </Box>
          <Divider/>
          <FormControlLabel value={false} control={<Radio />} label={<Typography variant='body2' fontSize={14.5}>Select Random Backgrounds from unsplash.com</Typography>} />
            <Box pb={2} pr={1} pl={3} mt={.5} sx={{position: "relative", opacity: 1}}>
            {/* <Box pb={2} pr={1} pl={3} mt={.5} sx={{position: "relative", opacity: !isLocal ? 1 : .5}}> */}
              {/* {isLocal && <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", zIndex: 1, background: "rgba(0,0,0,.5)"}}></Box>} */}
              <Box sx={{display: "flex", gap: .25, overflowX: "scroll", overflowY: "hidden", width: 390, mb: 1}}>
                <Button endIcon={<AutorenewIcon/>}>Generate Background</Button>
              </Box>
              <Box sx={{display: "flex", justifyContent: "right"}}>
                <Button size="small" variant="contained" sx={{fontSize: 10}} disabled={!isRandom} color="secondary">Set as Default</Button>
              </Box>
            </Box>
        </RadioGroup>
      </FormControl>
    </SubsettingContainer>
  )
}

export default Background