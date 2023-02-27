import { Provider } from 'react-redux';
import RootNavigation from './RootNavigation';
import { store } from './store/index';


export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation/>
    </Provider>

  );
}


