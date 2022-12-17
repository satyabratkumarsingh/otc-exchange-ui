import React from 'react';
import './App.css';
import {
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Box from "@mui/material/Box";
import  Header from './components/header/Header'
import  Footer from './components/footer/Footer'
import {Routes, Route} from  "react-router";
import TradeBooking from './components/TradeBookingComponent';
import ContractConnect from './components/ContractConnectComponent';
import useSettings from './themes/useSettings';
import { createOTCTheme} from './themes/theme'
import { QueryClient, useQuery, QueryClientProvider } from '@tanstack/react-query';
import { usePersistentContext } from './hooks/persistentHook';


const ThemedApp = () => { 

  const [theme, setTheme] = usePersistentContext('application_theme',  'dark');

  console.log('@@@@@THEMED APP', theme);

  const otcTheme = createOTCTheme(theme);

  return ( <ThemeProvider theme={otcTheme}>
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
          <Route path="/" element={<TradeBooking/>}></Route>
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
  return (
    <QueryClientProvider client={queryClient}>
      <ThemedApp></ThemedApp>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
