import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "./avatar.png";

class MainMenu extends React.Component {

    render() {
        return (
            <section className="container-fluid">
                <div className="row">
                    <div className="col-12 px-0 nav-user">
                        <a href="#" className="d-flex align-items-center p-2">
                            <img src={avatar} className="rounded img-fluid" width="59px" />
                            <p className="nav-user-info mb-0">
                                <span className="h5 mb-0">username</span>
                                <small>email@gmail.com</small>
                            </p>
                        </a>
                    </div>
                </div>
                <div className="row py-2">
                    <div className="col-12">
                        <ul className="nav nav-pills flex-column">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    <FontAwesomeIcon icon="chart-pie" /> <span>Summary</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/transactions">
                                    <FontAwesomeIcon icon="edit" /> <span>Transactions</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/reports">
                                    <FontAwesomeIcon icon="folder" /> <span>Reports</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/calendar">
                                    <FontAwesomeIcon icon="calendar" /> <span>Calendar</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }

}

export default MainMenu;