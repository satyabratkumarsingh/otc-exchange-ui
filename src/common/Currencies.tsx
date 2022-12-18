import { UniswapIcon, TetherIcon, UsdIcon, BNBIcon, AaveIcon, ChainLinkIcon, EthIcon,
    MakerIcon, ShibaInuIcon, MaticIcon, DaiIcon, LeoIcon, WbtcIcon, CronoIcon, ApeCoinIcon } from './../icons/CurrencyIcons';

export  interface Currency {
    name: string,
    color: string,
    description: string,
    icon: () => JSX.Element
  }
  
export const currencies: Array<Currency> = [
  {
    name: 'ETH',
    color: '#008672',
    description: 'Ethereum',
    icon: EthIcon
  },
    {
      name: 'UNI',
      color: '#008672',
      description: 'Uniswap',
      icon: UniswapIcon
    },
    {
      name: 'USDT',
      color: '#b60205',
      description: 'Tether USD',
      icon: TetherIcon
    },
    {
      name: 'USDC',
      color: '#d93f0b',
      description: 'USD Coin',
      icon: UsdIcon
    },
    {
      name: 'BNB',
      color: '#0e8a16',
      description: 'Binance USD',
      icon: BNBIcon
    },
    {
      name: 'AAVE',
      color: '#0e8a16',
      description: 'Aave',
      icon: AaveIcon
    },
    {
      name: 'LINK',
      color: '#0e8a16',
      description: 'ChainLink',
      icon: ChainLinkIcon
    },
    {
      name: 'MKR',
      color: '#0e8a16',
      description: 'Maker',
      icon: MakerIcon
    },
    {
      name: 'SHIB',
      color: '#0e8a16',
      description: 'Shiba Inu',
      icon: ShibaInuIcon
    },
    {
      name: 'MATIC',
      color: '#0e8a16',
      description: 'Polygon',
      icon: MaticIcon
    },
    {
      name: 'DAI',
      color: '#0e8a16',
      description: 'Multi-Collateral Dai',
      icon: DaiIcon
    },
    {
      name: 'LEO',
      color: '#0e8a16',
      description: 'UNUS SED LEO',
      icon: LeoIcon
    },
    {
      name: 'WBTC',
      color: '#0e8a16',
      description: 'Wrapped Bitcoin',
      icon: WbtcIcon
    },
    {
      name: 'CRO',
      color: '#0e8a16',
      description: 'Cronos',
      icon: CronoIcon
    },
    {
      name: 'APE',
      color: '#0e8a16',
      description: 'Ape Coin',
      icon: ApeCoinIcon
    }
    
  ];