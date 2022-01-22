import React from 'react';
import { Link } from 'react-router-dom';

class ReportsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reports: [
                {
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
                },
                {
                    id: 2,
                    name: 'IT TECH PACKAGING INC',
                    status: 'Open',
                    startDate: '08/06/2021 19:56',
                    symbol: 'ITP',
                    entry: 0.50,
                    exit: null,
                    amount: 2500,
                    profitUsd: null,
                    profitPercentage: null,
                    operation: 'Short',
                },
                {
                    id: 3,
                    name: 'DIA',
                    status: 'Closed',
                    startDate: '28/06/2021 14:33',
                    symbol: 'DIA.MC',
                    entry: 0.07,
                    exit: 0.14,
                    amount: 20,
                    profitUsd: 1.4,
                    profitPercentage: 50.00,
                    operation: 'Short',
                }
            ]
        };
    }

    componentDidMount() {
        this.props.handleCurrentPage('Reports');
    }

    render() {
        return (
            <section className="row mb-4">
                <div className="col-12">
                <div className="bg-background shadow-sm p-3">
                <div className="table-responsive">
                    <table className="datatable table table-sm table-hover table-stripped w-100 mb-0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Start Date</th>
                                <th>Symbol</th>
                                <th>Entry</th>
                                <th>Exit</th>
                                <th>Amount</th>
                                <th>Profit $</th>
                                <th>Profit %</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.reports.map((rp, index) => (
                                <tr key={index}>
                                    <td>
                                        <Link to={'./' + rp.id} className="text-decoration-none">
                                            {rp.name}
                                        </Link>
                                    </td>
                                    <td>
                                        {(() => {
                                            if (rp.status.toLowerCase() === 'open') 
                                                return <span className="badge bg-danger">Open</span>
                                            if (rp.status.toLowerCase() === 'closed') 
                                                return <span className="badge bg-secondary">Closed</span>
                                        })()}
                                    </td>
                                    <td>{rp.startDate}</td>
                                    <td>{rp.symbol}</td>
                                    <td>{rp.entry}</td>
                                    <td>{rp.exit}</td>
                                    <td>{rp.amount}</td>
                                    <td>
                                        {(() => {
                                            if (rp.profitUsd == null) 
                                                return <span />;
                                            if (rp.profitUsd < 0) 
                                                return <span className="badge bg-danger">- ${rp.profitUsd}</span>
                                            if (rp.profitUsd >= 0) 
                                                return <span className="badge bg-success">+ ${rp.profitUsd}</span>
                                        })()}
                                    </td>
                                    <td>
                                        {(() => {
                                            if (rp.profitPercentage == null) 
                                                return <span />;
                                            if (rp.profitPercentage < 0) 
                                                return <span className="badge bg-danger">- {rp.profitPercentage}%</span>
                                            if (rp.profitPercentage >= 0) 
                                                return <span className="badge bg-success">+ {rp.profitPercentage}%</span>
                                        })()}
                                    </td>
                                    <td>{rp.operation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
                </div>
            </section>
        );
    }

}

export default ReportsPage;