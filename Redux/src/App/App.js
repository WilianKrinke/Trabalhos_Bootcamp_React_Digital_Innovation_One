import Routes from '../routes/Routes';
import {Provider} from 'react-redux'
import store from '../store/store'
import './App.css';

function App() {
  return <>
  
    <Provider store={store}>
      <Routes/>
    </Provider>
    </>
}

export default App;
