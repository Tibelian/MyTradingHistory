import { faUserCircle, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav, Tab } from "react-bootstrap";
import avatar from '../../_Partials/avatar.png';

export default class UserSettings extends React.Component {


    componentDidMount() {
        this.props.handleCurrentPage('User Settings');
    }

    render() {
        return (
            <Tab.Container id="user_settings" defaultActiveKey="first">
                <div className="row px-1">
                    <div className="col-sm-2 px-2 mb-4 mb-sm-0">
                        <div className="bg-white shadow-sm p-3">
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        <FontAwesomeIcon icon={faUserCircle} /> Edit profile
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        <FontAwesomeIcon icon={faUserLock} /> Change password
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                    <div className="col-sm-10 px-3">
                        <div className="bg-white shadow-sm p-3 py-5">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div className="row justify-content-center mb-4 align-items-center">
                                        <div className="col-4 col-md-3 col-lg-2 text-end">
                                            <img src={avatar} width="50" className="rounded" />
                                        </div>
                                        <div className="col-8">
                                            <label htmlFor="user_avatar">Profile image:</label>
                                            <input type="file" className="form-control form-control-sm" id="user_avatar" />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center mb-4 align-items-center">
                                        <div className="col-4 col-md-3 col-lg-2 text-end">
                                            <label htmlFor="user_username">Username:</label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" className="form-control" id="user_username" />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center mb-4 align-items-center">
                                        <div className="col-4 col-md-3 col-lg-2 text-end">
                                            <label htmlFor="user_email">Email Address:</label>
                                        </div>
                                        <div className="col-8">
                                            <input type="email" className="form-control" id="user_email" />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center mb-4 align-items-center">
                                        <div className="col-4 col-md-3 col-lg-2 text-end">
                                            <label htmlFor="user_website">Website:</label>
                                        </div>
                                        <div className="col-8">
                                            <input type="url" className="form-control" id="user_website" />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center mb-4 align-items-center">
                                        <div className="col-4 col-md-3 col-lg-2 text-end">
                                            <label htmlFor="user_public">Public profile:</label>
                                        </div>
                                        <div className="col-8">
                                            <div className="form-check form-switch">
                                                <input type="checkbox" className="form-check-input" id="user_public" />
                                                <small className="text-muted">(If enabled, anyone can view your trading reports)</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-2"></div>
                                        <div className="col-8 d-flex">
                                            <button className="btn btn-primary">Save</button>
                                            <button className="btn btn-outline-danger ms-auto">Delete my account</button>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div className="row justify-content-center mb-4 align-items-center">
                                        <div className="col-4 col-md-3 col-lg-2 text-end">
                                            <label htmlFor="user_oldpass">Previous Password:</label>
                                        </div>
                                        <div className="col-8">
                                            <input type="password" className="form-control" id="user_oldpass" />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center mb-4 align-items-center">
                                        <div className="col-4 col-md-3 col-lg-2 text-end">
                                            <label htmlFor="user_newpass">New Password:</label>
                                        </div>
                                        <div className="col-8">
                                            <input type="password" className="form-control" id="user_newpass" />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center mb-4 align-items-center">
                                        <div className="col-4 col-md-3 col-lg-2 text-end">
                                            <label htmlFor="user_newpass2">Confirm New Password:</label>
                                        </div>
                                        <div className="col-8">
                                            <input type="password" className="form-control" id="user_newpass2" />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-2"></div>
                                        <div className="col-8 d-flex">
                                            <button className="btn btn-primary">Change password</button>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </div>
                </div>
            </Tab.Container>
        );
    }

}

