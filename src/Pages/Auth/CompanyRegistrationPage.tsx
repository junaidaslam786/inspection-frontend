import { Box } from '@mui/material'
import React from 'react'
import CompanyRegistration from '../../Components/Auth/CompanyRegistration'

const CompanyRegistrationPage:React.FC = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CompanyRegistration />
    </Box>
  )
}

export default CompanyRegistrationPage