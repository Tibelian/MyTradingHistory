import { faBars, faBell, faInfoCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Alert } from "react-bootstrap";

class Header extends React.Component {

    render() {
        return (
            <header id="header" className="shadow">
                
                <section className="container-fluid">
                    <div className="row py-2">
                        <div className="col-4 d-flex justify-content-start">
                            <button type="button" className="btn btn-primary me-2" id="menu-button">
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                            <button type="button" className="btn btn-primary" id="search-button">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                            <form className="ms-2 w-100 d-none" id="search-form">
                                <div className="input-group">
                                    <input type="search" className="form-control" placeholder="Introduce aquí tu búsqueda" required name="keywords" />
                                    <button type="submit" className="btn btn-light">
                                        <FontAwesomeIcon icon={faSearch} /> Buscar
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <span className="h3 mb-0">MyTradeHistory</span>
                        </div>
                        <div className="col-4 d-flex justify-content-end">
                            <button type="button" className="btn btn-primary">
                                <FontAwesomeIcon icon={faBell} />    
                            </button>
                        </div>
                    </div>
                </section>

                <div id="alerts">
                    {/*
                    <Alert variant="danger" dismissible={true} transition={true}>
                        <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    </Alert>
                    */}
                </div>
            
            </header>
        );
    }

}

export default Header;