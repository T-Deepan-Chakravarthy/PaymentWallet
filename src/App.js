
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {Provider} from 'react-redux';
import store from './store/Store'
import AppRouter from './routers/AppRouters'

function App() {
  return (
    <div>
      <Provider store={store()}>
        <AppRouter/>
      </Provider>
    </div>
    
  );
}

export default App;
