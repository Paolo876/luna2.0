import React from 'react'
import { SnackbarProvider } from 'notistack';


const SnackbarRootProvider = ({ children }) => {
  return (
    <SnackbarProvider
    maxSnack={1}
    hideIconVariant={true}
    preventDuplicate={true}
  >
    {children}
  </SnackbarProvider>
  )
}

export default SnackbarRootProvider