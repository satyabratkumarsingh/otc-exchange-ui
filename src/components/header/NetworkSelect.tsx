import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import { SvgIcon } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import EthIcon from './../../images/ethereum.svg';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MuiMenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    'Ethereum',
  ];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
}


const NetworkSelectButton = () => { 


    const ChipInputLabel = styled(InputLabel)(({ theme }) => ({
        '&.MuiInputLabel-root': {
            marginRight: theme.spacing(1),
        },
     }));

    const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
    '& .MuiSvgIcon-root': {
        marginRight: theme.spacing(1),
    },
    }));

  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

    return (
        <React.Fragment>
        <FormControl sx={{ m: 1, width: 300 }}>
            <ChipInputLabel id="demo-multiple-checkbox-label">
                <Chip>
                Network
                </Chip>
            </ChipInputLabel>
            <Select
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Network" />}
            renderValue={(selected) => selected.join(', ')}
            >
            {names.map((name) => (
                <MenuItem key={name} value={name}>
                <SvgIcon>
                    <path d="M11.944 17.97 4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0 4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/>
                </SvgIcon>
                {name}
                </MenuItem>
            ))}
            </Select>
      </FormControl>
        </React.Fragment>
    )
}
export default NetworkSelectButton;