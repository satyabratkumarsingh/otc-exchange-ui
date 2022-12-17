import CardHeader from '@mui/material/CardHeader';
import * as React from 'react';
import { styled } from '@mui/material/styles';


export const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
    textAlign: 'left',
    boxShadow: "5px 10px green",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  }));
