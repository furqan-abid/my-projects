import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import {configureStore} from '../src/redux/configureStore'
import Main from "./components/Main";

const store=configureStore()
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Main/>
      </Router>
    </Provider>
  );
}

export default App;
