import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import { darkTheme } from "./themes/DarkTheme";
import { lightTheme } from "./themes/LightTheme";
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

import Box from "@mui/material/Box";
import  Header from './components/header/Header'
import  Footer from './components/footer/Footer'
import {Routes, Route} from  "react-router";
import TradeBooking from './components/TradeBookingComponent';
import ContractConnect from './components/ContractConnectComponent';
import useSettings from './themes/useSettings';
import { createOTCTheme} from './themes/theme'
import { QueryClientProvider, QueryClient, useQuery } from '@tanstack/react-query';
import { useTheme } from './hooks/useTheme';


const ThemedApp = () => { 

  const { data, isLoading} = useQuery(['themeSelected'], async () =>  String(localStorage.getItem("darkState")), {
    refetchOnMount: true
  });

  if(isLoading) return <p>Loading....</p>

  //const {isLoading, isError, data} = useTheme();
  const theme = createOTCTheme(data);

  console.log('========= THEME RETRIEVED   SATYA===========' , theme);

  console.log("@@@@@ THEME RETRIEVED" , theme);

  return ( <ThemeProvider theme={theme}>
    <CssBaseline/>
      <div className="App">
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
      
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Routes>
          <Route path="/"></Route>
          <Route path="Trade" element={<TradeBooking/>}></Route>
          <Route path="Stake" element={<ContractConnect/>}></Route>
        </Routes>
        </Box>
        <Footer />
      </Box>
      </div>
    </ThemeProvider>)

}
function App() {
  const { settings } = useSettings();
  const queryClient = new QueryClient();
  const persister = createSyncStoragePersister({
    storage: window.localStorage,
  })

  return (
    <PersistQueryClientProvider client={queryClient} contextSharing={true} persistOptions={{ persister }}>
      <ThemedApp></ThemedApp>
    </PersistQueryClientProvider>
  );
}

export default App;
