import React from 'react';

class TransactionsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
    }

    componentDidMount() {
        this.props.handleCurrentPage('Transactions');
    }

    render() {
        return (
            <div>
                <section className="row mb-4">
                    <div className="col-12 d-flex">
                        <div className="bg-background shadow-sm p-3 rounded">
                            <a href="{{ url('dashboard_transaction_add') }}" className="btn btn-primary"><i className="fas fa-plus-circle"></i> Agregar nueva</a>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalImportCsv"><i className="fas fa-plus-circle"></i> Importar datos</button>
                            <a href="{{ url('dashboard_transaction_export_csv') }}" className="btn btn-primary"><i className="fas fa-plus-circle"></i> Exportar datos</a>
                        </div>
                    </div>
                </section>
                <section className="row mb-4">
                    <div className="col-12">
                        <div className="bg-background shadow-sm p-3 rounded">
                            <div className="table-responsive">
                                <table className="datatable table table-sm table-hover table-stripped">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Producto</th>
                                            <th>ISIN</th>
                                            <th>Bolsa de</th>
                                            <th>Centro de ejecución</th>
                                            <th>Número</th>
                                            <th>Precio</th>
                                            <th>Valor local</th>
                                            <th>Valor</th>
                                            <th>Tipo de cambio</th>
                                            <th>Coste transacción</th>
                                            <th>Total</th>
                                            <th>Fecha y hora</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/*
                                        {% for transaction in transactions %}

                                            <tr>
                                                <td>{{ transaction.product }}</td>
                                                <td>{{ transaction.isin }}</td>
                                                <td>{{ transaction.bolsa }}</td>
                                                <td>{{ transaction.executionCenter }}</td>
                                                <td>{{ transaction.number }}</td>
                                                <td>{{ transaction.price ~ ' ' ~ transaction.priceCurrency }}</td>
                                                <td>{{ transaction.value ~ ' ' ~ transaction.valueCurrency }}</td>
                                                <td>{{ transaction.localValue ~ ' ' ~ transaction.localValueCurrency }}</td>
                                                <td>{{ transaction.changeType }}</td>
                                                <td>{{ transaction.cost }}</td>
                                                {% if transaction.total > 0 %}
                                                    <td><span className="badge rounded-pill bg-success">{{ transaction.total }}</span></td>
                                                {% else %}
                                                    <td><span className="badge rounded-pill bg-danger">{{ transaction.total }}</span></td>
                                                {% endif %}
                                                <td>{{ transaction.date|date('d/m/Y H:i') }}</td>
                                            </tr>

                                        {% endfor %}
                                        */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="modal fade" id="modalImportCsv" tabindex="-1" aria-labelledby="modalImportCsvLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalImportCsvLabel">Importar archivo CSV</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label>Archivo CSV</label>
                                    <input className="form-control form-control-lg" />
                                </div>
                                <div className="d-flex flex-wrap justify-content-between">
                                    <button type="submit" className="btn btn-primary">Subir archivo e importar datos</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default TransactionsPage;