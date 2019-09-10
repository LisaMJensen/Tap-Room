import React from 'react';
import KegList from './KegList';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import NewKegControl from './NewKegControl';

function App() {
    return (
        <div>
            <style jsx>{`
          div {
               background-color: #c0edda;
               }


        `}</style>
            <Header />
            <Switch>
                <Route exact path='/' component={KegList} />
                <Route path='/newkeg' component={NewKegControl} />
                <Route component={Error404} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;