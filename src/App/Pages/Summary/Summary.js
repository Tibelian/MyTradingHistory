import React from 'react';

class Summary extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
    }

    render() {
        return (
            <div>
                <section class="row mb-4">
                    <div class="col-6 col-sm-4 col-lg-3">
                        <div class="bg-background shadow-sm d-flex align-items-center p-3 rounded">
                            <i class="fas fa-tasks fa-3x text-secondary me-3"></i>
                            <div class="small">
                                <h3 class="mb-0">123</h3>
                                <span class="text-secondary">Operaciones realizadas</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-lg-3">
                        <div class="bg-background shadow-sm d-flex align-items-center p-3 rounded">
                            <i class="fas fa-check fa-3x text-primary me-3"></i>
                            <div class="small">
                                <h3 class="mb-0">32</h3>
                                <span class="text-primary">Operaciones con éxito</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-lg-3">
                        <div class="bg-background shadow-sm d-flex align-items-center p-3 rounded">
                            <i class="fas fa-times fa-3x text-danger me-3"></i>
                            <div class="small">
                                <h3 class="mb-0">12</h3>
                                <span class="text-danger">Operaciones falladas</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-lg-3">
                        <div class="bg-background shadow-sm d-flex align-items-center p-3 rounded">
                            <i class="fas fa-award fa-3x text-success me-3"></i>
                            <div class="small">
                                <h3 class="mb-0">50%</h3>
                                <span class="text-success">Beneficio</span>
                            </div>
                        </div>
                    </div>
                </section>
            
                <section class="row mb-4">
                    <div class="col-12">
                        <div class="bg-background shadow-sm p-3 rounded">
                            <h3>Resumen cuenta</h3>
                            <div class="d-flex flex-wrap">
                                <ul class="col-sm-3 list-group">
                                    <li class="list-group-item">Depósito: <span class="badge bg-secondary">AAAA €</span></li>
                                    <li class="list-group-item">Retiros: <span class="badge bg-secondary">0,00 €</span></li>
                                    <li class="list-group-item">Balance: <span class="badge bg-secondary">123 €</span></li>
                                    <li class="list-group-item">Rentabilidad: <span class="badge bg-secondary">-4,31 %</span></li>
                                    <li class="list-group-item">Comisiones: <span class="badge bg-danger">123 €</span></li>
                                </ul>
                                <ul class="col-sm-3 list-group">
                                    <li class="list-group-item">Beneficio bruto: <span class="badge bg-secondary">1.000,00 €</span></li>
                                    <li class="list-group-item">Pérdida bruta: <span class="badge bg-secondary">0,00 €</span></li>
                                    <li class="list-group-item">Resultado neto: <span class="badge bg-secondary">957,06 €</span></li>
                                    <li class="list-group-item">Profit factor: <span class="badge bg-secondary">-4,31 %</span></li>
                                </ul>
                                <ul class="col-sm-3 list-group">
                                    <li class="list-group-item">Beneficio medio: <span class="badge bg-secondary">1.000,00 €</span></li>
                                    <li class="list-group-item">Pérdida media: <span class="badge bg-secondary">0,00 €</span></li>
                                    <li class="list-group-item">Ratio: <span class="badge bg-secondary">957,06 €</span></li>
                                </ul>
                                <ul class="col-sm-3 list-group">
                                    <li class="list-group-item">Máx. ganadas consecutivas: <span class="badge bg-secondary">1.000,00 €</span></li>
                                    <li class="list-group-item">Máx. perdidas consecutivas: <span class="badge bg-secondary">0,00 €</span></li>
                                    <li class="list-group-item">Mejor operación: <span class="badge bg-secondary">957,06 €</span></li>
                                    <li class="list-group-item">Peor operación: <span class="badge bg-secondary">957,06 €</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            
                <section class="row mb-4">
                    <div class="col-12 col-sm-6">
                        <div class="bg-background shadow-sm p-3 rounded">
                            <h3>Rentabilidad de la cuenta</h3>
                            <canvas id="myChart1"></canvas>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <div class="bg-background shadow-sm p-3 rounded">
                            <h3>Rentabilidad mensual</h3>
                            <canvas id="myChart2"></canvas>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}

export default Summary;