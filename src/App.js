/* eslint-disable jsx-a11y/anchor-is-valid */

import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import Booklist from './components/Section/Booklist';
import InputSection from './components/Section/InputSection';
import './style.css'
import { store } from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <body>

                <Header />

                <section>
                    <InputSection />
                    <Booklist />
                </section>

            </body>
        </Provider>
    );
}

export default App;
