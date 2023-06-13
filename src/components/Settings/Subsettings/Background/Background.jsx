import SubsettingContainer from '../SubsettingContainer'
import { FormControl, FormControlLabel, Radio, RadioGroup, Box, Typography, Button, ButtonBase, Divider, Tooltip } from '@mui/material'
import useBackgroundRedux from "../../../../hooks/useBackgroundRedux";
import Image from 'mui-image';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const Background = () => {
  const { localBackgrounds, isLocal, isRandom, setIsLocalBackground, selectLocalBackground, fetchBackground, isLoading, setBackground, src, removeBackground, activeLocalBackground, generateLocalBackground } = useBackgroundRedux();

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
            <Box sx={{display: "flex", overflowX: "scroll", overflowY: "hidden", width: 440, mb: 1}} component="ul">
              {localBackgrounds.map(item => (
                <ButtonBase 
                  key={item.name}
                  onClick={() => selectLocalBackground(item)}
                  component="li" 
                  sx={{
                    mx: .1, 
                    mb: .25, 
                    border: 2, 
                    p: .25, 
                    borderColor: src === item.src ? "primary.main" : "transparent",
                    position: "relative"
                  }}
                  
                >
                  <Image src={item.thumbnailUrl} width={96} duration={0}/>
                </ButtonBase>
              ))}
            </Box>
          </Box>
          <Divider/>
          <FormControlLabel value={false} control={<Radio />} label={<Typography variant='body2' fontSize={14.5}>Select Random Backgrounds from unsplash.com</Typography>} />
          <Box pr={1} pl={3} mt={.5} sx={{position: "relative", opacity: !isLocal ? 1 : .5}}>
            {isLocal && <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", zIndex: 1, background: "rgba(0,0,0,.5)"}}></Box>}
            <Box sx={{display: "flex", width: 390, my: 1.5, justifyContent: "left"}}>
              <Button endIcon={<AutorenewIcon/>} size="medium" variant="outlined" onClick={() => fetchBackground()} disabled={isLoading}>Generate Random Background</Button>
            </Box>
          </Box>
        </RadioGroup>
      </FormControl>
      <Box sx={{display: "flex", justifyContent: "right", mt: "auto"}}>
        {!isRandom && <Tooltip title="Removing background will generate a random image." arrow enterDelay={400}>
          <Button variant="contained" sx={{fontSize: 12}} disabled={isRandom} color="error" onClick={isLocal ? generateLocalBackground : fetchBackground} endIcon={<HighlightOffIcon/>}>
            Remove Default Background
          </Button>
        </Tooltip>}
        {isRandom && <Tooltip title="Setting background as default will not generate a random image on reload." arrow enterDelay={400}>
          <Button variant="contained" sx={{fontSize: 12}} disabled={!isRandom} color="secondary" onClick={() => setBackground()} endIcon={<CheckCircleOutlineIcon/>}>
            Set Background as Default
          </Button>
        </Tooltip>}
      </Box>
    </SubsettingContainer>
  )
}

export default Background