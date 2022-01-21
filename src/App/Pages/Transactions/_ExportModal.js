import React from 'react';
import { Modal } from 'react-bootstrap';

export default class ExportModal extends React.Component {
    
    render() {
        return (
            <Modal size="lg" show={this.props.show} onHide={()=>{this.props.setShow(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Export data to CSV file</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Select date period</h5>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="csv_file">From date</label>
                            <input className="form-control" type="date" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="csv_file">To date</label>
                            <input className="form-control" type="date" />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="d-flex flex-wrap justify-content-between">
                    <button className="btn btn-secondary" onClick={()=>{this.props.setShow(false)}}>
                        Close
                    </button>
                    <button className="btn btn-primary">
                        Confirm exportation
                    </button>
                </Modal.Footer>
            </Modal>
        );
    }

}
