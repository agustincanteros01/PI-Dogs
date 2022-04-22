import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getDogs } from "../actions/actions";
import { Link } from 'react-router-dom'
import Buscador from './buscador'

function Dogs(props) {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        setDogs(props.dogs)
    }, [props.dogs]);

    return (
        <div>
            <Buscador />
            
            <Link to='/'>VOLVER</Link>
            <Link to='/detalles'>DETALLEs</Link>

            <ul>
                {
                    dogs.map(a => (
                        <div key={a.idDogs}>
                            <ul>
                                <li>Nombre: {a.name}</li>
                                <li>Id: {a.idDogs}</li>
                                <li>{a.peso.imperial}</li>
                            </ul>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    dogs: state.dogs
})

export default connect(mapStateToProps, { getDogs })(Dogs)