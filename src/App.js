import CreateAccount from './components/pages/wallet/CreateAccount'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {Provider} from 'react-redux';
import store from './store/Store'

function App() {
  return (
    <div>
      <Provider store={store()}>
        <CreateAccount/>
      </Provider>
    </div>
    
  );
}

export default App;
