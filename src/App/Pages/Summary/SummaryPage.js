import React from 'react';

class SummaryPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
    }

    componentDidMount() {
        this.props.handleCurrentPage('Summary');
    }

    render() {
        return (
            <div>
                <section className="row mb-4">
                    <div className="col-6 col-sm-4 col-lg-3">
                        <div className="bg-background shadow-sm d-flex align-items-center p-3 rounded">
                            <i className="fas fa-tasks fa-3x text-secondary me-3"></i>
                            <div className="small">
                                <h3 className="mb-0">123</h3>
                                <span className="text-secondary">Operaciones realizadas</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                        <div className="bg-background shadow-sm d-flex align-items-center p-3 rounded">
                            <i className="fas fa-check fa-3x text-primary me-3"></i>
                            <div className="small">
                                <h3 className="mb-0">32</h3>
                                <span className="text-primary">Operaciones con éxito</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                        <div className="bg-background shadow-sm d-flex align-items-center p-3 rounded">
                            <i className="fas fa-times fa-3x text-danger me-3"></i>
                            <div className="small">
                                <h3 className="mb-0">12</h3>
                                <span className="text-danger">Operaciones falladas</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                        <div className="bg-background shadow-sm d-flex align-items-center p-3 rounded">
                            <i className="fas fa-award fa-3x text-success me-3"></i>
                            <div className="small">
                                <h3 className="mb-0">50%</h3>
                                <span className="text-success">Beneficio</span>
                            </div>
                        </div>
                    </div>
                </section>
            
                <section className="row mb-4">
                    <div className="col-12">
                        <div className="bg-background shadow-sm p-3 rounded">
                            <h3>Resumen cuenta</h3>
                            <div className="d-flex flex-wrap">
                                <ul className="col-sm-3 list-group">
                                    <li className="list-group-item">Depósito: <span className="badge bg-secondary">AAAA €</span></li>
                                    <li className="list-group-item">Retiros: <span className="badge bg-secondary">0,00 €</span></li>
                                    <li className="list-group-item">Balance: <span className="badge bg-secondary">123 €</span></li>
                                    <li className="list-group-item">Rentabilidad: <span className="badge bg-secondary">-4,31 %</span></li>
                                    <li className="list-group-item">Comisiones: <span className="badge bg-danger">123 €</span></li>
                                </ul>
                                <ul className="col-sm-3 list-group">
                                    <li className="list-group-item">Beneficio bruto: <span className="badge bg-secondary">1.000,00 €</span></li>
                                    <li className="list-group-item">Pérdida bruta: <span className="badge bg-secondary">0,00 €</span></li>
                                    <li className="list-group-item">Resultado neto: <span className="badge bg-secondary">957,06 €</span></li>
                                    <li className="list-group-item">Profit factor: <span className="badge bg-secondary">-4,31 %</span></li>
                                </ul>
                                <ul className="col-sm-3 list-group">
                                    <li className="list-group-item">Beneficio medio: <span className="badge bg-secondary">1.000,00 €</span></li>
                                    <li className="list-group-item">Pérdida media: <span className="badge bg-secondary">0,00 €</span></li>
                                    <li className="list-group-item">Ratio: <span className="badge bg-secondary">957,06 €</span></li>
                                </ul>
                                <ul className="col-sm-3 list-group">
                                    <li className="list-group-item">Máx. ganadas consecutivas: <span className="badge bg-secondary">1.000,00 €</span></li>
                                    <li className="list-group-item">Máx. perdidas consecutivas: <span className="badge bg-secondary">0,00 €</span></li>
                                    <li className="list-group-item">Mejor operación: <span className="badge bg-secondary">957,06 €</span></li>
                                    <li className="list-group-item">Peor operación: <span className="badge bg-secondary">957,06 €</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            
                <section className="row mb-4">
                    <div className="col-12 col-sm-6">
                        <div className="bg-background shadow-sm p-3 rounded">
                            <h3>Rentabilidad de la cuenta</h3>
                            <canvas id="myChart1"></canvas>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="bg-background shadow-sm p-3 rounded">
                            <h3>Rentabilidad mensual</h3>
                            <canvas id="myChart2"></canvas>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}

export default SummaryPage;