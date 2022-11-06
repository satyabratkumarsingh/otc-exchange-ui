import React, { useState, createContext } from 'react';
import { ThemeProvider }  from '@mui/material/styles';
import { lightTheme } from "./LightTheme";
import { darkTheme } from "./DarkTheme";

interface Props {
  settings: any,
  children: React.ReactNode;
}


const getThemeByName = (theme: string) => {
  return themeMap[theme];
}

const themeMap: { [key: string]: any } = {
  lightTheme,
  darkTheme
};

const defaultSettings = {
  theme: 'dark'
};

const OTCThemeContext = createContext({
  settings: defaultSettings
});



export const OTCThemeProvider: React.FC<Props> = ({ settings, children }) => {
  // State to hold the selected theme name
  const [currentSettings, setCurrentSettings] = useState(settings || defaultSettings);

  return (
        <OTCThemeContext.Provider value ={{
          settings: currentSettings,
        }}>
            {children}
        </OTCThemeContext.Provider>
    );
}

export const OTCSettingsConsumer = OTCThemeContext.Consumer;

export  default OTCThemeContext