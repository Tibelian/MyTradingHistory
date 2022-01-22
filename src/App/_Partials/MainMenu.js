import { faCalendar, faChartPie, faEdit, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "./avatar.png";

class MainMenu extends React.Component {

    render() {
        let menuOptionClass = "",
            collapseFn = () => {};
        if (!this.props.asideCollapsed) {
            menuOptionClass += "me-2";
        }
        else if (window.innerWidth < 768) {
            collapseFn = this.props.toggleMenu;
        }

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
                        <ul className="nav nav-pills flex-column" onClick={collapseFn}>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    <FontAwesomeIcon icon={faChartPie} className={menuOptionClass} /> <span>Summary</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/transactions">
                                    <FontAwesomeIcon icon={faEdit} className={menuOptionClass} /> <span>Transactions</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/reports">
                                    <FontAwesomeIcon icon={faFolder} className={menuOptionClass} /> <span>Reports</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/calendar">
                                    <FontAwesomeIcon icon={faCalendar} className={menuOptionClass} /> <span>Calendar</span>
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