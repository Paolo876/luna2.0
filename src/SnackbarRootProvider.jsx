import React from 'react'
import { SnackbarProvider, MaterialDesignContent  } from 'notistack';
import { styled } from '@mui/material';

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  fontFamily: "Questrial",
  letterSpacing: .75,
  fontSize: 16,
  lineHeight: 1.2,
  opacity: .9
}));


const SnackbarRootProvider = ({ children }) => {
  return (
    <SnackbarProvider
    maxSnack={1}
    autoHideDuration={3000}
    preventDuplicate={true}
    Components={{
      success: StyledMaterialDesignContent,
      error: StyledMaterialDesignContent,
    }}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
  >
    {children}
  </SnackbarProvider>
  )
}

export default SnackbarRootProvider