/* eslint-disable jsx-a11y/anchor-is-valid */


import Header from './components/Header/Header';
import Booklist from './components/Section/Booklist';
import InputSection from './components/Section/InputSection';
import './style.css'

function App() {
    return (
        <body>

            <Header />

            <section>
                <InputSection />
                <Booklist />
            </section>

        </body>
    );
}

export default App;
