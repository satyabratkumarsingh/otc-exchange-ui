import * as React from 'react';
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { UniswapIcon, TetherIcon, UsdIcon, BNBIcon } from './../icons/CurrencyIcons';


interface Currency {
  name: string,
  color: string,
  description: string,
  icon: () => JSX.Element
}

const TradeBooking = () => { 
  
  const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
    textAlign: 'left',
    boxShadow: "5px 10px green",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  }));

  const currencies: Array<Currency> = [
    {
      name: 'UNI',
      color: '#008672',
      description: 'Uniswap',
      icon: UniswapIcon
    },
    {
      name: 'USDT',
      color: '#b60205',
      description: 'Tether USD (USDT)',
      icon: TetherIcon
    },
    {
      name: 'USDC',
      color: '#d93f0b',
      description: 'USD Coin (USDC)',
      icon: UsdIcon
    },
    {
      name: 'BNB',
      color: '#0e8a16',
      description: 'BNB (BNB)',
      icon: BNBIcon
    }
    
  ];

function getCurrencyIcon(ccyCode: string): () => JSX.Element  {
  if(currencies !== null) { 
      let currency = currencies.find(x=> x.name === ccyCode);
      if(currency == null) { 
        return ( ()=> <React.Fragment/>);
      } else if(currency.icon == null) { 
        return (()=> <React.Fragment/>);
      }
      else {
      return currency.icon;
      }
  }
  return (()=> <React.Fragment/>);
}
return (
<React.Fragment>
    <Grid container justifyContent="center">
      <Grid xs={12}>
        &nbsp;
      </Grid>
      <Grid xs={4}>&nbsp;</Grid>
      <Grid xs={4}>
        <Card>
              <StyledCardHeader
                title="Swap">
                  
                </StyledCardHeader>
              <CardContent>
              <Grid container justifyContent="center">
                <Grid xs={12}>&nbsp;</Grid>
                <Grid xs={8}>
                    <Autocomplete
                    id="from-currency-select"
                    autoHighlight
                    options={currencies}
                    getOptionLabel={(option) => option.name}
                    renderOption={(props, option, { selected }) => (
                      <li {...props}>
                        <Box
                          component={option.icon}
                          sx={{ width: 17, height: 17, mr: '5px', ml: '-2px' }}
                        />
                        <Box
                          sx={{
                            flexGrow: 1
                          }}
                        >
                          {option.name}
                          <br />
                          <Typography variant="caption">{option.description}</Typography>
                        </Box>
                      </li>
                    )}
                    renderInput={(params) => (
                      <div style={{ position: "relative" }}>
                    {params.inputProps.value && (
                      <span
                        style={{
                          position: "absolute",
                          transform: "translateY(50%)",
                          marginLeft: "5px"
                        }}
                      >
                         <Box
                          component={getCurrencyIcon(params.inputProps.value as string)}
                          sx={{
                            position: "absolute",
                            transform: "translateY(50%)",
                            ml: 5,
                            mr: 5
                          }}>
                            &nbsp;
                          </Box>
                      </span>
                    )}
                    <TextField
                      {...params}
                      label="From Coin"
                      variant="outlined"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                        style: { paddingLeft: "20px" } // disable autocomplete and autofill
                      }}
                    />
                  </div>
                    )}
                  sx={{ width: '250px' }}
                  />
                </Grid>
                <Grid xs={4}>Balance: 300 AAVE</Grid>
                <Grid xs={12}>&nbsp;</Grid>
                <Grid xs={8}>
                <Autocomplete
                    id="from-currency-select"
                    autoHighlight
                    options={currencies}
                    getOptionLabel={(option) => option.name}
                    renderOption={(props, option, { selected }) => (
                      <li {...props}>
                        <Box
                          component={option.icon}
                          sx={{ width: 17, height: 17, mr: '5px', ml: '-2px' }}
                        />
                        <Box
                          sx={{
                            flexGrow: 1
                          }}
                        >
                          {option.name}
                          <br />
                          <Typography variant="caption">{option.description}</Typography>
                        </Box>
                      </li>
                    )}
                    renderInput={(params) => (
                      <div style={{ position: "relative" }}>
                    {params.inputProps.value && (
                      <span
                        style={{
                          position: "absolute",
                          transform: "translateY(50%)",
                          marginLeft: "5px"
                        }}
                      >
                         <Box
                          component={getCurrencyIcon(params.inputProps.value as string)}
                          sx={{
                            position: "absolute",
                            transform: "translateY(50%)",
                            ml: 5,
                            mr: 5
                          }}>
                            &nbsp;
                          </Box>
                      </span>
                    )}
                    <TextField
                      {...params}
                      label="To Coin"
                      variant="outlined"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                        style: { paddingLeft: "20px" } // disable autocomplete and autofill
                      }}
                    />
                  </div>
                    )}
                  sx={{ width: '250px' }}
                  />
                </Grid>
                <Grid xs={4}>Balance: 0 LINK</Grid>
              </Grid>
              </CardContent>
              <CardActions disableSpacing>
                <Grid container justifyContent="right">
                <Grid xs={8}></Grid>
                <Grid xs={4}>
                </Grid>
                <Grid xs={12}><Button variant="contained" endIcon={<SendIcon />}></Button></Grid>
                </Grid>
              </CardActions>
          </Card> m,<div className=" " />
      </Grid>
      <Grid xs={4}>&nbsp;</Grid>    
    </Grid>
</React.Fragment>)
}
export default TradeBooking;