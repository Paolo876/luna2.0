import React from 'react'
import SubsettingContainer from '../SubsettingContainer'
import { FormControl, FormControlLabel, Radio, RadioGroup, Box, Typography, Stack, Button, ButtonBase } from '@mui/material'
import useBackgroundRedux from "../../../../hooks/useBackgroundRedux";
import Image from 'mui-image';


const Background = () => {
  const { localBackgrounds } = useBackgroundRedux();

  console.log(localBackgrounds)
  return (
    <SubsettingContainer title="Background">
      <Box>
        <Typography variant="body2" sx={{opacity: .8, mt: 1, fontSize: 13, }}>
          Note: Random background images are generated on reload if no image is set as default.
        </Typography>
      </Box>
      <FormControl>
        <RadioGroup
          // value={value}
          // onChange={handleChange}
        >
          <FormControlLabel value="local" control={<Radio />} label={<Typography variant='body2' fontSize={15}>Select From Saved Backgrounds</Typography>} />
            <Box mb={3} mr={1} ml={.5}>
              <Box sx={{display: "flex", gap: .25, overflowX: "scroll", overflowY: "hidden", width: 400, mb: 1,}} component="ul">
                {localBackgrounds.map(item => <ButtonBase component="li" sx={{mx: .75, mb: 1, mt: 2, }}>
                  <Image src={item.thumbnailUrl} width={110}/>
                </ButtonBase>)}
              </Box>
              <Box sx={{display: "flex", justifyContent: "right"}}>
                <Button size="small" variant="contained" sx={{fontSize: 10}}>Set as Default</Button>
              </Box>
            </Box>

          <FormControlLabel value="fetch" control={<Radio />} label={<Typography variant='body2' fontSize={15}>Select Random Backgrounds from unsplash.com</Typography>} />

        </RadioGroup>
      </FormControl>
    </SubsettingContainer>
  )
}

export default Background