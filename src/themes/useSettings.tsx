import { useContext } from 'react'; 
import OTCThemeContext   from './OTCThemeProvider';

const useSettings = () => useContext(OTCThemeContext);

export default useSettings;
