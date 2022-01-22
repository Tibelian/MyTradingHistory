import { faBalanceScale, faCheck, faClock, faFileInvoiceDollar, faHandHoldingUsd, faLock, faPiggyBank, faTasks, faThumbsDown, faThumbsUp, faTimes, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Chart from 'chart.js/auto';

class SummaryPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalOperations: 232,
            successfulOperations: 130,
            failedOperations: 102,
            averageProfit: '50%',
            averageHoldTime: '2 days',
            totalDeposit: 3000,
            withdrawal: 1600,
            commissions: 300,
            bestOperation: 423,
            worstOperation: -643,
            closedTrades: 129,
            openTrades: 3
        };
    }

    componentDidMount() {
        this.props.handleCurrentPage('Summary');
        this.loadCharts();
    }

    loadCharts = () => {
        const data = {
            labels: [ 'January', 'February', 'March', 'April', 'May', 'June' ],
            datasets: [{
                label: '2021',
                backgroundColor: '#3498DB',
                borderColor: '#3498DB',
                data: [0, 10, 5, 2, 20, 30],
            },{
                label: '2022',
                backgroundColor: '#ee98DB',
                borderColor: '#ee98DB',
                data: [10, 16, 8, 33, 23, 26],
            }]
        };
        new Chart(
            document.getElementById('chartAccount'),
            { 
                type: 'line', data: data, 
                options: {
                    scales: {
                        y: {
                            ticks: {
                                callback: function(val, index) {
                                    console.log(val);
                                    return this.getLabelForValue(val) + '%';
                                }
                            }
                        }
                    }
                }
            }
        );
        new Chart(
            document.getElementById('chartPotential'),
            {
                type: 'doughnut',
                data: {datasets: [{
                    backgroundColor: ['#3498DB', '#ff6666'], 
                    data: [80, 20]}
                ]}, 
                options: { circumference: 180, rotation: 270, cutout: '90%' }
            }
        );
        new Chart(
            document.getElementById('chartLong'),
            { 
                type: 'doughnut', 
                data: {datasets: [{ 
                    backgroundColor: ['#3498DB', '#ff6666'],
                    borderColor: ['#3498DB', '#ff6666'],
                    data: [ 55, 45 ] 
                }]}, 
                options: { cutout: '90%' } 
            }
        );
        new Chart(
            document.getElementById('chartShort'),
            { 
                type: 'doughnut', 
                data: {datasets: [{ 
                    backgroundColor: ['#3498DB', '#ff6666'],
                    borderColor: ['#3498DB', '#ff6666'],
                    data: [ 68, 32 ] 
                }]},
                options: { cutout: '90%'  } 
            }
        );
        new Chart(
            document.getElementById('chartTest'),
            { 
                type: 'doughnut', 
                data: {datasets: [{ 
                    backgroundColor: ['#3498DB', '#ff6666'],
                    borderColor: ['#3498DB', '#ff6666'],
                    data: [ 30, 70 ] 
                }]},
                options: { cutout: '90%'  } 
            }
        );
        new Chart(
            document.getElementById('chartInstruments'),
            { 
                type: 'pie', 
                data: {
                    labels: [ 'Shares', 'Commodities', 'Indices', 'Bonds', 'Currencies', 'Crypto' ],
                    datasets: [{ 
                    backgroundColor: ['#3498DB', '#ff6666', '#f399cc', '#58babf', '#FFE39F', '#5cc891'],
                    borderColor: ['#3498DB', '#ff6666', '#f399cc', '#58babf', '#FFE39F', '#5cc891'],
                    data: [ 30, 70, 12, 32, 32, 1 ]
                }]},
                options: {  } 
            }
        );
    }

    render() {
        return (
            <div>
                
                <section className="row mb-4">
                    <div className="col-12 col-xl-5 mb-4 mb-xl-0">
                        <div className="bg-background shadow-sm p-3 h-100">
                            <h3 className="h6">Account Performance</h3>
                            <div className="mx-auto" style={{position:'relative'}}>
                                <canvas id="chartAccount"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 col-lg-6 mb-4 mb-lg-0">
                        <div className="bg-background shadow-sm p-3 h-100">
                            <h3 className="mb-0 h6">Instruments</h3>
                            <div className="mx-auto d-flex align-items-center" style={{position:'relative',width:330}}>
                                <canvas id="chartInstruments"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-lg-6">
                        <div className="bg-background shadow-sm p-3 d-flex flex-column h-100">
                            <div className="col-12 d-flex align-items-center px-4">
                                <h3 className="mb-0 h6">Potential Performance</h3>
                                <div className="mx-auto d-flex align-items-center" style={{position:'relative',height:170,width:220}}>
                                    <canvas id="chartPotential"></canvas>
                                    <span className="position-absolute top-50 start-50 translate-middle mt-4 h2">80%</span>
                                </div>
                            </div>
                            <hr className="mt-2 mb-4"/>
                            <div className="d-flex mb-3">
                                <div className="col-4 text-center">
                                    <h4 className="h6">Long</h4>
                                    <div className="mx-auto" style={{position:'relative',height:95,width:95}}>
                                        <canvas id="chartLong"></canvas>
                                        <span className="position-absolute top-50 start-50 translate-middle mt-1">55%</span>
                                    </div>
                                </div>
                                <div className="col-4 text-center">
                                    <h4 className="h6">Short</h4>
                                    <div className="mx-auto" style={{position:'relative',height:95,width:95}}>
                                        <canvas id="chartShort"></canvas>
                                        <span className="position-absolute top-50 start-50 translate-middle mt-1">68%</span>
                                    </div>
                                </div>
                                <div className="col-4 text-center">
                                    <h4 className="h6">Test</h4>
                                    <div className="mx-auto" style={{position:'relative',height:95,width:95}}>
                                        <canvas id="chartTest"></canvas>
                                        <span className="position-absolute top-50 start-50 translate-middle mt-1">30%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="row mb-4">
                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2 mb-4">
                        <div className="bg-background shadow-sm d-flex align-items-center p-3 position-relative">
                            <FontAwesomeIcon icon={faTasks} className="fa-3x color-transparent me-3 position-absolute end-0" />
                            <div className="small">
                                <h3 className="mb-0">{this.state.totalOperations}</h3>
                                <span className="color-primary">Total Operations</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2 mb-4">
                        <div className="bg-background shadow-sm d-flex align-items-center p-3 position-relative">
                            <FontAwesomeIcon icon={faCheck} className="fa-3x color-transparent me-3 position-absolute end-0" />
                            <div className="small">
                                <h3 className="mb-0">{this.state.successfulOperations}</h3>
                                <span className="color-primary">Successful Operations</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2 mb-4">
                        <div className="bg-background shadow-sm d-flex align-items-center p-3 position-relative">
                            <FontAwesomeIcon icon={faTimes} className="fa-3x color-transparent me-3 position-absolute end-0" />
                            <div className="small">
                                <h3 className="mb-0">{this.state.failedOperations}</h3>
                                <span className="color-primary">Failed Operations</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2 mb-4">
                        <div className="bg-background shadow-sm d-flex align-items-center p-3 position-relative">
                            <FontAwesomeIcon icon={faBalanceScale} className="fa-3x color-transparent me-3 position-absolute end-0" />
                            <div className="small">
                                <h3 className="mb-0">{this.state.averageProfit}</h3>
                                <span className="color-primary">Average Profit</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2 mb-4">
                        <div className="bg-background shadow-sm d-flex align-items-center p-3 position-relative">
                            <FontAwesomeIcon icon={faPiggyBank} className="fa-3x color-transparent me-3 position-absolute end-0" />
                            <div className="small">
                                <h3 className="mb-0">{this.state.totalDeposit} <small><sup>USD</sup></small></h3>
                                <span className="color-primary">Total Deposit</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2 mb-4">
                        <div className="bg-background shadow-sm d-flex align-items-center p-3 position-relative">
                            <FontAwesomeIcon icon={faHandHoldingUsd} className="fa-3x color-transparent me-3 position-absolute end-0" />
                            <div className="small">
                                <h3 className="mb-0">{this.state.withdrawal} <small><sup>USD</sup></small></h3>
                                <span className="color-primary">Withdrawal</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2 mb-4">
                        <div className="bg-background shadow-sm d-flex align-items-center p-3 position-relative">
                            <FontAwesomeIcon icon={faFileInvoiceDollar} className="fa-3x color-transparent me-3 position-absolute end-0" />
                            <div className="small">
                                <h3 className="mb-0">{this.state.commissions} <small><sup>USD</sup></small></h3>
                                <span className="color-primary">Commissions</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2 mb-4">
                        <div className="bg-background shadow-sm d-flex align-items-center p-3 position-relative">
                            <FontAwesomeIcon icon={faThumbsUp} className="fa-3x color-transparent me-3 position-absolute end-0" />
                            <div className="small">
                                <h3 className="mb-0">{this.state.bestOperation} <small><sup>USD</sup></small></h3>
                                <span className="color-primary">Best Operation</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2 mb-4">
                        <div className="bg-background shadow-sm d-flex align-items-center p-3 position-relative">
                            <FontAwesomeIcon icon={faThumbsDown} className="fa-3x color-transparent me-3 position-absolute end-0" />
                            <div className="small">
                                <h3 className="mb-0">{this.state.worstOperation} <small><sup>USD</sup></small></h3>
                                <span className="color-primary">Worst Operation</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2 mb-4">
                        <div className="bg-background shadow-sm d-flex align-items-center p-3 position-relative">
                            <FontAwesomeIcon icon={faClock} className="fa-3x color-transparent me-3 position-absolute end-0" />
                            <div className="small">
                                <h3 className="mb-0">{this.state.averageHoldTime}</h3>
                                <span className="color-primary">Average Hold Time</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2 mb-4">
                        <div className="bg-background shadow-sm d-flex align-items-center p-3 position-relative">
                            <FontAwesomeIcon icon={faUnlock} className="fa-3x color-transparent me-3 position-absolute end-0" />
                            <div className="small">
                                <h3 className="mb-0">{this.state.openTrades}</h3>
                                <span className="color-primary">Open Trades</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2 mb-4">
                        <div className="bg-background shadow-sm d-flex align-items-center p-3 position-relative">
                            <FontAwesomeIcon icon={faLock} className="fa-3x color-transparent me-3 position-absolute end-0" />
                            <div className="small">
                                <h3 className="mb-0">{this.state.closedTrades}</h3>
                                <span className="color-primary">Closed Trades</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}

export default SummaryPage;