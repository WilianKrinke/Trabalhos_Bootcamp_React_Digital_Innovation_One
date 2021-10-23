import Routes from '../routes/Routes';
import {Provider} from 'react-redux'
import { ChakraProvider } from "@chakra-ui/react"
import store from '../store/store'
import './App.css';

function App() {
  return <>
  
    <Provider store={store}>
      <ChakraProvider>
        <Routes/>
      </ChakraProvider>
    </Provider>
    </>
}

export default App;
