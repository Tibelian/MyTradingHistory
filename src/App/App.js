import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import MainMenu from './_Partials/MainMenu';
import Footer from './_Partials/Footer';
import Header from './_Partials/Header';
import Breadcrumb from './_Partials/Breadcrumb';

import SummaryPage from './Pages/Summary/SummaryPage';
import TransactionsPage from './Pages/Transactions/TransactionsPage';
import ReportsPage from './Pages/Reports/ReportsPage';
import CalendarPage from './Pages/Calendar/CalendarPage';
import ReportsDetailPage from './Pages/Reports/DetailPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      asideCollapsed: false,
      currentPage: 'Not Found'
    };
  }

  handleCurrentPage = (newPage) => {
    this.setState({currentPage: newPage});
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
            
              <Breadcrumb currentPage={this.state.currentPage} />

              <Routes>

                <Route path="/" element={<SummaryPage handleCurrentPage={this.handleCurrentPage}  />} />
                <Route path="/transactions" element={<TransactionsPage handleCurrentPage={this.handleCurrentPage} />} />
                <Route path="/reports" element={<ReportsPage handleCurrentPage={this.handleCurrentPage} />} />
                <Route path="/reports/:id" element={<ReportsDetailPage handleCurrentPage={this.handleCurrentPage} />} />
                <Route path="/calendar" element={<CalendarPage handleCurrentPage={this.handleCurrentPage} />} />

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
