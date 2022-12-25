import * as React from 'react';
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import Autocomplete from '@mui/material/Autocomplete';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import { useEffect, useState  } from "react";
import  { Currency, currencies as availableCcies} from './../common/Currencies';
import { StyledCardHeader } from  './../common/StyledCardHeader';
import { useWeb3Modal } from './../common/Web3ModalConnector'
import { usePersistentContext } from './../hooks/persistentHook';
import { ethers } from "ethers";
import EthereumClient from 'web3modal';

const TradeBooking = () => {

const [connect_Web3Wallet, disconnect_Web3Wallet, provider, library, connectionStatus, network, chainId] = useWeb3Modal('satya');
const [selectedCcy, setSelectedCcy] = useState<String|null> ();
const [account, setAccount] = usePersistentContext('account',  '');

const  currencies: Array<Currency> = availableCcies;

const [balance, setBalance] = useState(0);

const onFromCurrencyChange = (event: React.SyntheticEvent, currency: Currency | null) => {
  if(currency) {
    setSelectedCcy(currency.name);
  }
}

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

useEffect(() => {
  console.log('******** Trad booking PROVIDER ********', provider);
  const fetchBalance = async () => {
    if(provider) { 
    const balance = await library.getBalance(account);
    web3.eth.toWei(balance, 'ether')
    console.log('####### BALANCE ########', balance);
    }
  }

  fetchBalance();
  
}, [selectedCcy]); 

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
                <Grid xs={6}>
                    <Autocomplete
                    id="from-currency-select"
                    autoHighlight
                    options={currencies}
                    getOptionLabel={(option) => option.name}
                    onChange = {(event, value) => onFromCurrencyChange(event, value)}
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
                  />
                </Grid>
                <Grid xs={1}>&nbsp;</Grid>
                <Grid xs={5}>
                  <TextField type="number" label="Quantity"
                    defaultValue="0">
                  </TextField>
                </Grid>
                <Grid xs={3}>
                  <Typography variant="caption" display="block" gutterBottom sx={{
                            my: 0.5
                          }} color="green"><b>Balance:&nbsp;</b>{balance}</Typography>
                </Grid>
                <Grid xs={9}></Grid>
                <Grid xs={12}>&nbsp;</Grid>
                <Grid xs={12}><Divider /></Grid>
                <Grid xs={12}>&nbsp;</Grid>
                <Grid xs={6}>
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
                  />
                </Grid>
                <Grid xs={6}>&nbsp;</Grid>
              </Grid>
              
              </CardContent>
              <CardActions disableSpacing>
                <Grid container justifyContent="right">
                <Grid xs={8}></Grid>
                <Grid xs={4}>
                </Grid>
                <Grid xs={12}><Button variant="contained" endIcon={<SendIcon />}>Request Transfer</Button></Grid>
                </Grid>
              </CardActions>
          </Card>
      </Grid>
      <Grid xs={4}>&nbsp;</Grid>    
    </Grid>
</React.Fragment>)
}
export default TradeBooking;