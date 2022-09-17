import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ChakraProvider} from '@chakra-ui/react'
import theme from "./theme";
import { RatesProvider } from "./context/RatesProvider";
import Privacy from "./pages/Privacy";

function App() {


  return (
    <ChakraProvider theme={theme}>
      <RatesProvider>
    <Router>
      <Routes>
        <Route 
        path='/'
        exact
        element={<Landing />}
        />
        <Route 
        path='/privacy-policy'
        element={<Privacy />}
        />
      </Routes>
    </Router>
    </RatesProvider>
    </ChakraProvider>
  );
}

export default App;
