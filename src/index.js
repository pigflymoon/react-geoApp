import React from 'react';
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router5';
import ReactDOM from 'react-dom';
import createRouter from './create-router'
import configureStore from './store';

import Navigation from './containers/Navigation';
import Main from './containers/Main';

import layoutCss from './components/Layout/Layout.css';

function App(props) {
    return (

        <div className={layoutCss.layout}>
            <a href="#menu" className={layoutCss.menuLink}>
            </a>
            <Navigation />

            <main className={layoutCss.main}>
                <Main />
            </main>
        </div>
    );
}

const router = createRouter();

router.start((err, state) => {
    const store = configureStore(router, {router: {route: state}});

    const wrappedApp = (
        <Provider store={ store }>
            <RouterProvider router={ router }>
                <App />
            </RouterProvider>
        </Provider>
    );

    ReactDOM.render(wrappedApp, document.getElementById('root'));
});
