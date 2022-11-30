import * as React from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as EthLogo } from './../images/ethereum-classic.svg'
import { ReactComponent as GoerliLogo } from './../images/goerli.svg'
import { ReactComponent as OptimismLogo } from './../images/optimism.svg'
import { ReactComponent as SepoliaLogo } from './../images/sepolia.svg'
import Badge, { badgeClasses } from "@mui/material/Badge";

export const EthereumIcon = () => {
    return(
      <React.Fragment>
        <SvgIcon>
            <EthLogo />
        </SvgIcon>
      </React.Fragment>
    )
}

export const GoerliIcon = () => {
    return(
      <React.Fragment>
         <SvgIcon>
             <GoerliLogo />
        </SvgIcon>
      </React.Fragment>
    )
}

export const OptimismIcon = () => {
    return(
      <React.Fragment>
         <SvgIcon>
             <OptimismLogo />
        </SvgIcon>
      </React.Fragment>
    )
}

export const SepoliaIcon = () => {
    return(
      <React.Fragment>
         <SvgIcon>
             <SepoliaLogo />
        </SvgIcon>
      </React.Fragment>
    )
}