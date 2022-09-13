import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ChakraProvider} from '@chakra-ui/react'
import theme from "./theme";

function App() {


  return (
    <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route 
        path='/'
        exact
        element={<Landing />}
        />
      </Routes>
    </Router>
    </ChakraProvider>
  );
}

export default App;
