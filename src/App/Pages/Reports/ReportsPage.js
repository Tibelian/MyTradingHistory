import React from 'react';

class ReportsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
    }

    componentDidMount() {
        this.props.handleCurrentPage('Reports');
    }

    render() {


        return (
            <div>
                <section className="row mb-4">
                    <div className="col-12">
                        <div className="bg-background shadow-sm p-3 rounded">
                            <div className="table-responsive">
                                <table className="datatable table table-sm table-hover table-stripped w-100">
                                    <thead className="table-light">
                                        <tr>
                                            <th></th>
                                            <th>Nombre</th>
                                            <th>Estado</th>
                                            <th>Fecha inicio</th>
                                            <th>Símbolo</th>
                                            <th>Entrada</th>
                                            <th>Salida</th>
                                            <th>Tamaño</th>
                                            <th>Beneficio €</th>
                                            <th>Beneficio %</th>
                                            <th>Operación</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/*
                                        {% for folder in folders %}
            
                                            <tr>
                                                <td>
                                                    <a href="{{ url('dashboard_folders_edit', {'id': folder.id}) }}">
                                                        <i className="fas fa-edit"></i>
                                                    </a>
                                                </td>
                                                <td>{{ folder.name }}</td>
                                                <td>{{ folder.status }}</td>
                                                <td>{{ folder.entryDate|date('d/m/Y H:i') }}</td>
                                                <td>{{ folder.symbol }}</td>
                                                <td>{{ folder.entry|number_format }}</td>
                                                <td>{{ folder.exitSell|number_format }}</td>
                                                <td>{{ folder.size }}</td>
                                                <td>{{ folder.profitCurrency|number_format }}</td>
                                                <td>{{ folder.profitPercentage|number_format }}</td>
                                                <td>{{ folder.side }}</td>
                                            </tr>
            
                                        {% endfor %}
                                        */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}

export default ReportsPage;