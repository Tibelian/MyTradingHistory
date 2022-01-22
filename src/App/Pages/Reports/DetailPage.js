import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createChart } from 'lightweight-charts';
import React from 'react';
import { useParams } from 'react-router-dom';
import Select from 'react-select';

class DetailPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            report: {
                id: 1,
                name: 'ALIBABA GROUP HOLDING',
                status: 'Closed',
                startDate: '23/06/2021 19:23',
                symbol: 'BABA',
                entry: 214.00,
                exit: 217.00,
                amount: 4,
                profitUsd: 10.16,
                profitPercentage: 1.17,
                operation: 'Long',
                logo: 'https://finnhub.io/api/logo?symbol=BABA',
                instrument: 'Share',
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
                    }
                ],
                screenshots: []
            }
        };
    }

    componentDidMount() {
        this.props.handleCurrentPage('Reports / ' + this.state.report.name.toLowerCase());
        this.mountChart();
    }

    mountChart = () => {
        const chart = createChart(document.getElementById('report_chart'), { height: 350 });
        const lineSeries = chart.addAreaSeries({
            lineColor: 'rgb(51, 152, 219)',
            topColor: 'rgba(51, 152, 219, .5)',
            bottomColor: 'rgba(51, 152, 219, .05)',
        });
        // example: https://finnhub.io/api/v1/stock/candle?symbol=BABA&resolution=60&from=1631022248&to=1631627048&token=c48mqjqad3ief8nk6bog
        lineSeries.setData([
            { time: '2019-04-01', value: 78.23 },
            { time: '2019-04-02', value: 80.43 },
            { time: '2019-04-04', value: 74.21 },
            { time: '2019-04-05', value: 72.11 },
            { time: '2019-04-06', value: 73.21 },
            { time: '2019-04-07', value: 76.87 },
            { time: '2019-04-08', value: 82.64 },
            { time: '2019-04-09', value: 88.23 },
            { time: '2019-04-10', value: 83.34 },
            { time: '2019-04-11', value: 80.01 },
            { time: '2019-04-12', value: 96.63 },
            { time: '2019-04-13', value: 76.64 },
            { time: '2019-04-14', value: 81.89 },
            { time: '2019-04-15', value: 74.43 },
            { time: '2019-04-16', value: 80.01 },
            { time: '2019-04-17', value: 96.63 },
            { time: '2019-04-18', value: 76.64 },
            { time: '2019-04-19', value: 81.89 },
            { time: '2019-04-20', value: 74.43 },
            { time: '2019-04-21', value: 76.13 },
            { time: '2019-04-22', value: 77.32 },
            { time: '2019-04-23', value: 79.23 },
            { time: '2019-04-24', value: 76.31 },
            { time: '2019-04-25', value: 78.72 },
            { time: '2019-04-26', value: 80.43 },
            { time: '2019-04-27', value: 83.63 },
            { time: '2019-04-28', value: 84.43 },
            { time: '2019-04-29', value: 86.25 },
            { time: '2019-04-30', value: 88.53 },
            { time: '2019-05-01', value: 90.46 },
            { time: '2019-05-02', value: 93.46 },
            { time: '2019-05-03', value: 90.35 },
            { time: '2019-05-04', value: 92.76 },
            { time: '2019-05-05', value: 97.46 },
            { time: '2019-05-06', value: 96.36 },
            { time: '2019-05-07', value: 94.36 },
            { time: '2019-05-08', value: 98.76 },
            { time: '2019-05-09', value: 102.43 },
            { time: '2019-05-10', value: 105.76 },
        ]);
        lineSeries.setMarkers([
            {
                time: '2019-04-08',
                position: 'aboveBar',
                color: 'red',
                shape: 'arrowDown',
                text: 'purchase'
            },
            {
                time: '2019-04-17',
                position: 'aboveBar',
                color: 'red',
                shape: 'arrowDown',
                text: 'sale'
            },
        ]);
    }

    render() {

        // TESTING
        if (this.props.id !== 1) 
            return <span className="text-danger h1">THIS REPORT IS NOT AVAILABLE</span>

        const tags = [
            { value: 'Trendline Support', label: 'Trendline Support' },
            { value: 'Trendline Resistance', label: 'Trendline Resistance' },
            { value: 'Horizontal S/R', label: 'Horizontal S/R   ' },
            { value: 'Wedge Up', label: 'Wedge Up' },
            { value: 'Wedge', label: 'Wedge' },
            { value: 'Wedge Down', label: 'Wedge Down' },
            { value: 'Triangle Ascending', label: 'Triangle Ascending' },
            { value: 'Triangle Descending', label: 'Triangle Descending' },
            { value: 'Channel Up', label: 'Channel Up' },
            { value: 'Channel', label: 'Channel' },
            { value: 'Channel Down', label: 'Channel Down' },
            { value: 'Multiple Top', label: 'Multiple Top' },
            { value: 'Double Bottom', label: 'Double Bottom' },
            { value: 'Multiple Bottom', label: 'Multiple Bottom' },
            { value: 'Head&Shoulders', label: 'Head&Shoulders' }
        ];

        return (
            <div>
                <section className="row mb-4">
                    <div className="col-12">
                        <div className="bg-background shadow-sm p-3 d-flex flex-wrap">
                            <div className="col-auto d-flex align-items-center mb-3 mb-lg-0">
                                <img src={this.state.report.logo} alt="logo" className="me-2" width="50" />
                                <div>
                                    <h2 className="h5 mb-1">{this.state.report.name}</h2>
                                    <span className="text-muted">{this.state.report.symbol}</span>
                                </div>
                            </div>
                            <div className="ms-auto d-flex flex-wrap">
                                <div className="me-3 d-flex align-items-center mb-3 mb-lg-0">
                                    <label htmlFor="report_tags">Tags:</label>
                                    <Select options={tags} id="report_tags" className="ms-2" isMulti isClearable={false} />
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-column px-3 text-center border-end">
                                        <small className="text-muted">Trade</small>
                                        {this.state.report.status.toLowerCase() === 'open' ? (
                                            <span className="badge bg-secondary">Open</span>
                                        ) : (
                                            <span className="badge bg-secondary">Closed</span>
                                        )}
                                    </div>
                                    <div className="d-flex flex-column px-3 text-center border-end">
                                        <small className="text-muted">Instrument</small>
                                        <span className="badge bg-secondary">{this.state.report.instrument}</span>
                                    </div>
                                    <div className="d-flex flex-column ps-3 text-center">
                                        <small className="text-muted">Profit</small>
                                        {this.state.report.profitUsd < 0 ? (
                                            <span className="badge bg-danger">-${this.state.report.profitUsd}</span>
                                        ) : (
                                            <span className="badge bg-success">+${this.state.report.profitUsd}</span>
                                        )}
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </section>
            
                <section className="row mb-4">
                    <div className="col-12">
                        <div className="bg-background shadow-sm p-3">
                            <h2 className="h5">Transactions</h2>
                            <div className="table-responsive">
                                <table className="table table-sm table-hover table-stripped w-100 mb-0">
                                    <thead>
                                        <tr>
                                            <th>Action</th>
                                            <th>Date</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Value</th>
                                            <th>Commission</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.report.transactions.map((tx, index) => (
                                            <tr key={index}>
                                                <td>{tx.quantity < 0 ? "Purchase" : "Sale"}</td>
                                                <td>{tx.date}</td>
                                                <td>{tx.quantity}</td>
                                                <td>{tx.price}</td>
                                                <td>{tx.value}</td>
                                                <td>{tx.commission}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            
                <section className="row mb-4">
                    <div className="col-md-6 h-100 mb-4 mb-md-0">
                        <div className="bg-background shadow-sm p-3">
                            <h2 className="h5">Notes</h2>
                            <textarea rows="4" className="form-control" placeholder="Write here your notes"></textarea>
                        </div>
                    </div>
                    <div className="col-md-6 h-100">
                        <div className="bg-background shadow-sm p-3">
                            <h2 className="h5">Screenshots</h2>
                                {this.state.report.screenshots.map((screenshot, index) => (
                                    <div key={index} className="col-6">
                                        <img src={screenshot.url} alt={screenshot.title} className="img-fluid" />
                                    </div>
                                ))}
                            <div className="col-12">
                                <label htmlFor="new_screenshot" className="upload">
                                    <FontAwesomeIcon icon={faUpload} className="fa-3x" />
                                </label>
                                <input type="file" className="d-none" id="new_screenshot" accept="image/*" />
                            </div>
                        </div>
                    </div>
                </section>
            
                <section className="row mb-4">
                    <div className="col-12">
                        <div className="bg-background shadow-sm p-3">
                            <h2 className="h5">Chart during trade period</h2>
                            <div id="report_chart"></div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}

export default function ReportsDetailPage(props) {
    const { id } = useParams();
    return (<DetailPage id={id} handleCurrentPage={props.handleCurrentPage} />);
  }
  