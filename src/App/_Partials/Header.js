import { faBars, faBell, faInfoCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

class Header extends React.Component {

    render() {
        return (
            <header id="header" class="shadow">
                
                <section class="container-fluid">
                    <div class="row py-2">
                        <div class="col-4 d-flex justify-content-start">
                            <button type="button" class="btn btn-primary me-2" id="menu-button">
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                            <button type="button" class="btn btn-primary" id="search-button">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                            <form class="ms-2 w-100 d-none" id="search-form">
                                <div class="input-group">
                                    <input type="search" class="form-control" placeholder="Introduce aquí tu búsqueda" required name="keywords" />
                                    <button type="submit" class="btn btn-light">
                                        <FontAwesomeIcon icon={faSearch} /> Buscar
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="col-4 d-flex justify-content-center">
                            <span class="h3 mb-0">MyTradeHistory</span>
                        </div>
                        <div class="col-4 d-flex justify-content-end">
                            <button type="button" class="btn btn-primary">
                                <FontAwesomeIcon icon={faBell} />    
                            </button>
                        </div>
                    </div>
                </section>

                <div id="alerts">
                    <div class="alert alert-info alert-dismissible fade show shadow-sm mb-2" role="alert">
                        <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                        TEST MESSAGE
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
            
            </header>
        );
    }

}

export default Header;