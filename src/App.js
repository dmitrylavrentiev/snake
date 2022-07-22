import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { rootReducer } from './store/reducer'
import Index from './pages/Index'

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        hello
        <Index />
      </div>
    </Provider>
  );
}

export default App;
