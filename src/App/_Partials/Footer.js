
import React from "react";

class Footer extends React.Component {

    render() {
        return (
            <section className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <a href="#">Términos y condiciones</a>
                        <a href="#">Política de privacidad</a>
                    </div>
                    <div className="col-12">
                        &copy; Todos los derechos reservados
                    </div>
                </div>
            </section>
        );
    }

}

export default Footer;