import React from 'react';
import KegList from './KegList';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import NewKegControl from './NewKegControl';
import { v4 } from 'uuid';
import Admin from './Admin';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {},
      selectedKeg: null
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }


  handleAddingNewKegToList(newKeg) {
    var newKegId = v4()
    var newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });
    this.setState({ masterKegList: newMasterKegList });
  }

  handleChangingSelectedKeg(kegId) {
    this.setState({ selectedKeg: kegId });
  }

  render() {
    return (
      <div>
        <style jsx>{`
          div {
               background-color: #c0edda;
               }


        `}</style>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <KegList kegList={this.state.masterKegList} />} />
          <Route path='/newkeg' render={() => <NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route path='/admin' render={(props) => <Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname}
            onKegSelection={this.state.selectedKeg} />} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}


export default App;