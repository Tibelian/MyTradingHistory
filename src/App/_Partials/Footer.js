
import React from "react";

class Footer extends React.Component {

    render() {
        return (
            <section className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <a href="./">Terms and conditions</a>
                        <a href="./">Privacy policy</a>
                    </div>
                    <div className="col-12">
                        &copy; All Rights Reserved
                    </div>
                </div>
            </section>
        );
    }

}

export default Footer;