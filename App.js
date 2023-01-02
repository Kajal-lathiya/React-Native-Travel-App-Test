import {LogBox} from 'react-native';
import AppRootstack from './src/navigation/AppRootstack';

import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';

import {PersistGate} from 'redux-persist/integration/react';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <AppRootstack />
    </PersistGate>
  </Provider>
);
export default App;
