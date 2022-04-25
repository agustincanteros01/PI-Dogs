import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getDetails } from '../actions/actions';
import { Link } from 'react-router-dom'

function Detalles(props) {

    const [detalles, setDetalles] = useState();

    useEffect(() => {
        setDetalles(props.dogsDetalles)
    }, [props.dogsDetalles]);


    if (!detalles) {
        return (
            <div>
                <h2>CARGANDO DATOS</h2>
            </div>
        )
    } else {
        return (
            <div>

                <Link to='/dogs'>VOLVER</Link>

                <h2>DATOS CARGADOS</h2>
                <ul>
                    {
                        detalles.map(a => (
                            <div key={a[0].id}>
                                <ul>
                                    <li>Nombre: {a[0].name}</li>
                                    <li>Id: {a[0].id}</li>
                                    {a[0].weight.imperial ? <li>{a[0].weight.imperial}</li> : <li>{a[0].weight}</li>}
                                </ul>
                            </div>
                        ))
                    }
                </ul>
            </div>
        )
    }


}

const mapStateToProps = state => ({
    dogsDetalles: state.dogsDetalles
})

export default connect(mapStateToProps, { getDetails })(Detalles)