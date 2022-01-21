import React from 'react';
import { Modal } from 'react-bootstrap';

export default class NewEntryModal extends React.Component {
    
    render() {
        return (
            <Modal size="lg" show={this.props.show} onHide={()=>{this.props.setShow(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Insert new entry</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="row mb-3">
                        <div class="col-12 col-md-6">
                            <label htmlFor="entry_date">Date</label>
                            <input type="date" id="entry_date" className="form-control" />
                        </div>
                        <div class="col-12 col-md-6">
                            <label htmlFor="entry_product">Product name</label>
                            <input type="text" id="entry_product" className="form-control" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-md-6">
                            <label htmlFor="entry_qty">Quantity</label>
                            <input type="number" id="entry_qty" className="form-control" />
                        </div>
                        <div class="col-12 col-md-6">
                            <label htmlFor="entry_price">Price</label>
                            <input type="number" id="entry_price" className="form-control" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-md-6">
                            <label htmlFor="entry_value">Value</label>
                            <input type="number" id="entry_value" className="form-control" />
                        </div>
                        <div class="col-12 col-md-6">
                            <label htmlFor="entry_commission">Commission</label>
                            <input type="number" id="entry_commission" className="form-control" />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="d-flex flex-wrap justify-content-between">
                    <button className="btn btn-secondary" onClick={()=>{this.props.setShow(false)}}>
                        Close
                    </button>
                    <button className="btn btn-primary">
                        Add transaction
                    </button>
                </Modal.Footer>
            </Modal>
        );
    }

}
