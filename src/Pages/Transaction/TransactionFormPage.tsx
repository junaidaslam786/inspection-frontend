import React from 'react'
import TransactionForm from '../../Components/Transaction/TransactionForm';
import { Box } from '@mui/material';

const TransactionFormPage:React.FC = () => {
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
          <TransactionForm />
        </Box>
      );
}

export default TransactionFormPage