import './App.css';
import Maincomponent from './components/Maincomponent';
import {BrowserRouter} from 'react-router-dom'
import {configureStore } from './redux/configurestore';
import { Provider } from 'react-redux';

const store=configureStore();

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
        <Maincomponent/>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
