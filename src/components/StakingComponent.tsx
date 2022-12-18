import * as React from 'react';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import { StyledCardHeader } from  './../common/StyledCardHeader';

const Staking = () => { 
  

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
                title="Staking">
                  
                </StyledCardHeader>
              <CardContent>
                  <Typography>Staking Component</Typography>
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
export default Staking;