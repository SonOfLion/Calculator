import React from 'react';
import { Provider } from 'react-redux';
import MainBord from './components/MainBord';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <MainBord />
        </Provider>
    )
}

export default App;