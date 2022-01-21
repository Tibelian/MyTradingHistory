import { faFileExport, faFileImport, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ExportModal from './_ExportModal';
import ImportModal from './_ImportModal';
import NewEntryModal from './_NewEntryModal';

class TransactionsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            showImportCSV: false,
            showExportCSV: false,
            showNewEntry: false,
            transactions: [
                {
                    date: '02/07/2021 16:00',
                    product: 'ALIBABA GROUP HOLDING',
                    quantity: -4,
                    price: '217 USD',
                    value: '868 USD',
                    commission: -0.51,
                    total: 730.95
                },
                {
                    date: '23/06/2021 19:23',
                    product: 'ALIBABA GROUP HOLDING',
                    quantity: 4,
                    price: '214.46 USD',
                    value: '-857.84 USD',
                    commission: -0.51,
                    total: -719.45
                },
                {
                    date: '25/06/2021 21:32',
                    product: 'IT TECH PACKAGING INC',
                    quantity: 500,
                    price: '0.4762 USD',
                    value: '-238.1 USD',
                    commission: -2.18,
                    total: -201.68
                },
                {
                    date: '25/06/2021 21:31',
                    product: 'IT TECH PACKAGING INC',
                    quantity: 500,
                    price: '0.4762 USD',
                    value: '-238.1 USD',
                    commission: -2.18,
                    total: -201.68
                }
            ]
        };
    }

    componentDidMount() {
        this.props.handleCurrentPage('Transactions');
    }

    setShowImportCSV = (value) => {
        this.setState({showImportCSV: value});
    }

    setShowNewEntry = (value) => {
        this.setState({showNewEntry: value});
    }

    setShowExportCSV = (value) => {
        this.setState({showExportCSV: value});
    }

    render() {

        return (
            <div>
                <section className="row mb-4">
                    <div className="col-12 d-flex">
                        <div className="bg-background shadow-sm p-3">
                            <button className="btn btn-primary" onClick={()=>{this.setShowNewEntry(true)}}>
                                <FontAwesomeIcon icon={faPlusCircle}/> New entry
                            </button>
                            <button className="btn btn-primary mx-3" onClick={()=>{this.setShowImportCSV(true)}}>
                                <FontAwesomeIcon icon={faFileImport}/> Import data
                            </button>
                            <button className="btn btn-primary" onClick={()=>{this.setShowExportCSV(true)}}>
                                <FontAwesomeIcon icon={faFileExport}/> Export data
                            </button>
                        </div>
                    </div>
                </section>
                <section className="row mb-4">
                    <div className="col-12">
                        <div className="bg-background shadow-sm p-3">
                            <div className="table-responsive">
                                <table className="table table-sm table-hover table-stripped mb-0">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Value</th>
                                            <th>Commission</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.transactions.map((tx, index) => (
                                            <tr key={index}>
                                                <td>{tx.date}</td>
                                                <td>{tx.product}</td>
                                                <td>{tx.quantity}</td>
                                                <td>{tx.price}</td>
                                                <td>{tx.value}</td>
                                                <td>{tx.commission}</td>
                                                <td>{tx.total}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                <ImportModal show={this.state.showImportCSV} setShow={this.setShowImportCSV} />
                <NewEntryModal show={this.state.showNewEntry} setShow={this.setShowNewEntry} />
                <ExportModal show={this.state.showExportCSV} setShow={this.setShowExportCSV} />
            </div>
        );
    }

}

export default TransactionsPage;