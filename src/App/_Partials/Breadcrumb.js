import React from "react";

class Breadcrumb extends React.Component {

    render() {

        const navStyle = {
            "--bs-breadcrumb-divider": "url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;)"
        }

        return (
            <nav style={navStyle} aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">Dashboard</li>
                    <li className="breadcrumb-item active text-capitalize" aria-current="page">{this.props.currentPage}</li>
                </ol>
            </nav>
        );
    }

}

export default Breadcrumb;