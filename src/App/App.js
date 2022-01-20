import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import MainMenu from './_Partials/MainMenu';
import Footer from './_Partials/Footer';
import Summary from './Pages/Summary/Summary';
import Header from './_Partials/Header';
import Breadcrumb from './_Partials/Breadcrumb';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      asideCollapsed: false
    };
  }

  render() {

    let asideClassNames = "shadow";
    if (this.state.asideCollapsed) 
      asideClassNames += " custom-aside";

      return (
        <BrowserRouter>

          <Header />

          <div id="content">

            <aside id="aside" className={asideClassNames}>
              <MainMenu />
            </aside>

            <main id="main">
            
              <Breadcrumb />

              <Routes>

                <Route path="/" element={<Summary />} />
                <Route path="/transactions" />
                <Route path="/reports" />
                <Route path="/calendar" />

              </Routes>

            </main>

            <footer id="footer">
              <Footer />
            </footer>

          </div>
        </BrowserRouter>
      );
  }

}

export default App;
