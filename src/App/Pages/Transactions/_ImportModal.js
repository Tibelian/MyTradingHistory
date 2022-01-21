import React from 'react';
import { Modal } from 'react-bootstrap';

export default class ImportModal extends React.Component {
    
    render() {
        return (
            <Modal size="lg" show={this.props.show} onHide={()=>{this.props.setShow(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Import CSV file</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label htmlFor="csv_file">Archivo CSV</label>
                    <input className="form-control form-control-lg" id="csv_file" type="file" />
                </Modal.Body>
                <Modal.Footer className="d-flex flex-wrap justify-content-between">
                    <button className="btn btn-secondary" onClick={()=>{this.props.setShow(false)}}>
                        Close
                    </button>
                    <button className="btn btn-primary">
                        Upload and import data
                    </button>
                </Modal.Footer>
            </Modal>
        );
    }

}
