import * as React from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as UniswapLogo } from './../images/uniswap.svg'
import { ReactComponent as TetherLogo } from './../images/tether-usdt.svg'
import { ReactComponent as UsdLogo } from './../images/usd-coin.svg'
import { ReactComponent as BNBLogo } from './../images/bnb.svg'

export const EthIcon = () => {
    return(
      <React.Fragment>
        <SvgIcon>
        <path d="M11.944 17.97 4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0 4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/>
        </SvgIcon>
      </React.Fragment>
    )
}

export const UniswapIcon = () => {
  return(
    <React.Fragment>
      <SvgIcon>
        <UniswapLogo />
      </SvgIcon>
    </React.Fragment>
  )
}

export const TetherIcon = () => {
  return(
    <React.Fragment>
      <SvgIcon>
        <TetherLogo />
      </SvgIcon>
    </React.Fragment>
  )
}

export const UsdIcon = () => {
  return(
    <React.Fragment>
      <SvgIcon>
        <UsdLogo />
      </SvgIcon>
    </React.Fragment>
  )
}

export const BNBIcon = () => {
  return(
    <React.Fragment>
      <SvgIcon>
        <BNBLogo />
      </SvgIcon>
    </React.Fragment>
  )
}